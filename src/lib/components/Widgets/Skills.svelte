<script>
	import SkillItem from './SkillItem.svelte';

	let showHeadline = false;
</script>

<section class="skills">
	<div class="container">
		<h2 class="skills__headline headline">
			was ich mache<span>.</span>
		</h2>
		<div class="skills__wrapper">
			<SkillItem title="Webentwicklung" tech={['php', 'javascript', 'scss']} />
			<SkillItem title="Technisches SEO" tech={['html', 'schema']} />
			<SkillItem title="Individualsoftware" tech={['svelte', 'postgressql']} />
		</div>
	</div>
</section>

<style lang="scss">
	.skills {
		padding-top: 120px;
		&__headline {
			text-align: center;
		}
		&__wrapper {
			margin-top: 30px;
		}
	}
</style>
