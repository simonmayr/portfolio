<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import arrow from '$lib/assets/icons/arrow.svg';
	import Button from '$lib/components/UI/Button.svelte';
	import ProjectItemImage from './ProjectItemImage.svelte';

	export let color: string;
	export let bgcolor: string;
	export let title: string;
	export let link: string | null = null;
	export let image: string;
	export let badges: string[];
	export let gridColumn: string;
	export let gridRow: string;

	let projectItemEl: HTMLElement;
	let projectItemBackgroundEl: HTMLElement;
	let projectItemContentEl: HTMLElement;
	let projectItemImageEl: HTMLElement;

	onMount(() => {
		gsap.from(projectItemBackgroundEl, {
			scale: 0.0,
			borderRadius: '500px',
			ease: 'power3.inOut',
			duration: 1,
			scrollTrigger: {
				trigger: projectItemEl,
				start: 'top 90%'
			}
		});

		gsap.from(projectItemContentEl, {
			opacity: 0,
			y: 50,
			ease: 'power3.inOut',
			delay: 1,
			scrollTrigger: {
				trigger: projectItemEl,
				start: 'top 90%'
			}
		});

		gsap.from(projectItemImageEl, {
			opacity: 0,
			ease: 'power3.inOut',
			delay: 1,
			scrollTrigger: {
				trigger: projectItemEl,
				start: 'top 90%'
			}
		});
	});
</script>

<div
	class="project-item"
	bind:this={projectItemEl}
	style={`--_color: ${color}; --_bgcolor: ${bgcolor}; grid-column: ${gridColumn}; grid-row: ${gridRow}`}
>
	<div class="project-item__background" bind:this={projectItemBackgroundEl}></div>
	<div class="project-item__content" bind:this={projectItemContentEl}>
		<div class="project-item__text">
			<h3 class="project-item__header">{title}</h3>
			<div class="project-item__badges">
				{#each badges as badge}
					<Button color="black" size="small">{badge}</Button>
				{/each}
			</div>
		</div>
		<div class="project-item__side">
			{#if link}
				<a class="project-item__link" href={link} target="_blank" aria-label={title} title={link}>
					<img src={arrow} width="15" alt="External Link" />
				</a>
			{/if}
		</div>
	</div>
	<div class="project-item__image" bind:this={projectItemImageEl}>
		<ProjectItemImage {image} />
	</div>
</div>

<style lang="scss">
	.project-item {
		--_space-inside: 25px;
		color: var(--_color);
		padding: var(--_space-inside) var(--_space-inside) 0 var(--_space-inside);
		aspect-ratio: 9/12;
		margin-bottom: 60px;
		display: flex;
		flex-direction: column;
		transition: 400ms;
		position: relative;
		isolation: isolate;
		border-radius: 16px;
		overflow: hidden;
		&__background {
			background-color: var(--_bgcolor);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 100%;
			aspect-ratio: 1/1;
			z-index: -1;
		}
		&__header {
			font-size: var(--fs-h3);
			font-weight: 700;
			margin: 0;
			margin-bottom: 5px;
		}
		&__image {
			border-top-left-radius: 12px;
			border-top-right-radius: 12px;
			flex: 1;
			overflow: hidden;
			filter: brightness(0.7);
			animation-delay: 0.6s;
			transition: 400ms;
		}
		&__content {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			margin-bottom: 25px;
			animation-delay: 0.6s;
		}
		&__badges {
			display: flex;
			gap: 8px;
		}
		&__link {
			background-color: black;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 12px;
			border-radius: 100px;
			transition: 400ms;
			margin-top: 4px;
			&:hover {
				scale: 1.09;
			}
		}
	}
</style>
