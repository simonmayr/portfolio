<script lang="ts">
	import { onMount } from 'svelte';
	import { animateSkill } from './skill-animation';

	export let image: string;
	export let headline: string;
	export let text: string;

	let itemEl: HTMLElement;

	onMount(() => {
		animateSkill(itemEl);
	});
</script>

<div class="skill-item-big" bind:this={itemEl}>
	<div class="skill-item-big__wrapper">
		<div class="skill-item-big__content">
			<h3 class="skill-item-big__headline">{headline}</h3>
			<p class="skill-item-big__text">{text}</p>
		</div>
		<img src={image} class="skill-item-big__image" alt={headline} />
	</div>
</div>

<style lang="scss">
	.skill-item-big {
		border-radius: 12px;
		grid-column: span 2;
		grid-row: span 2;
		padding: 1px;
		background: linear-gradient(106deg, var(--clr-primary) 0%, #ffffff 100%);
		display: flex;
		@media (max-width: 576px) {
			grid-column: span 1;
		}
		&__wrapper {
			padding: 30px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: #00020a;
			background-image: var(--noise);
			border-radius: 12px;
			flex: 1;
			position: relative;
			overflow: hidden;
		}
		&__content {
			width: 60%;
			@media (max-width: 576px) {
				width: 100%;
			}
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
			right: -40px;
			bottom: -40px;
			width: 50%;
			max-width: 330px;
			opacity: 0.1;
			pointer-events: none;
		}
	}
</style>
