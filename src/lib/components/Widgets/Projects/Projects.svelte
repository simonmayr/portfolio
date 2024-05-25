<script lang="ts">
	import ProjectItem from './ProjectItem.svelte';
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import buddhaNepaliKitchen from '$lib/assets/images/projects/buddha.png';
	import mkv from '$lib/assets/images/projects/mkv.png';

	let headlineEl: HTMLElement;
</script>

<section class="projects" id="projects">
	<div class="container">
		<h2 class="projects__headline headline" bind:this={headlineEl}>
			<TextAnimation text="Projekte" textSuffix="." scrollTrigger={headlineEl} />
		</h2>
		<p class="projects__teaser">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore.
		</p>
		<div class="projects__wrapper">
			<ProjectItem
				title="Musikkapelle Völs"
				description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
				link="https://www.mk-voels.at/"
				badges={['Typo3', 'PHP']}
				image={mkv}
			/>
			<ProjectItem
				title="Buddha Nepali Kitchen"
				description="Buddha Nepali Kitchen ist ein nepalesisches Restaurant in Innsbruck. Die Website wurde mit Typo3 umgesetzt."
				link="https://www.buddha-nepali-kitchen.at/"
				badges={['Typo3', 'PHP']}
				image={buddhaNepaliKitchen}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.projects {
		padding-block: 100px 50px;
		position: relative;
		&__wrapper {
			width: 100%;
			margin-top: 120px;
			display: flex;
			flex-direction: column;
			gap: 120px;
			@media (max-width: 768px) {
				margin-top: 10px;
			}
		}
		&__teaser {
			max-width: 300px;
			line-height: 1.55;
			margin-block: 20px 0;
		}
	}
</style>
