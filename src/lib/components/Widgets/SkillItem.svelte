<script lang="ts">
	export let title = '';
	export let tech: string[] = [];
</script>

<div class="skill-item">
	<div class="skill-item__title">
		{title}
	</div>
	<div class="skill-item__tech">
		{#each tech as item}
			<div>{item}</div>
			{#if tech.length > 1 && item !== tech[tech.length - 1]}
				<span>|</span>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	.skill-item {
		padding: 15px 50px;
		border: 2px solid var(--clr-primary);
		border-radius: 500px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 5px;
		&__title {
			font-size: 1.5rem;
			line-height: 1.8;
		}
		&__tech {
			display: flex;
			gap: 10px;
		}
	}
</style>
