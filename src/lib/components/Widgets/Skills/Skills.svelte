<script lang="ts">
	import SkillItem from './SkillItem.svelte';
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import { faFigma, faTypo3 } from '@fortawesome/free-brands-svg-icons';
	import { faSearch, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

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
				icon={faCode}
				headline="Individualsoftware"
				text="Maßgeschneiderte Individualsoftware, die exakt auf die spezifischen Anforderungen eines Systems zugeschnitten sind."
			/>
			<SkillItem
				icon={faTypo3}
				headline="Typo3"
				text="Mit Typo3 entwickle ich flexible und leistungsstarke Websites, die sich durch Benutzerfreundlichkeit auszeichnen."
			/>
			<SkillItem
				icon={faSearch}
				headline="SEO"
				text="Optimierung Ihrer Website für Suchmaschinen (SEO), um sicherzustellen, dass Sie online besser gefunden wird."
			/>
			<SkillItem
				icon={faFigma}
				headline="Design"
				text="Kreatives und ansprechendes Design, das Sie perfekt widerspiegelt und Ihre Zielgruppe begeistert."
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
