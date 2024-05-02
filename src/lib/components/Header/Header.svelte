<script lang="ts">
	import HeaderBackground from './HeaderBackground.svelte';
	import headerArrow from '$lib/assets/icons/arrow-header.svg';
	import { getContext, onMount } from 'svelte';
	import TextAnimation from '../UI/TextAnimation.svelte';

	let loadingDuration = getContext<number>('loadingDuration');

	let headerEl: HTMLElement;

	onMount(() => {});
</script>

<div class="header" bind:this={headerEl}>
	<HeaderBackground />
	<div class="header__hero">
		<div class="hero-text">
			<TextAnimation delay={loadingDuration} text="Simon Mayr" />
		</div>
		<div class="hero-text">
			<span class="hero-text__content"
				><TextAnimation delay={loadingDuration + 0.2} text="Webseiten " textSuffix="&" />
			</span>
		</div>
		<div class="hero-text">
			<span class="hero-text__content"
				><TextAnimation delay={loadingDuration + 0.4} text="Design" /></span
			>
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
			width: fit-content;
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
		font-size: clamp(3rem, 6vw, var(--fs-h1));
		font-weight: 800;
		overflow: hidden;
		margin-bottom: 5px;
		&:nth-child(1) {
			text-align: left;
		}
		&:nth-child(2) {
			text-align: left;
			padding-left: 90px;
			@media (max-width: 576px) {
				padding-left: 0;
			}
		}
		&:nth-child(3) {
			text-align: left;
			padding-left: 50px;
			@media (max-width: 576px) {
				padding-left: 0;
			}
		}
	}
</style>
