<script lang="ts">
	import { draw } from 'svelte/transition';
	import elipse from '../../../assets/images/header/Ellipse.svg';
	import HeaderEllipse from './HeaderEllipse.svelte';

	export let startAnimation: boolean;
</script>

<div class="header">
	<div class="header__hero">
		<HeaderEllipse {startAnimation} />
		<div class="hero-text">
			<span class="rotateIn" class:animate={startAnimation}
				>Webdesign <span class="clr-primary">&</span></span
			>
		</div>
		<div class="hero-text">
			<span class="rotateIn" class:animate={startAnimation}>Entwicklung</span>
		</div>
	</div>
	<div class="header__teaser fadeIn" class:animate={startAnimation}>
		<a class="btn btn--blue" href="mailto:simon.j.mayr@gmail.com">Projekt Starten</a>
	</div>
	<div class="header__scroll-don"></div>
</div>

<style lang="scss">
	.header {
		height: calc(100dvh + var(--about-overlap));
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
			animation-delay: 1s;
			animation-duration: 2s;
			margin-top: 25px;
		}
	}
	.hero-text {
		font-size: 110px;
		line-height: 1;
		font-weight: 800;
		overflow: hidden;
		.rotateIn {
			display: inline-block;
		}
		&:last-child {
			text-align: right;
			.rotateIn {
				animation-delay: 0.2s;
			}
		}
	}
</style>
