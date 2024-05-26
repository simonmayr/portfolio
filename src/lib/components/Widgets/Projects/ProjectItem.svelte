<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Button from '$lib/components/UI/Button.svelte';

	export let title: string;
	export let description: string;
	export let link: string | null = null;
	export let image: string;
	export let badges: string[];

	let projectItemEl: HTMLElement;
	let projectItemContentEl: HTMLElement;
	let projectItemImageEl: HTMLElement;

	onMount(() => {
		gsap.from(projectItemContentEl, {
			opacity: 0,
			ease: 'power3.inOut',
			duration: 1,
			delay: 0.3,
			scrollTrigger: {
				trigger: projectItemEl,
				start: 'top 80%'
			}
		});

		gsap.from(projectItemImageEl, {
			opacity: 0,
			clipPath: 'circle(0% at 50% 50%)',
			ease: 'power3.out',
			duration: 1,
			scrollTrigger: {
				trigger: projectItemEl,
				start: 'top 80%'
			}
		});
	});
</script>

<div class="project-item" bind:this={projectItemEl}>
	<div class="project-item__image" bind:this={projectItemImageEl}>
		<!-- screenshot: 1440px x 900px -->
		<img src={image} alt="" />
	</div>
	<div class="project-item__content" bind:this={projectItemContentEl}>
		<div class="project-item__badges">
			{#each badges as badge}
				<span class="project-item__badge">{badge}</span>
			{/each}
		</div>
		<h3 class="project-item__header">{title}</h3>
		<p class="project-item__description">
			{description}
		</p>
		<div class="project-item__side">
			{#if link}
				<Button href={link} external={true} size="small">Zur Webseite</Button>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.project-item {
		display: flex;
		align-items: center;
		gap: 10%;
		transition: 400ms;
		position: relative;
		isolation: isolate;
		&:nth-child(even) {
			flex-direction: row-reverse;
			@media (max-width: 991px) {
				flex-direction: column;
			}
		}
		@media (max-width: 991px) {
			flex-direction: column;
			gap: 30px;
			align-items: flex-start;
		}
		&__image {
			width: 60%;
			filter: brightness(0.9);
			clip-path: circle(70% at 50% 50%);
			@media (max-width: 991px) {
				width: 80%;
			}
			@media (max-width: 576px) {
				width: 100%;
			}
			img {
				width: 100%;
				height: auto;
				border-radius: 16px;
			}
		}
		&__header {
			font-size: var(--fs-h3);
			font-weight: 700;
			margin: 0;
			margin-bottom: 10px;
		}
		&__content {
			display: flex;
			flex-direction: column;
			width: 30%;
			@media (max-width: 991px) {
				width: 60%;
			}
			@media (max-width: 576px) {
				width: 100%;
			}
		}
		&__description {
			margin: 0;
			margin-bottom: 25px;
			line-height: 1.55;
		}
		&__badges {
			display: flex;
			gap: 15px;
			margin-bottom: 15px;
		}
		&__badge {
			font-size: 0.8rem;
		}
	}
</style>
