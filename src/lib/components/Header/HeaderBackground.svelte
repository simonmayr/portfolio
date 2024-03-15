<div class="line line--line1 line--blur"></div>
<div class="line line--line2 line--blur"></div>

<style lang="scss">
	.line {
		height: 100px;
		width: 100vw;
		position: absolute;
		left: 0;
		top: 50vh;
		@media (max-width: 992px) {
			width: 70vw;
		}
		&--line1 {
			rotate: 15deg;
			background: conic-gradient(from 2.35rad, #7bb8b9, #050aa5);
		}

		&--line2 {
			rotate: -15deg;
			background: conic-gradient(from 4.5rad, #5ee2ff, #3805a5);
		}
		&--blur {
			filter: blur(10rem);
		}
	}
</style>
