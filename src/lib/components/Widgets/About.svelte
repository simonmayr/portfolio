<script lang="ts">
	import { inViewport, outViewport } from '$lib/actions/viewport';
	let showHeadline = false;
	let showText = false;

	let aboutText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.`;
</script>

<section class="about">
	<div class="container">
		<div class="about__content">
			<h2
				class="about__headline headline rotateIn"
				class:animate={showHeadline}
				use:inViewport={() => (showHeadline = true)}
			>
				über mich<span>.</span>
			</h2>
			<div
				class="about__text"
				use:inViewport={() =>
					setTimeout(() => {
						showText = true;
					}, 200)}
			>
				{#each aboutText.split(' ') as word, i}
					<span class="overflow-hidden">
						<span class="slideIn" class:animate={showText} style={`animation-delay: ${i * 0.01}s;`}
							>{word} {@html '&nbsp;'}</span
						>
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.about {
		padding-bottom: 120px;
		.slideIn {
			display: inline-block;
		}
		&__content {
			position: relative;
			font-size: 1.5rem;
			line-height: 1.5;
			font-weight: 300;
		}
		&__headline {
			position: absolute;
			top: -9px;
		}
		&__text {
			> span:first-child {
				margin-left: 170px;
			}
		}
	}
</style>
