<script>
	let navOpen = false;
</script>

<button class="navigation-burger" on:click={() => (navOpen = !navOpen)}>
	<span class="navigation-burger__bar"></span>
	<span class="navigation-burger__bar"></span>
	<span class="navigation-burger__bar"></span>
</button>

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
		background-color: transparent;
		border: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 50px;
		height: 28px;
		border-radius: 4px;
		&__bar {
			display: block;
			width: 100%;
			height: 3px;
			background-color: black;
			// &:nth-child(1) {
			// 	background-color: #32daf1;
			// }
			// &:nth-child(2) {
			// 	background-color: #ffa500;
			// }
			// &:nth-child(3) {
			// 	background-color: #eb15e2;
			// }
		}
	}
</style>
