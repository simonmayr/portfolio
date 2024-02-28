<script lang="ts">
	import { inViewport, outViewport } from '$lib/actions/viewport';
	let roundBorder = false;
</script>

<section
	class="about"
	class:about--round-radius={roundBorder}
	use:inViewport={() => (roundBorder = true)}
	use:outViewport={() => (roundBorder = false)}
>
	<div class="container">
		<div class="about__content">
			<h2 class="about__headline headline">über mich<span>.</span></h2>
			<span class="about__text"
				>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
				et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.
				At vero eos et accusam et justo duo dolores et ea rebum.</span
			>
		</div>
	</div>
</section>

<style lang="scss">
	.about {
		padding-bottom: 120px;
		&__content {
			font-size: 1.5rem;
			line-height: 1.8;
		}
		&__headline {
			margin-bottom: 15px;
			display: inline;
		}
		&__text {
			margin-left: 20px;
		}
	}
</style>
