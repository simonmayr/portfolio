<script>
	import ProjectItem from './ProjectItem.svelte';
	import buddhaNepaliKitchen from '../../../../assets/images/projects/buddha.jpeg';
	import mkv from '../../../../assets/images/projects/mkv.jpeg';
	import swz from '../../../../assets/images/projects/15.jpg';
</script>

<section class="projects">
	<div class="container">
		<h2 class="headline">projekte</h2>
		<div class="projects__wrapper">
			<ProjectItem
				color="#000000"
				bgcolor="#FFFCF3"
				title="Buddha Nepali Kitchen"
				link="https://www.buddha-nepali-kitchen.at/"
				gridColumn="span 12"
				gridRow="span 5"
				badges={['Typo3', 'PHP']}
				image={buddhaNepaliKitchen}
			/>
			<ProjectItem
				color="#000000"
				bgcolor="#FDF2FF"
				title="Musikkapelle Völs"
				link="https://www.mk-voels.at/"
				gridColumn="14 / span 12"
				gridRow="6 / span 5"
				badges={['Typo3', 'PHP']}
				image={mkv}
			/>
			<ProjectItem
				color="#000000"
				bgcolor="#E7ECFF"
				title="Schwimmklub Zirl"
				gridColumn="span 12"
				gridRow="11 / span 5"
				badges={['Symfony', 'PHP']}
				image={swz}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.projects {
		padding-block: 75px;
		position: relative;
		&__wrapper {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(25, 1fr);
			grid-auto-rows: 100px;
			margin-top: 50px;
		}
	}
</style>
