<script>
	import SkillItemBig from './SkillItemBig.svelte';
	import SkillItemMedium from './SkillItemMedium.svelte';
	import SkillItemSmall from './SkillItemSmall.svelte';

	import php from '../../../../assets/images/skills/php.svg';
	import js from '../../../../assets/images/skills/js.svg';
	import scss from '../../../../assets/images/skills/sass.svg';
	import figma from '../../../../assets/images/skills/figma.svg';
	import git from '../../../../assets/images/skills/git.svg';
	import typo3 from '../../../../assets/images/skills/typo3.svg';
	import svelte from '../../../../assets/images/skills/svelte.svg';
	import google from '../../../../assets/images/skills/google.svg';
</script>

<section class="skills">
	<div class="container">
		<h2 class="skills__headline headline">skills</h2>
		<div class="skills__grid">
			<SkillItemBig
				image={typo3}
				headline="Typo3 Webseiten"
				text="Ein leistungsstarkes Content-Management-System für Webseiten, die nicht nur gut aussehen, sondern auch kinderleicht zu warten sind."
			/>
			<SkillItemSmall
				image={php}
				headline="PHP"
				text="Die serverseitige Programmiersprache für dynamische Webseiten"
			/>
			<SkillItemSmall
				image={js}
				headline="JavaScript"
				text="Interaktive Webseiten und Webanwendungen mit JavaScript"
			/>
			<SkillItemSmall
				image={scss}
				headline="Scss"
				text="Styling von Webseiten mit Scss und CSS3"
			/>
			<SkillItemBig
				image={svelte}
				headline="Individualsoftware"
				text=""
			/>
			<SkillItemSmall
				image={svelte}
				headline="Svelte"
				text="Ein modernes Framework für die Entwicklung von Webanwendungen"
			/>
			<SkillItemMedium
				headline="Webdesign"
				text="Moderne und Benutzerfreundliche Designs für Webseiten mit fokus "
			/>
			<SkillItemSmall
				image={figma}
				headline="Figma"
				text="Design-Tool für Webdesigner und Entwickler"
			/>
			<SkillItemMedium
				image={google}
				headline="SEO"
				text="Suchmaschinenoptimierung für eine bessere Platzierungen in den Suchergebnissen"
			/>
			<SkillItemSmall
				image={git}
				headline="Git"
				text="Versionsverwaltung für Softwareprojekte"
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
			grid-auto-rows: 150px;
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
			@media (max-width: 768px) {
				margin-top: 10px;
			}
			@media (max-width: 576px) {
				grid-template-columns: repeat(1, 100%);
			}
		}
	}
</style>
