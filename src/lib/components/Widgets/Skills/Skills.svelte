<script lang="ts">
	import SkillItem from './SkillItem.svelte';
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import { faCodepen, faFigma, faTypo3 } from '@fortawesome/free-brands-svg-icons';
	import { faSearch, faCode } from '@fortawesome/free-solid-svg-icons';

	let headlineEl: HTMLElement;
</script>

<section class="skills">
	<div class="container">
		<h2 class="skills__headline headline" bind:this={headlineEl}>
			<TextAnimation text="Skills" textSuffix="." scrollTrigger={headlineEl} />
		</h2>
		<div class="skills__grid">
			<SkillItem
				icon={faTypo3}
				headline="Webentwicklung"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
			/>
			<SkillItem
				icon={faCode}
				headline="Individualsoftware"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
			/>
			<SkillItem
				icon={faSearch}
				headline="SEO"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna "
			/>
			<SkillItem
				icon={faFigma}
				headline="Design"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt"
			/>
			<SkillItem
				icon={faCodepen}
				headline="Nochwas"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.skills {
		padding-block: 75px;
		&__grid {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			gap: 30px;
			margin-top: 40px;
			@media (max-width: 768px) {
				margin-top: 10px;
			}
		}
	}
</style>
