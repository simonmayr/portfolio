<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Skills from '$lib/components/Widgets/Skills.svelte';
	import About from '$lib/components/Widgets/About/About.svelte';
	import Projects from '$lib/components/Widgets/Projects/Projects.svelte';
</script>

<Header />
<About />
<!-- <Skills /> -->
<Projects />

<div class="placeholder"></div>

<style lang="scss">
	.placeholder {
		height: 200vh;
	}
</style>
