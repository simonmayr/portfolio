<script lang="ts">
	import { inViewport } from '$lib/actions/viewport';
	import arrow from '../../../assets/icons/arrow.svg';
	import ProjectItemImage from './ProjectItemImage.svelte';

	export let color: string;
	export let bgcolor: string;
	export let title: string;
	export let link: string | null = null;
	export let image: string;
	export let badges: string[];

	let showProject: boolean = false;
</script>

<div
	class="project-item"
	style={`--_color: ${color}; --_bgcolor: ${bgcolor}`}
	use:inViewport={() => (showProject = true)}
>
	<div class="project-item__background scaleIn" class:animate={showProject}></div>
	<div class="project-item__content fadeIn" class:animate={showProject}>
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
					<img src={arrow} alt="External Link" />
				</a>
			{/if}
		</div>
	</div>
	<div class="project-item__image clipIn" class:animate={showProject}>
		<ProjectItemImage {image} />
	</div>
</div>

<style lang="scss">
	.project-item {
		--_space-inside: 25px;
		color: var(--_color);
		padding: var(--_space-inside) var(--_space-inside) 0 var(--_space-inside);
		aspect-ratio: 9/10;
		width: 600px;
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
			transition: 400ms;
			.project-item:hover & {
				transform: scalex(1.04) scaleY(1.04);
			}
		}
		&__header {
			font-size: 2rem;
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
			align-items: center;
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
			padding: 15px;
			border-radius: 100px;
			transition: 400ms;
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
