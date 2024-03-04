<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/Header.svelte';
	// import PageLoading from '$lib/components/Loading/PageLoading.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import Skills from '$lib/components/Widgets/Skills.svelte';
	import About from '$lib/components/Widgets/About.svelte';
	import Projects from '$lib/components/Widgets/Projects.svelte';

	let startAnimation = false;
	// let hideLoading = false;

	onMount(() => {
		// hideLoading = true;
		setTimeout(() => {
			startAnimation = true;
		}, 200);
	});
</script>

<!-- <PageLoading {hideLoading} /> -->

<Navigation {startAnimation} />
<Header {startAnimation} />
<About />
<!-- <Skills /> -->
<Projects />

<div class="placeholder"></div>

<style lang="scss">
	.placeholder {
		height: 200vh;
	}
</style>
