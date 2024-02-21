<script lang="ts">
	export let hideLoading: boolean;
</script>

<div class="page-loading" class:slideOut={hideLoading}>

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
