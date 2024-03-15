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
				start: 'top 90%',
			}
		});
	});
</script>

<div class="skill-item-small" bind:this={itemEl}>
	<div class="skill-item-small__image">
		<img src={image} alt={headline} />
	</div>
	<div class="skill-item-small__content">
		<h4 class="skill-item-small__headline">{headline}</h4>
		<p class="skill-item-small__text">{text}</p>
	</div>
</div>

<style lang="scss">
	.skill-item-small {
		background-color: #00020a;
		border-radius: 12px;
		padding: 30px;
		display: flex;
		align-items: center;
		gap: 20px;
		&__image {
			width: 30%;
			img {
				height: 100%;
				width: 100%;
				max-width: 80px;
				max-height: 60px;
				object-fit: contain;
			}
		}
		&__content {
			width: 70%;
		}
		&__headline {
			color: #fff;
			font-size: 1.5rem;
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
