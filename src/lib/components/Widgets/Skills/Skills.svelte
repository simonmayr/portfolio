<script lang="ts">
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
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';

	let headlineEl: HTMLElement;
</script>

<section class="skills">
	<div class="container">
		<h2 class="skills__headline headline" bind:this={headlineEl}>
			<TextAnimation text="Skills" textSuffix="." scrollTrigger={headlineEl} />
		</h2>
		<div class="skills__grid">
			<SkillItemBig
				image={typo3}
				headline="Typo3 Webseiten"
				text="Die meiste Freude habe ich beim erstellen von Webseiten mit dem Content-Management-System Typo3. Es ist ein Tool das sich für kleine aber auch große Webseiten mit vielen Funktionen eignet."
			/>
			<SkillItemSmall image={php} headline="PHP" text="" />
			<SkillItemSmall image={js} headline="JavaScript" text="" />
			<SkillItemSmall image={scss} headline="Scss" text="" />
			<SkillItemBig image={svelte} headline="Individualsoftware" text="" />
			<SkillItemSmall image={svelte} headline="Svelte" text="" />
			<SkillItemMedium
				headline="Webdesign"
				text="Ich bin zwar kein Vollzeitdesigner, aber ich habe ein Auge für Ästhetik und kreative visuelle Gestaltung von Benutzeroberflächen."
			/>
			<SkillItemSmall image={figma} headline="Figma" text="" />
			<SkillItemMedium image={google} headline="SEO" text="" />
			<SkillItemSmall image={git} headline="Git" text="" />
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
