<script lang="ts">
	import HeaderBackground from './HeaderBackground.svelte';
	import headerArrow from '../../../assets/icons/arrow-header.svg';
	import { gsap } from 'gsap';
	import { getContext, onMount } from 'svelte';

	let loadingDuration = getContext<number>('loadingDuration');

	onMount(() => {
		gsap.from('.hero-text__content', {
			opacity: 0,
			y: '100%',
			duration: 1,
			ease: 'power3.inOut',
			delay: loadingDuration + 0.6,
			stagger: {
				each: 0.1,
				ease: 'linear'
			}
		});

		gsap.from('.header__scroll-down', {
			opacity: 0,
			y: '-100%',
			duration: 2,
			delay: loadingDuration + 1.2
		});

		gsap.to('.header__scroll-down img', {
			y: 10,
			duration: 1,
			repeat: -1,
			yoyo: true
		});
	});
</script>

<div class="header">
	<HeaderBackground />
	<div class="header__hero">
		<div class="hero-text">
			<span class="hero-text__content">Simon Mayr</span>
		</div>
		<div class="hero-text">
			<span class="hero-text__content">Webseiten <span class="clr-primary">&</span></span>
		</div>
		<div class="hero-text">
			<span class="hero-text__content">Design</span>
		</div>
	</div>
	<div class="header__scroll-down">
		<img src={headerArrow} height="40" alt="Scroll Down" />
	</div>
</div>

<style lang="scss">
	.header {
		height: 100dvh;
		min-height: 500px;
		width: 100vw;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		&__hero {
			width: 100%;
			max-width: 800px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: 2;
			@media (max-width: 992px) {
				max-width: 480px;
			}
		}
		&__scroll-down {
			position: absolute;
			bottom: 15px;
		}
	}
	.hero-text {
		font-size: var(--fs-h1);
		line-height: 1;
		font-weight: 800;
		overflow: hidden;
		padding: 5px 0;
		@media (max-width: 576px) {
			padding: 0 15px;
			font-size: 13vw;
			margin-bottom: 10px;
		}
		&__content {
			display: inline-block;
		}
		&:first-child {
			text-align: right;
		}
		&:last-child {
			text-align: right;
			padding-right: 90px;
		}
	}
</style>
