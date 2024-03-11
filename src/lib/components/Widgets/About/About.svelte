<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	let aboutText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.`;

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		gsap.from('.about__word', {
			opacity: 0.1,
			scrollTrigger: {
				trigger: '.about__text',
				start: 'top 90%',
				end: 'bottom 60%',
				// markers: true,
				scrub: 1,
			},
			stagger: {
				each: 0.03,
				ease: 'power1.out'
			}
		});
	});
</script>

<section class="about">
	<div class="container">
		<div class="about__content">
			<h2 class="about__headline headline">über mich</h2>
			<div class="about__text">
				{#each aboutText.split(' ') as word, t}
					<span class="overflow-hidden">
						<span class="about__word">{word} {@html '&nbsp;'}</span>
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.about {
		padding: 150px 0;
		&__content {
			position: relative;
			font-size: 2rem;
			line-height: 1.5;
			font-weight: 300;
		}
		&__headline {
			position: absolute;
			top: -14px;
		}
		&__text {
			> span:first-child {
				margin-left: 290px;
			}
		}
	}
</style>
