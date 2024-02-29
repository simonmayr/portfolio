<script lang="ts">
	export let color: string;
	export let title: string;
	export let description: string;
</script>

<div class="project-item" style={`--_color: ${color}`}>
	<h2>{title}</h2>
	<p>{description}</p>
	<div class="project-item__circle"></div>
</div>

<style lang="scss">
	.project-item {
		height: 100vh;
		width: 100vw;
		// background-color: var(--_color);
		flex-shrink: 0;
		&__circle {
			width: 400px;
			height: 400px;
			border: 12px solid var(--_color);
			border-radius: 50%;
		}
	}
</style>
