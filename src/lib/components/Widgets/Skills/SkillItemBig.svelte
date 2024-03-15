<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	// export let image: string;
	export let teaser: string;
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

<div class="skill-item-big" bind:this={itemEl}>
	<div class="skill-item-big__wrapper">
		<div class="skill-item-big__teaser">{teaser}</div>
		<div class="skill-item-big__content">
			<h3 class="skill-item-big__headline">{headline}</h3>
			<p class="skill-item-big__text">{text}</p>
		</div>
	</div>
</div>

<style lang="scss">
	.skill-item-big {
		border-radius: 12px;
		grid-column: span 2;
		grid-row: span 2;
		padding: 3px;
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
			border-radius: 12px;
			flex: 1;
			position: relative;
			overflow: hidden;
		}
		&__teaser {
			font-weight: bold;
		}
		&__content {
			width: 60%;
		}
		&__headline {
			font-size: 2.4rem;
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
	}
</style>
