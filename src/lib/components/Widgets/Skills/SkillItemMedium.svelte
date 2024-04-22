<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let image: string;
	export let headline: string;
	export let text: string;

	let itemEl: HTMLElement;

	onMount(() => {
		gsap.from(itemEl, {
			opacity: 0,
			scale: 0.5,
			duration: 1,
			ease: 'power3.inOut',
			scrollTrigger: {
				trigger: itemEl,
				start: 'top 90%'
			}
		});
	});
</script>

<div class="skill-item-medium" bind:this={itemEl}>
	<div class="skill-item-medium__wrapper">
		<h3 class="skill-item-medium__headline">{headline}</h3>
		<p class="skill-item-medium__text">{text}</p>
	</div>
	<img src={image} class="skill-item-medium__image" alt={headline} />
</div>

<style lang="scss">
	.skill-item-medium {
		border-radius: 12px;
		grid-row: span 2;
		padding: 1px;
		background: linear-gradient(106deg, var(--clr-primary) 0%, #ffffff 100%);
		display: flex;
		overflow: hidden;
		&__wrapper {
			padding: 30px;
			display: flex;
			flex-direction: column;
			background-color: #00020a;
			border-radius: 12px;
			flex: 1;
		}
		&__headline {
			font-size: var(--fs-h3);
			margin-top: 0;
			margin-bottom: 5px;
			background: linear-gradient(180deg, var(--clr-primary) 0%, #ffffff 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		&__text {
			opacity: 0.6;
			margin: 0;
		}
		&__image {
			position: absolute;
			left: -40px;
			bottom: -40px;
			width: 50%;
			max-width: 330px;
			opacity: 0.1;
			pointer-events: none;
		}
	}
</style>
