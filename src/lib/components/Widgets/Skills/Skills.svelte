<script lang="ts">
	import SkillItem from './SkillItem.svelte';
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import {
		faCss3,
		faFigma,
		faJava,
		faJs,
		faSass,
		faTypo3
	} from '@fortawesome/free-brands-svg-icons';
	import { faSearch, faCode, faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons';

	let headlineEl: HTMLElement;
</script>

<section class="section skills" id="skills">
	<div class="container">
		<h2 class="skills__headline headline" bind:this={headlineEl}>
			<TextAnimation text="Skills" textSuffix="." scrollTrigger={headlineEl} />
		</h2>
		<div class="skills__grid">
			<!-- List some skills i have and explain what they are and how i use them -->
			<SkillItem
				icon={faLaptopCode}
				headline="Webentwicklung"
				text="Ich entwickle kreative und wartungsfreundliche Webseiten mit modernem Design, die perfekt auf die Bedürfnisse verschiedenster Branchen und Zielgruppen zugeschnitten sind."
			/>
			<SkillItem
				icon={faTypo3}
				headline="Typo3"
				text="Mit Typo3 entwickle ich flexible und leistungsstarke Websites, die sich durch Benutzerfreundlichkeit auszeichen."
			/>
			<SkillItem
				icon={faJs}
				headline="JavaScript"
				text="Von einfachen Webseiten bishin zu komplexen Webanwenndungen nutze ich JavaScript als Programmiersprache."
			/>
			<SkillItem
				icon={faSass}
				headline="SCSS"
				text="Ich nutze SCSS, um die Entwicklung von CSS zu beschleunigen und die Wartung von Stylesheets zu vereinfachen."
			/>
			<SkillItem
				icon={faServer}
				headline="Server"
				text="Die Installation und Wartung der Server übernehme ich selbst um immer kontrolle über die verwendete Software zu haben."
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.skills {
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
