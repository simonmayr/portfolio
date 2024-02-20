<script lang="ts">
	export let hideLoading: boolean;
</script>

<div class="page-loading" class:slideOut={hideLoading}>
	<div class="page-loading__spinner">
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="50" cy="50" r="45" stroke="#ffffff" stroke-width="10" />
		</svg>
	</div>
</div>

<style lang="scss">
	.page-loading {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #32daf1;
	}
</style>
