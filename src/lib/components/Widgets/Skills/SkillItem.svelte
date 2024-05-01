<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { type IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: IconDefinition;
	export let headline: string;
	export let text: string;

	let element: HTMLElement;

	onMount(() => {
		gsap.from(element, {
			opacity: 0.05,
			scale: 0.95,
			scrollTrigger: {
				trigger: element,
				start: 'top 70%',
				end: 'bottom 75%',
				scrub: 1
			},
			stagger: {
				each: 0.03
			}
		});
	});
</script>

<div class="skill-item" bind:this={element}>
	<div class="skill-item__header">
		<Fa {icon} class="skill-item__icon" size="1.7x" color="var(--clr-primary)" />
		<h4 class="skill-item__headline">{headline}</h4>
	</div>
	<p class="skill-item__text">{text}</p>
</div>

<style lang="scss">
	.skill-item {
		background-color: var(--clr-dark-gray);
		border-radius: 12px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;
		grid-column: span 2;
		&:nth-child(1) {
			grid-column: span 3;
		}
		&:nth-child(2) {
			grid-column: span 3;
		}
		@media (max-width: 576px) {
			padding: 15px;
		}
		&__header {
			display: flex;
			gap: 15px;
			align-items: center;
		}
		&__headline {
			color: #fff;
			font-size: 2rem;
			margin-top: 0;
			margin-bottom: 3px;
		}
		&__text {
			opacity: 0.75;
			font-size: 1rem;
			line-height: 1.4;
			max-width: 350px;
			margin: 0;
		}
	}
</style>
