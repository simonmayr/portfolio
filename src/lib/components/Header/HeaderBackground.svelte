<script lang="ts">
	import { onMount } from 'svelte';
	import { Renderer, Vec2, Vec4, Mesh, Flowmap, Geometry, Program, Texture } from 'ogl';

	let canvas: HTMLDivElement;

	const vertex = `
    attribute vec2 uv;
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
  `;

	const fragment = `
    precision highp float;
    precision highp int;
    uniform sampler2D tWater;
    uniform sampler2D tFlow;
    uniform float uTime;
    varying vec2 vUv;
    uniform vec4 res;
    uniform vec2 img;

    vec2 centeredAspectRatio(vec2 uvs, vec2 factor){
        return uvs * factor - factor /2. + 0.5;
    }

    void main() {

      // R and G values are velocity in the x and y direction
      // B value is the velocity length
      vec3 flow = texture2D(tFlow, vUv).rgb;

      vec2 uv = .5 * gl_FragCoord.xy / res.xy ;

      vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
      myUV -= flow.xy * (0.15 * 5.2);

      vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);
      myUV2 -= flow.xy * (0.125 * 5.2);

      vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);
      myUV3 -= flow.xy * (0.10 * 5.4);

      vec3 tex = texture2D(tWater, myUV).rgb;
      vec3 tex2 = texture2D(tWater, myUV2).rgb;
      vec3 tex3 = texture2D(tWater, myUV3).rgb;

      gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
    }
  `;

	onMount(() => {
		const _size = [2048, 1638];
		const renderer = new Renderer({ dpr: 2 });
		const gl = renderer.gl;

		canvas.appendChild(gl.canvas);

		// Variable inputs to control flowmap
		let aspect = 1;
		let mouse = new Vec2(-1);
		let velocity = new Vec2();

		const containerWidth = canvas.getBoundingClientRect().width;
		const containerHeight = canvas.getBoundingClientRect().height;

		function resize() {
			gl.canvas.width = containerWidth;
			gl.canvas.height = containerHeight;
			gl.canvas.style.width = containerWidth + 'px';
			gl.canvas.style.height = containerHeight + 'px';

			let a1, a2;
			let imageAspect = _size[1] / _size[0];

			if (containerHeight / containerWidth < imageAspect) {
				a1 = 1;
				a2 = containerHeight / containerWidth / imageAspect;
			} else {
				a1 = (containerWidth / containerHeight) * imageAspect;
				a2 = 1;
			}

			mesh.program.uniforms.res.value = new Vec4(containerWidth, containerHeight, a1, a2);

			renderer.setSize(containerWidth, containerHeight);
			aspect = containerWidth / containerHeight;
		}

		const flowmap = new Flowmap(gl, {
			// size of the effect
			falloff: 0.25,
			dissipation: 0.92,
			alpha: 0.4
		});

		const geometry = new Geometry(gl, {
			position: {
				size: 2,
				data: new Float32Array([-1, -1, 3, -1, -1, 3])
			},
			uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
		});

		const texture = new Texture(gl, {
			minFilter: gl.LINEAR,
			magFilter: gl.LINEAR
		});

		const img = new Image();
		img.onload = () => (texture.image = img);
		img.crossOrigin = 'Anonymous';
		img.src = '/header3.png';

		let a1, a2;
		let imageAspect = _size[1] / _size[0];

		if (containerHeight / containerWidth < imageAspect) {
			a1 = 1;
			a2 = containerHeight / containerWidth / imageAspect;
		} else {
			a1 = (containerWidth / containerHeight) * imageAspect;
			a2 = 1;
		}

		const program = new Program(gl, {
			vertex,
			fragment,
			uniforms: {
				uTime: { value: 0 },
				tWater: { value: texture },
				res: {
					value: new Vec4(containerWidth, containerHeight, a1, a2)
				},
				img: { value: new Vec2(_size[1], _size[0]) },
				// Note that the uniform is applied without using an object and value property
				// This is because the class alternates this texture between two render targets
				// and updates the value property after each render.
				tFlow: flowmap.uniform
			}
		});

		const mesh = new Mesh(gl, { geometry, program });

		canvas.addEventListener('resize', resize, false);
		resize();

		const isTouchCapable = 'ontouchstart' in window;

		if (isTouchCapable) {
			canvas.addEventListener('touchstart', updateMouse, false);
			canvas.addEventListener('touchmove', updateMouse, { passive: false });
		} else {
			canvas.addEventListener('mousemove', updateMouse, false);
		}

		let lastTime: number;
		let lastMouse = new Vec2();
		let needsUpdate = false;

		function updateMouse(e: MouseEvent | TouchEvent) {
			e.preventDefault();

			let ex: number;
			let ey: number;

			if ('changedTouches' in e) {
				e = e as TouchEvent;
				ex = e.changedTouches[0].pageX;
				ey = e.changedTouches[0].pageY;
			} else {
				ex = (e as MouseEvent).pageX;
				ey = (e as MouseEvent).pageY;
			}

			let rect = canvas.getBoundingClientRect();

			let offsetX = rect.left + window.scrollX;
			let offsetY = rect.top + window.scrollY;

			// let scrollLeft = (window.scrollX || canvas.scrollLeft) - (canvas.clientLeft || 0);
			// let scrollTop = (window.scrollY || canvas.scrollTop) - (canvas.clientTop || 0);

			let x = ex - offsetX;
			let y = ey - offsetY;

			mouse.set(x / gl.renderer.width, 1.0 - y / gl.renderer.height);

			if (!lastTime) {
				lastTime = performance.now();
				lastMouse.set(x, y);
			}

			let deltaX = x - lastMouse.x;
			let deltaY = y - lastMouse.y;

			lastMouse.set(x, y);

			let time = performance.now();

			let delta = Math.max(10.4, time - lastTime);

			lastTime = time;
			velocity.x = deltaX / delta;
			velocity.y = deltaY / delta;
			needsUpdate = true;
		}

		requestAnimationFrame(update);

		function update(t: number) {
			requestAnimationFrame(update);

			if (!needsUpdate) {
				mouse.set(-1);
				velocity.set(0);
			}

			needsUpdate = false;
			// Update flowmap inputs
			flowmap.aspect = aspect;
			flowmap.mouse.copy(mouse);
			// Ease velocity input, slower when fading out
			flowmap.velocity.lerp(velocity, velocity.len() ? 0.15 : 0.1);
			flowmap.update();
			program.uniforms.uTime.value = t * 0.01;
			renderer.render({ scene: mesh });
		}
	});
</script>

<div bind:this={canvas} class="header-background"></div>

<style lang="scss">
	.header-background {
		position: absolute;
		inset: 0;
	}
</style>
