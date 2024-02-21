<script lang="ts">
	export let startAnimation: boolean;
</script>

<div class="header-gradients" class:fadeIn={startAnimation}>
	<div class="header-gradient header-gradient--blue"></div>
	<div class="header-gradient header-gradient--purple"></div>
	<div class="header-gradient header-gradient--orange"></div>
</div>

<style lang="scss">
	.header-gradients {
		opacity: 0;
		animation-delay: 0.5s;
	}

	.header-gradient {
		position: absolute;

		inset: 0;
		&--blue {
			background: rgb(255, 255, 255);
			background: linear-gradient(330deg, rgba(255, 255, 255, 0) 70%, rgb(221, 243, 246) 100%);
		}
		&--purple {
			background: rgb(255, 255, 255);
			background: linear-gradient(56deg, rgba(255, 255, 255, 0) 70%, rgba(250, 223, 255, 1) 100%);
		}
		&--orange {
			background: rgb(255, 255, 255);
			background: linear-gradient(217deg, rgba(255, 255, 255, 0) 70%, rgba(245, 235, 208, 1) 100%);
		}
	}
</style>
