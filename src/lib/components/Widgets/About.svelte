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
	<h2>Das bin ich</h2>
</section>

<style lang="scss">
	.about {
		padding-top: 60px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		margin-top: calc(var(--about-overlap) * -1);
		background-color: white;
		position: relative;
		z-index: 1;
		transition: 1s var(--ease-elastic-1);
		&--round-radius {
			border-top-left-radius: 100%;
			border-top-right-radius: 100%;
		}
	}
</style>
