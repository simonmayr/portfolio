<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import PageLoading from '$lib/components/Loading/PageLoading.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import { onMount } from 'svelte';

	let startAnimation = false;
	let hideLoading = false;

	onMount(() => {
		hideLoading = true;
		setTimeout(() => {
			startAnimation = true;
		}, 200);
	});
</script>

<!-- <PageLoading {hideLoading} /> -->

<Navigation {startAnimation} />
<Header {startAnimation} />

<div class="placeholder"></div>

<style lang="scss">
	.placeholder {
		height: 500vh;
	}
</style>
