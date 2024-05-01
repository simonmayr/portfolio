<script lang="ts">
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import AboutBox from './AboutBox.svelte';

	let aboutText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.`;
	let headlineEl: HTMLElement;

	onMount(() => {
		gsap.from('.about__word', {
			opacity: 0.05,
			scrollTrigger: {
				trigger: '.about__text',
				start: 'top 80%',
				end: 'bottom 60%',
				scrub: 1,
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
			<div class="about__boxes">
				<div class="about__boxes-left">
					<AboutBox number={22} text="Jahre jung" />
					<AboutBox number={13} text="Pflanzen am <br> Leben erhalten" />
				</div>
				<div class="about__boxes-right">
					<AboutBox number={8} text="Jahre <br> erfahrung" />
					<AboutBox number={7} text="Abgeschlossene <br> Projekte" />
				</div>
			</div>
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
		}
		&__text {
			max-width: 900px;
			font-size: 2rem;
			line-height: 1.4;
			font-weight: 200;
		}
		&__boxes {
			display: flex;
			gap: 35px;
			margin-top: 60px;
			&-left,
			&-right {
				width: 33%;
				display: flex;
				flex-direction: column;
				gap: 35px;
			}
			&-right {
				padding-top: 40px;
			}
		}
	}
</style>
