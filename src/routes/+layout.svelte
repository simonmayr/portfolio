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

	import og from '$lib/assets/images/og-image.png';

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

<svelte:head>
	<title>Webseiten ✓ Typo3 ✓ Design | simon.</title>
	<meta
		name="description"
		content="Hallo, mein Name ist Simon Mayr und ich bin ein leidenschaftlicher Webentwickler aus Tirol. ✓ Webseiten ✓ Typo3 ✓ Individualsoftware ✓ Design ✓ Tirol"
	/>
	<meta
		name="keywords"
		content="Simon Mayr Webentwickler, Web, Innsbruck, Webseiten Innsbruck, Webagentur Innsbruck, Webentwickler Tirol, Professionelle Webseiten Tirol, Professionelle Webseiten Innsbruck, Kreative Webseitenentwicklung, Webentwicklung Tirol, Webanwendungen erstellen, Webseiten Typo3, Typo3 Experte, Individuelle Softwareentwicklung, Individuelle Webanwendungen, Webdesign Tirol, Professionelles Webdesign, Kreatives Webdesign, Webdesigner Simon Mayr, Custom Web Solutions Tirol, Tiroler Webentwickler, Responsive Webdesign, Modernes Webdesign, Benutzerfreundliche Webseiten, SEO-freundliche Webseiten, Völs, Innsbruck, Tirol, Österreich"
	/>
	<meta property="og:title" content="Webseiten ✓ Typo3 ✓ Design | simon." />
	<meta
		property="og:description"
		content="Hallo, mein Name ist Simon Mayr und ich bin ein leidenschaftlicher Webentwickler aus Tirol. ✓ Webseiten ✓ Typo3 ✓ Individualsoftware ✓ Design ✓ Tirol"
	/>
	<meta property="og:image" content={og} />
	<meta property="og:type" content="website" />
</svelte:head>

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
