<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import PageLoading from '$lib/components/Loading/PageLoading.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import { onMount } from 'svelte';

	let startAnimation = false;
	let hideLoading = false;

	onMount(() => {
		setTimeout(() => {
			hideLoading = true;
			setTimeout(() => {
				startAnimation = true;
			}, 1000);
		}, 1000);
	});
</script>

<PageLoading {hideLoading} />

<Navigation {startAnimation} />
<Header {startAnimation} />
