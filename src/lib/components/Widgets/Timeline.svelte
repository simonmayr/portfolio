<script>
	import { horizontalWheelScroll } from '$lib/actions/scroll';
</script>

<section class="timeline" use:horizontalWheelScroll>
	<div class="timeline__inner scroll-inner">
		<div class="container">
			<div class="timeline__wrapper scroll-wrapper">
				<div class="timeline__content scroll-content">
					<div class="awd"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.timeline {
		position: relative;
		.container {
			overflow: auto;
		}
		&__inner {
			position: sticky;
			top: 0;
		}
		&__wrapper {
			width: 100%;
			overflow: scroll;
		}
		&__content {
			width: 200vw;
			height: 100vh;
			background: linear-gradient(90deg, #f0f0f0 0%, #ff0000 100%);
		}
	}
</style>
