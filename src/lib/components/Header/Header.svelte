<script lang="ts">
	import HeaderGradient from './HeaderGradient.svelte';
	import HeaderLines from './HeaderLines.svelte';

	export let startAnimation: boolean;
</script>

<div class="header">
	<div class="header__hero">
		<span class="hero-text" class:fadeRotateIn={startAnimation}>Webdesign <span>&</span></span>
		<span class="hero-text" class:fadeRotateIn={startAnimation}>Entwicklung</span>
	</div>
	<div class="header__teaser" class:fadeIn={startAnimation}>
		<a class="btn btn--blue" href="mailto:simon.j.mayr@gmail.com">Kontakt</a>
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		&__hero {
			width: 100%;
			max-width: 800px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: 2;
		}
		&__teaser {
			z-index: 2;
			width: 60ch;
			text-align: center;
			opacity: 0;
			animation-delay: 1.6s;
			margin-top: 25px;
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
		span {
			color: #32daf1;
		}
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
