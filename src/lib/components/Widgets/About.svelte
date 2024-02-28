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
			<div class="about__text" use:inViewport={() => (showText = true)}>
				{#each aboutText.split(' ') as word, i}
					<span class="overflow-hidden">
						<span class="rotateIn" class:animate={showText} style={`animation-delay: ${i * 0.01}s;`}
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
		&__content {
			font-size: 1.5rem;
			line-height: 1.8;
			position: relative;
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
