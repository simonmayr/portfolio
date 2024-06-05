<script lang="ts">
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import Text from '$lib/components/Widgets/Text/Text.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let textEl: HTMLElement;
	let imprintEl: HTMLElement;

	onMount(() => {
		gsap.from(imprintEl, {
			opacity: 0,
			ease: 'power3.inOut',
			duration: 1,
			delay: 1,
			scrollTrigger: {
				trigger: textEl,
				start: 'top 80%'
			}
		});
	});
</script>

<svelte:head>
	<title>Impressum | simon.</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Text>
	<div class="headline" bind:this={textEl}>
		<TextAnimation text="Impressum" delay={0.5} scrollTrigger={textEl} />
	</div>
	<div class="imprint-text" bind:this={imprintEl}>
		<p>
			Simon Mayr <br />
			Webentwicklung
		</p>

		<p>
			6176 Völs <br />
			Österreich
		</p>

		<p><a href="mailto:hello@simonmayr.at">hello@simonmayr.at</a></p>
	</div>
</Text>
