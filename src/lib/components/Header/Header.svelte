<script lang="ts">
	export let startAnimation: boolean;
</script>

<div class="header">
	<div class="header__hero">
		<span class="hero-text hero-text--circle" class:fadeRotateIn={startAnimation}
			>Webdesign <span>&</span></span
		>
		<span class="hero-text" class:fadeRotateIn={startAnimation}>Entwicklung</span>
	</div>
	<div class="header__teaser" class:fadeIn={startAnimation}>
		<a class="btn btn--blue" href="mailto:simon.j.mayr@gmail.com">Projekt Starten</a>
	</div>
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
			opacity: 0;
			animation-delay: 1.6s;
			margin-top: 25px;
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
		&--circle {
			&::before {
				--_size: 180px;
				content: '';
				display: block;
				position: absolute;
				height: var(--_size);
				width: var(--_size);
				border: 4px solid var(--clr-primary);
				border-radius: 100%;
				top: -44px;
				left: -20px;
				box-shadow: 0 0 50px 0 var(--clr-primary-300);
				z-index: -1;
			}
		}
	}
</style>
