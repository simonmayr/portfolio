<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let number: number;
	export let text: string;

	let element: HTMLElement;

	onMount(() => {
		gsap.from(element, {
			opacity: 0.05,
			scale: 0.95,
			filter: 'blur(2px)',
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

<div class="about-box" bind:this={element}>
	<div class="about-box__number ff-philosopher">{number}</div>
	<div class="about-box__text">{@html text}</div>
</div>

<style lang="scss">
	.about-box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--clr-dark-gray);
		padding: 25px;
		width: 100%;
		height: 160px;
		border-radius: 22px;
		transition:
			color 300ms ease,
			background-color 300ms ease;
		&:hover {
			background-color: var(--clr-primary);
			color: var(--clr-secondary);
		}
		&__number {
			font-size: 3.5rem;
			line-height: 1;
		}
		&__text {
			text-align: right;
			line-height: 1.4;
		}
	}
</style>
