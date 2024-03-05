<script lang="ts">
	import Navigation from '../lib/components/Navigation/Navigation.svelte';
	import '../assets/styles/app.scss';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

	let startAnimation = false;

	onMount(() => {
		// hideLoading = true;
		setTimeout(() => {
			startAnimation = true;
		}, 200);
	});

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
	<Navigation {startAnimation} />
	<div class="app-content">
		<slot {startAnimation} />
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

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
