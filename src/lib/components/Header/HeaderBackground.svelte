<div class="test blur"></div>
<div class="test2 blur"></div>

<style lang="scss">
	.test {
		height: 100px;
		width: 100vw;
		position: absolute;
		left: 0;
		top: 50vh;
		rotate: 15deg;
		background: conic-gradient(from 2.35rad, #7bb8b9, #050aa5);
	}

	.test2 {
		height: 100px;
		width: 100vw;
		position: absolute;
		left: 0;
		top: 50vh;
		rotate: -15deg;
		background: conic-gradient(from 4.5rad, #5ee2ff, #3805a5);
	}
	.blur {
		filter: blur(10rem);
	}
</style>
