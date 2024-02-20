<script lang="ts">
	import HeaderGradient from './HeaderGradient.svelte';
	import HeaderLines from './HeaderLines.svelte';

	export let startAnimation: boolean;
</script>

<div class="header">
	<div class="header__hero">
		<span class="hero-text" class:fadeRotateIn={startAnimation}>Webdesign &</span>
		<span class="hero-text" class:fadeRotateIn={startAnimation}>Entwicklung</span>
	</div>
	<HeaderLines {startAnimation} />
	<HeaderGradient {startAnimation} />
	<div class="header__scroll">scroll</div>
</div>

<style lang="scss">
	.header {
		height: 100dvh;
		width: 100vw;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		&__hero {
			height: 100%;
			width: 100%;
			max-width: 800px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: 2;
		}
		&__scroll {
			position: absolute;
			inset: auto 0 0 0;
			display: flex;
			justify-content: center;
		}
	}
	.hero-text {
		font-size: 110px;
		line-height: 1;
		font-weight: 800;
		opacity: 0;
		&:first-child {
			text-align: left;
			animation-delay: 0.8s;
		}
		&:last-child {
			text-align: right;
			animation-delay: 1s;
		}
	}
</style>
