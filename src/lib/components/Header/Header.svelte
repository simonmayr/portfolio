<script lang="ts">
	import HeaderBackground from './HeaderBackground.svelte';
	import headerArrow from '../../../assets/icons/arrow-header.svg';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Button from '../UI/Button.svelte';

	onMount(() => {
		gsap.from('.hero-text__content', {
			opacity: 0,
			y: '100%',
			duration: 1,
			ease: 'power3.inOut',
			stagger: {
				each: 0.1,
				ease: 'power4.out'
			}
		});

		gsap.from('.header__scroll-down', {
			opacity: 0,
			y: '-100%',
			duration: 0.6,
			delay: 0.8
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
			<span class="hero-text__content">Webdesign <span class="clr-primary">&</span></span>
		</div>
		<div class="hero-text">
			<span class="hero-text__content">Entwicklung</span>
		</div>
	</div>
	<div class="header__scroll-down">
		<img src={headerArrow} height="40" alt="Scroll Down" />
	</div>
</div>

<style lang="scss">
	.header {
		height: calc(100dvh);
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
		&__content {
			display: inline-block;
		}
		&:last-child {
			text-align: right;
		}
	}
</style>
