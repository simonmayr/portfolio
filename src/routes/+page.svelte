<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	// import PageLoading from '$lib/components/Loading/PageLoading.svelte';
	import Skills from '$lib/components/Widgets/Skills.svelte';
	import About from '$lib/components/Widgets/About.svelte';
	import Projects from '$lib/components/Widgets/Projects.svelte';

	export let startAnimation: boolean;
	// let hideLoading = false;
</script>

<!-- <PageLoading {hideLoading} /> -->

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
