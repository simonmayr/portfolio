<button class="navigation-burger">
	<span class="navigation-burger__bar"></span>
	<span class="navigation-burger__bar"></span>
	<span class="navigation-burger__bar"></span>
</button>

<style lang="scss">
	.navigation-burger {
		background-color: transparent;
		border: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 50px;
		height: 28px;
		&__bar {
			display: block;
			width: 100%;
			height: 3px;
			background-color: black;
			&:nth-child(1) {
				background-color: #32daf1;
			}
			&:nth-child(2) {
				background-color: #ffa500;
			}
			&:nth-child(3) {
				background-color: #eb15e2;
			}
		}
	}
</style>
