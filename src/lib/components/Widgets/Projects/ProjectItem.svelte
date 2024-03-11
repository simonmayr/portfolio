<script lang="ts">
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { gsap } from 'gsap';

	import arrow from '../../../../assets/icons/arrow.svg';
	import ProjectItemImage from './ProjectItemImage.svelte';

	gsap.registerPlugin(ScrollTrigger);

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
			ease: 'power1.out',
			duration: 0.6,
			scrollTrigger: {
				trigger: projectItemEl,
				start: 'top bottom',
			}
		});

		gsap.from(projectItemContentEl, {
			opacity: 0,
			y: 50,
			ease: 'power1.out',
			delay: 0.6,
			scrollTrigger: {
				trigger: projectItemEl,
				start: 'top bottom'
			}
		});

		gsap.from(projectItemImageEl, {
			opacity: 0,
			ease: 'power1.out',
			delay: 0.6,
			scrollTrigger: {
				trigger: projectItemEl,
				start: 'top bottom'
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
					<span class="project-item-badge">{badge}</span>
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
		&__background {
			background-color: var(--_bgcolor);
			position: absolute;
			inset: 0;
			z-index: -1;
			border-radius: 16px;
			.project-item:hover & {
				transform: scalex(1.04) scaleY(1.04);
			}
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
			filter: brightness(0.8);
			animation-delay: 0.6s;
			transition: 400ms;
			.project-item:hover & {
				border-bottom-left-radius: 12px;
				border-bottom-right-radius: 12px;
			}
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
			padding: 10px;
			border-radius: 100px;
			transition: 400ms;
			margin-top: 4px;
			&:hover {
				scale: 1.09;
			}
		}
		&-badge {
			border: 1px solid var(--_color);
			border-radius: 100px;
			padding: 2px 10px;
			font-size: 0.8rem;
		}
	}
</style>
