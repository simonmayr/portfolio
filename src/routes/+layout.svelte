<script>
	import Navigation from '../lib/components/Navigation/Navigation.svelte';
	import '../assets/styles/app.scss';
</script>

<div class="app-layout">
	<!-- <Navigation /> -->
	<div class="app-content">
		<slot />
	</div>
</div>

<style lang="scss">
	.app-layout {
		// margin: 10px;
		// height: calc(100vh - 20px);
    // overflow: auto;
    // border-radius: 22px;
	}
	.app-content {
		background-color: var(--clr-secondary);
	}
</style>
