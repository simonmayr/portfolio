<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Skills from '$lib/components/Widgets/Skills/Skills.svelte';
	import About from '$lib/components/Widgets/About/About.svelte';
	import Projects from '$lib/components/Widgets/Projects/Projects.svelte';
</script>

<svelte:head>
	<title>simon.</title>
	<meta name="description" content="This is where the description goes for SEO" />
	<meta name="keywords" content="Simon, Mayr, " />
</svelte:head>



<Header />
<About />
<Skills />
<Projects />
