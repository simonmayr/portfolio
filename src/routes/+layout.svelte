<script lang="ts">
	import Navigation from '../lib/components/Navigation/Navigation.svelte';
	import { onNavigate } from '$app/navigation';
	import '../assets/styles/app.scss';
	import PageLoading from '$lib/components/Loading/PageLoading.svelte';
	import { setContext } from 'svelte';

	setContext<number>('loadingDuration', 0.8);

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

<div class="app-layout">
	<PageLoading />
	<Navigation />
	<div class="app-content">
		<slot />
	</div>
</div>

<style lang="scss">
	// .app-content {
	// 	background-color: var(--clr-secondary);
	// 	background-image: url("data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
	// }

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-bottom {
		from {
			transform: translateY(100%);
		}
	}

	@keyframes slide-to-back {
		to {
			transform: translateY(-100px) scale(0.9);
		}
	}

	:root::view-transition-old(root) {
		animation: 1s cubic-bezier(0.4, 0, 0.2, 1) both slide-to-back;
	}

	:root::view-transition-new(root) {
		animation: 1s cubic-bezier(0.4, 0, 0.2, 1) 100ms both slide-from-bottom;
	}
</style>
