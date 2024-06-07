<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ProjectItem from './ProjectItem.svelte';
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import buddhaNepaliKitchen from '$lib/assets/images/projects/buddha.png';
	import mkv from '$lib/assets/images/projects/mkv.png';
	import vl from '$lib/assets/images/projects/vl.png';

	let headlineEl: HTMLElement;
	let teaserEl: HTMLElement;

	onMount(() => {
		gsap.from(teaserEl, {
			opacity: 0,
			ease: 'power3.inOut',
			duration: 1,
			scrollTrigger: {
				trigger: teaserEl,
				start: 'top 80%'
			}
		});
	});
</script>

<section class="section projects" id="projects">
	<div class="container">
		<h2 class="projects__headline headline" bind:this={headlineEl}>
			<TextAnimation text="Projekte" textSuffix="." scrollTrigger={headlineEl} />
		</h2>
		<p class="projects__teaser" bind:this={teaserEl}>
			Verschaffe dir einen Überblick über eine ausgewählte Sammlung abgeschlossener Arbeiten.
		</p>
		<div class="projects__wrapper">
			<ProjectItem
				title="Musikkapelle Völs"
				description="Ob Veranstaltungen, News oder Bilder zum letzten Konzert - die Website der Musikkapelle Völs bietet alles auf einen Blick."
				link="https://www.mk-voels.at/"
				badges={['Typo3', 'Svelte', 'APIs']}
				image={mkv}
			/>
			<ProjectItem
				title="Buddha Nepali Kitchen"
				description="Buddha Nepali Kitchen ist ein nepalesisches Restaurant in Innsbruck. Die Website wurde mit Typo3 umgesetzt."
				link="https://www.buddha-nepali-kitchen.at/"
				badges={['Typo3', 'Mask']}
				image={buddhaNepaliKitchen}
				reverseAnimationDirection={true}
			/>
			<ProjectItem
				title="Völs Läuft"
				description="Völs Läuft ist ein jährlicher Laufevent in Völs. Die Website wurde mit VueJs umgesetzt, um zahlreiche Animationen und Interaktionen zu ermöglichen."
				badges={['VueJs', 'AnimeJs']}
				image={vl}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.projects {
		&__wrapper {
			width: 100%;
			margin-top: 100px;
			display: flex;
			flex-direction: column;
			gap: 180px;
			@media (max-width: 768px) {
				margin-top: 70px;
				gap: 70px;
			}
		}
		&__teaser {
			max-width: 290px;
			line-height: 1.55;
			margin-block: 20px 0;
		}
	}
</style>
