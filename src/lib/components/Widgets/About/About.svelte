<script lang="ts">
	import TextAnimation from '$lib/components/UI/TextAnimation.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import AboutBox from './AboutBox.svelte';
	import { calculateYearsSince } from '$lib/utils/calculateYearsSince';

	let aboutText = `Hallo, mein Name ist Simon Mayr und ich bin ein leidenschaftlicher Webentwickler aus Tirol. Seit Jahren fasziniert mich die Erstellung professioneller und kreativer Webseiten sowie Webanwendungen. Ich strebe stets nach neuen und herausfordernden Projekten, bei denen ich mein Können unter Beweis stellen kann.`;
	let headlineEl: HTMLElement;

	const age = calculateYearsSince('2001-05-28');
	const workExperience = calculateYearsSince('2015-8-02');

	onMount(() => {
		gsap.from('.about__word', {
			opacity: 0.05,
			filter: 'blur(5px)',
			scrollTrigger: {
				trigger: '.about__text',
				start: 'top 80%',
				end: 'bottom 60%',
				scrub: 1
			},
			stagger: {
				each: 0.03
			}
		});
	});
</script>

<section class="about" id="about">
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
					<AboutBox number={age} text="Jahre Alt" />
					<AboutBox number={17} text="Abgeschlossene <br> Projekte" />
				</div>
				<div class="about__boxes-right">
					<AboutBox number={workExperience} text="Jahre <br> Berufserfahrung" />
					<AboutBox number={13} text="Pflanzen am <br> Leben erhalten" />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.about {
		margin-top: 50px;
		padding-block: 100px 50px;
		@media (max-width: 768px) {
			padding-block: 70px 30px;
		}
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
			@media (max-width: 991px) {
				font-size: 1.1rem;
			}
		}
		&__boxes {
			display: flex;
			gap: 35px;
			margin-top: 60px;
			@media (max-width: 576px) {
				gap: 20px;
			}
			@media (max-width: 355px) {
				flex-direction: column;
			}
			&-left,
			&-right {
				width: 33%;
				display: flex;
				flex-direction: column;
				gap: 35px;
				@media (max-width: 991px) {
					width: 50%;
				}
				@media (max-width: 576px) {
					gap: 20px;
				}
				@media (max-width: 355px) {
					width: 100%;
				}
			}
			&-right {
				padding-top: 40px;
				@media (max-width: 355px) {
					padding-top: 0px;
				}
			}
		}
	}
</style>
