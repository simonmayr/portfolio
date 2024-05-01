<script lang="ts">
	import '../assets/styles/app.scss';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import PageLoading from '$lib/components/Loading/PageLoading.svelte';
	import { onNavigate } from '$app/navigation';
	import { setContext } from 'svelte';
	import noise from '../assets/images/noise.png';

	setContext<number>('loadingDuration', 1.6);

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			setTimeout(() => {
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
			}, 400);
		});
	});
</script>

<div class="app-layout" style="--noise-url: url({noise})">
	<PageLoading />
	<Navigation />
	<div class="app-content">
		<slot />
	</div>
</div>

<style lang="scss">
	.app-layout {
		background-image: var(--noise-url);
		background-size: 100px;
	}
</style>
