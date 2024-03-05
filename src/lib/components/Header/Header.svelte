<script lang="ts">
	import HeaderBackground from './HeaderBackground.svelte';
	import HeaderEllipse from './HeaderEllipse.svelte';
	import headerArrow from '../../../assets/icons/arrow-header.svg';

	export let startAnimation: boolean;
</script>

<div class="header">
	<!-- <HeaderBackground /> -->
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
	<div class="header__scroll-down fadeIn" class:animate={startAnimation}>
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
		overflow: hidden;
		&__hero {
			width: 100%;
			max-width: 800px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: 2;
			pointer-events: none;
		}
		&__scroll-down {
			position: absolute;
			bottom: 15px;
			animation-delay: 1s;
		}
	}
	.hero-text {
		font-size: var(--fs-h1);
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
