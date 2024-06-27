<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Skills from '$lib/components/Widgets/Skills/Skills.svelte';
	import About from '$lib/components/Widgets/About/About.svelte';
	import Projects from '$lib/components/Widgets/Projects/Projects.svelte';
</script>

<svelte:head>
	<title>simon.</title>
	<meta
		name="description"
		content="Mein Name ist Simon Mayr und ich bin ein Webentwickler aus Tirol. ✓ Webseiten ✓ Typo3 ✓ Individualsoftware ✓ Design"
	/>
	<meta name="keywords" content="Simon Mayr, Webentwicklung, Typo3, Software, Design" />
</svelte:head>

<Header />
<About />
<Skills />
<Projects />
