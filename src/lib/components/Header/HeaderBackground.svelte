<!-- <script lang="ts">
	import { gsap } from 'gsap';
	import { getContext, onMount } from 'svelte';

	let loadingDuration = getContext<number>('loadingDuration');

	onMount(() => {
		gsap.from('.line--line1', {
			opacity: 0,
			height: 0,
			duration: 2,
			ease: 'power3.inOut',
			delay: loadingDuration + 0.6
		});
		gsap.from('.line--line2', {
			opacity: 0,
			height: 0,
			duration: 2,
			ease: 'power3.inOut',
			delay: loadingDuration + 0.6
		});
	});
</script> -->

<div class="line line--line1 line--blur"></div>
<div class="line line--line2 line--blur"></div>

<style lang="scss">
	.line {
		height: 100px;
		width: 100vw;
		position: absolute;
		left: 0;
		top: 50vh;
		@media (max-width: 992px) {
			width: 70vw;
		}
		&--line1 {
			rotate: 15deg;
			background: conic-gradient(from 2.35rad, #7bb8b9, #050aa5);
		}

		&--line2 {
			rotate: -15deg;
			background: conic-gradient(from 4.5rad, #5ee2ff, #3805a5);
		}
		&--blur {
			filter: blur(10rem);
		}
	}
</style>
