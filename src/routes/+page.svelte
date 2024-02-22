<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	// import PageLoading from '$lib/components/Loading/PageLoading.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import About from '$lib/components/Widgets/About.svelte';
	import Timeline from '$lib/components/Widgets/Timeline.svelte';
	import { onMount } from 'svelte';

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
<!-- <About /> -->
<Timeline />

<h1>THE END.</h1>

<div class="placeholder"></div>

<style lang="scss">
	.placeholder {
		height: 200vh;
	}
</style>
