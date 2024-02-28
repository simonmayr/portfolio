<script>
	let navOpen = false;
</script>

<button class="navigation-burger" on:click={() => (navOpen = !navOpen)}> </button>

<div class="navigation-dropdown" class:fadeRotateIn={navOpen}></div>

<style lang="scss">
	.navigation-dropdown {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100dvh;
		background-color: #40ffc6;
		z-index: 100;
		pointer-events: none;
		opacity: 0;
	}
	.navigation-burger {
		--_size: 25px;
		cursor: pointer;
		position: relative;
		display: block;
		width: var(--_size);
		height: var(--_size);
		border: 2px solid var(--clr-primary);
		border-radius: 100%;
		background-color: transparent;
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
</style>
