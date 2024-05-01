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

<div class="skill-item-small" bind:this={itemEl}>
	<div class="skill-item-small__image">
		<a href="/test">
			<img src={image} alt={headline} style={`--image: skill-${headline}`} />
		</a>
	</div>
	<div class="skill-item-small__content">
		<h4 class="skill-item-small__headline">{headline}</h4>
		<p class="skill-item-small__text">{text}</p>
	</div>
</div>

<style lang="scss">
	.skill-item-small {
		background-color: #00020a;
		background-image: var(--noise);
		border-radius: 12px;
		padding: 30px;
		display: flex;
		align-items: center;
		gap: 20px;
		@media (max-width: 576px) {
			padding: 15px;
		}
		&__image {
			width: 30%;
			img {
				height: 100%;
				width: 100%;
				max-width: 80px;
				max-height: 60px;
				object-fit: contain;
				view-transition-name: var(--image);
			}
		}
		&__content {
			width: 70%;
		}
		&__headline {
			color: #fff;
			font-size: var(--fs-h4);
			margin-top: 0;
			margin-bottom: 3px;
		}
		&__text {
			opacity: 0.6;
			font-size: 1rem;
			margin: 0;
		}
	}
</style>
