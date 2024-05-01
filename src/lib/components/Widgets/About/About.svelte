<script lang="ts">
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	let aboutText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.`;
	let headlineEl: HTMLElement;

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
				each: 0.03
			}
		});
	});
</script>

<section class="about">
	<div class="container">
		<div class="about__content">
			<h2 class="about__headline headline" bind:this={headlineEl}>
				<TextAnimation text="Über mich" textSuffix="." scrollTrigger={headlineEl} />
			</h2>
			<div class="about__text">
				{#each aboutText.split(' ') as word}
					<span class="overflow-hidden">
						<span class="about__word">{word} {@html '&nbsp;'}</span>
					</span>
				{/each}
			</div>
			<div class="about__boxes"></div>
		</div>
	</div>
</section>

<style lang="scss">
	.about {
		padding-block: 150px 75px;
		&__headline {
			margin-bottom: 20px;
		}
		&__content {
			position: relative;
			font-size: 2rem;
			line-height: 1.5;
			font-weight: 300;
		}
		&__text {
			max-width: 930px;
		}
	}
</style>
