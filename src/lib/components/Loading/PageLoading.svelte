<script lang="ts">
	import { gsap } from 'gsap';
	import { getContext, onMount } from 'svelte';

	let loadingDuration = getContext<number>('loadingDuration');

	onMount(() => {
		var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

		gsap.to('.page-loading', {
			translateY: '-100%',
			duration: 0.8,
			delay: loadingDuration,
			ease: 'power3.in'
		});

		gsap.to('.page-loading-circle, .page-loading-text', {
			opacity: 0,
			duration: 0.4,
			delay: loadingDuration,
			ease: 'power3.inOut'
		});

		tl.to('.page-loading-circle__one', {
			scale: 2.5,
			duration: 0.8,
			ease: 'power3.out'
		});
		tl.to(
			'.page-loading-circle__two',
			{
				scale: 2.5,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.4'
		);
		tl.to(
			'.page-loading-circle__three',
			{
				scale: 2.5,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.4'
		);

		let circleSpin = gsap.to('.page-loading-circle', {
			rotate: 360,
			ease: 'power3.out',
			duration: 10,
			repeat: -1
		});

		setTimeout(() => {
			tl.pause();
			circleSpin.pause();
		}, loadingDuration * 1000);
	});
</script>

<div class="page-loading">
	<div class="page-loading-circle">
		<div class="page-loading-circle__one"></div>
		<div class="page-loading-circle__two"></div>
		<div class="page-loading-circle__three"></div>
	</div>
	<div class="page-loading-text headline">loading</div>
</div>

<style lang="scss">
	.page-loading {
		position: fixed;
		width: 100vw;
		height: 100vh;
		aspect-ratio: 1/1;
		z-index: 1000;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 30px;
		background-color: var(--clr-secondary);
		pointer-events: none;
		&-circle {
			--size: 200px;
			width: var(--size);
			aspect-ratio: 1/1;
			border-radius: 100%;
			position: relative;
			overflow: hidden;
			border: 2px solid white;
			&__one,
			&__two,
			&__three {
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 100%;
				scale: 0;
			}
			&__one {
				background-color: var(--clr-primary);
				bottom: -90px;
				right: -90px;
			}
			&__two {
				background-color: var(--clr-white);
				bottom: -90px;
				right: 90px;
			}
			&__three {
				background-color: var(--clr-secondary);
				bottom: -90px;
				right: -90px;
			}
		}
	}
</style>
