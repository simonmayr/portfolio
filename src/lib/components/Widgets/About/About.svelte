<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	let aboutText = `Mein Name ist Simon, ich bin Webentwickler und Designer. `;

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		gsap.from('.about__word', {
			opacity: 0.1,
			scrollTrigger: {
				trigger: '.about__text',
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: 1
			},
			stagger: {
				each: 0.03,
			}
		});
	});
</script>

<section class="about">
	<div class="container">
		<div class="about__content">
			<h2 class="about__headline headline">Hallo</h2>
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
		padding-block: 150px 75px;
		&__content {
			position: relative;
			font-size: 2rem;
			line-height: 1.5;
			font-weight: 300;
			@media (max-width: 992px) {
				font-size: 1.4rem;
			}
		}
		&__headline {
			position: absolute;
			top: -14px;
			@media (max-width: 992px) {
				position: static;
				margin-bottom: 0px;
			}
		}
		&__text {
			> span:first-child {
				margin-left: 160px;
				@media (max-width: 992px) {
					margin-left: 0;
				}
			}
		}
	}
</style>
