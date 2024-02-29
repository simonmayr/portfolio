<script>
	import { horizontalWheelScroll } from '$lib/actions/scroll';
	import ProjectItem from './ProjectItem.svelte';
	import ProjectTeaser from './ProjectTeaser.svelte';
</script>

<section class="timeline" use:horizontalWheelScroll>
	<div class="timeline__inner scroll-inner">
		<div class="container">
			<div class="timeline__wrapper scroll-wrapper">
				<div class="timeline__content scroll-content">
					<ProjectTeaser />
					<ProjectItem
						color="#F2C64D"
						title="Buddha Nepali Kitchen"
						description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ut labore et dolore magna aliquyam erat, sed diam  ut labore et dolore"
					/>
					<ProjectItem
						color="#6F247F"
						title="Musikkapelle Völs"
						description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ut labore et dolore magna aliquyam erat, sed diam  ut labore et dolore"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.timeline {
		position: relative;
		&__inner {
			position: sticky;
			top: 0;
		}
		&__wrapper {
			width: 100%;
		}
		&__content {
			display: flex;
			height: 100vh;
		}
	}
</style>
