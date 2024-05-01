<script lang="ts">
	import { gsap } from 'gsap';
	import { getContext, onMount } from 'svelte';
	import blob from '../../../assets/images/header/blob.png';

	let loadingDuration = getContext<number>('loadingDuration');

	onMount(() => {
		gsap.from('.header-background__shape', {
			opacity: 0,
			duration: 1,
			delay: loadingDuration,
			ease: 'power3.inOut'
		});

		gsap.to('.header-background__shape', {
			x: 50,
			rotate: -35,
			scale: 1.2,
			duration: 10,
			delay: loadingDuration + 1.6,
			ease: 'none',
			repeat: -1,
			yoyo: true
		});
	});
</script>

<div class="header-background">
	<img src={blob} class="header-background__shape" alt="" />
</div>

<style lang="scss">
	.header-background {
		position: absolute;
		inset: 0;
		&__shape {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
		}
		&:after {
			content: '';
			position: absolute;
			inset: 0;
			background-image: var(--noise-url);
			background-size: 100px;
		}
	}
</style>
