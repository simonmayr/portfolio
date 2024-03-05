<script>
	let navOpen = false;

	$: if (!import.meta.env.SSR) {
		document.body.style.overflow = navOpen ? 'hidden' : 'auto';
	}
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && (navOpen = false)} />

<div class="navigation-burger" class:navOpen>
	<button class="navigation-burger__circle" on:click={() => (navOpen = !navOpen)}> </button>
	<div class="navigation-backdrop"></div>
	<div class="navigation-content">
		<div class="container">
			<a href="/test" on:click={() => (navOpen = false)}>Test</a>
			<a href="/" on:click={() => (navOpen = false)}>Home</a>
		</div>
	</div>
</div>

<style lang="scss">
	.navigation-backdrop {
		position: absolute;
		width: 400vh;
		aspect-ratio: 1/1;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		background-color: var(--clr-primary);
		scale: 0;
		border-radius: 100%;
		transition: 0.4s;
		.navOpen & {
			scale: 1;
			transition: 0.8s;
		}
	}
	.navigation-burger {
		position: relative;
		width: fit-content;
		&__circle {
			--_size: 25px;
			cursor: pointer;
			position: relative;
			display: block;
			width: var(--_size);
			height: var(--_size);
			border: 2px solid var(--clr-primary);
			border-radius: 100%;
			background-color: transparent;
			display: flex;
			align-items: center;
			justify-content: center;
			&:hover::before {
				scale: 1;
			}
			&::before {
				content: '';
				position: absolute;
				scale: 0;
				width: var(--_size);
				height: var(--_size);
				background-color: var(--clr-primary);
				transition: 0.2s;
				transform-origin: center;
				border-radius: 100%;
			}
			&::after {
				content: 'Menü';
				position: absolute;
				top: 50%;
				left: calc(100%);
				padding-left: 15px;
				translate: 0 -50%;
				color: var(--clr-white);
			}
		}
	}
	.navigation-content {
		position: absolute;
		inset: 0;
		opacity: 0;
		pointer-events: none;
		transition: 0.8s;
		padding-top: 120px;
		.navOpen & {
			opacity: 1;
			pointer-events: all;
		}
		a {
			color: var(--clr-white);
			font-size: 2rem;
			text-decoration: none;
			transition: 0.2s;
		}
	}
</style>
