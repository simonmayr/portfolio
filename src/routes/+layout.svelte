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
	.app-content {
		background-color: var(--clr-secondary);
	}

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
