<script>
	import SkillItemBig from './SkillItemBig.svelte';
	import SkillItemMedium from './SkillItemMedium.svelte';
	import SkillItemSmall from './SkillItemSmall.svelte';

	import php from '../../../../assets/images/skills/php.png';
	import js from '../../../../assets/images/skills/js.png';
	import scss from '../../../../assets/images/skills/sass.png';
	import svelte from '../../../../assets/images/skills/svelte.png';
	import figma from '../../../../assets/images/skills/figma.png';
	import git from '../../../../assets/images/skills/git.png';
</script>

<section class="skills">
	<div class="container">
		<h2 class="skills__headline headline">skills</h2>
		<div class="skills__grid">
			<SkillItemBig
				teaser="Webentwicklung"
				headline="Typo3 Webseiten"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
			/>
			<SkillItemSmall
				image={php}
				headline="PHP"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
			/>
			<SkillItemSmall
				image={js}
				headline="JavaScript"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
			/>
			<SkillItemSmall
				image={scss}
				headline="Scss"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
			/>
			<SkillItemBig
				teaser="Software"
				headline="Individualsoftware"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
			/>
			<SkillItemSmall
				image={svelte}
				headline="Svelte"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
			/>
			<SkillItemMedium
				headline="Webdesign"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
			/>
			<SkillItemSmall
				image={figma}
				headline="Figma"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
			/>
			<SkillItemMedium
				headline="SEO"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
			/>
			<SkillItemSmall
				image={git}
				headline="Git"
				text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.skills {
		padding-block: 75px;
		&__grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-auto-rows: 170px;
			gap: 10px;
			margin-top: 50px;
			@media (max-width: 992px) {
				grid-template-columns: repeat(2, 1fr);
				:global(*) {
					&:nth-child(4) {
						order: 1;
					}
				}
			}
			@media (max-width: 576px) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
</style>
