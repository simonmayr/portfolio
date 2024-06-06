<script lang="ts">
	import '$lib/assets/styles/app.scss';
	import noise from '$lib/assets/images/noise.png';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import PageLoading from '$lib/components/Loading/PageLoading.svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onNavigate } from '$app/navigation';
	import { setContext } from 'svelte';
	import { gsap } from 'gsap';
	import Footer from '$lib/components/Footer/Footer.svelte';

	gsap.registerPlugin(ScrollTrigger);

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
	<Footer />
</div>

<style lang="scss">
	.app-layout {
		background-color: var(--clr-secondary);
		background-image: var(--noise-url);
		background-size: 100px;
		min-height: 100%;
	}

	.app-content {
		padding-top: 1px;
	}

	@keyframes pageIn {
		from {
			transform: translateY(100%);
		}
	}

	@keyframes pageOut {
		to {
			translate: 0 50px;
			scale: 0.9;
		}
	}

	:root::view-transition-old(root) {
		animation: 1s cubic-bezier(0.4, 0, 0.2, 1) both pageOut;
	}

	:root::view-transition-new(root) {
		animation: 1s cubic-bezier(0.4, 0, 0.2, 1) both pageIn;
		animation-delay: 500ms;
	}
</style>
