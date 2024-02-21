<script lang="ts">
	import { inViewport, outViewport } from '$lib/utils/actions/viewport';
	export let startAnimation: boolean;
	let roundBorder = false;
</script>

<div
	class="about"
	class:about--round-radius={roundBorder}
	use:inViewport={() => (roundBorder = true)}
	use:outViewport={() => (roundBorder = false)}
>
	<h2>Das bin ich</h2>
</div>

<style lang="scss">
	.about {
		padding-top: 60px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		margin-top: calc(var(--about-overlap) * -1);
		background-color: white;
		position: relative;
		z-index: 1;
		transition: 1s var(--ease-elastic-2);
		&--round-radius {
			border-top-left-radius: 100%;
			border-top-right-radius: 100%;
		}
	}
</style>
