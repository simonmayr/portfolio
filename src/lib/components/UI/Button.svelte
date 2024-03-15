<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let color: 'primary' | 'black' = 'primary';
	export let type: 'normal' | 'nav' = 'normal';

	let buttonEl: HTMLElement;
	let buttonFlairEl: HTMLElement;

	onMount(() => {
		gsap.set(buttonFlairEl, { scale: 0 });

		let xTo = gsap.quickSetter(buttonFlairEl, 'x', 'px');
		let yTo = gsap.quickSetter(buttonFlairEl, 'y', 'px');

		const handleHover = (e: MouseEvent) => {
			xTo(
				e.clientX -
					buttonEl.getBoundingClientRect().left -
					buttonEl.getBoundingClientRect().width / 2
			);
			yTo(
				e.clientY -
					buttonEl.getBoundingClientRect().top -
					buttonEl.getBoundingClientRect().height / 2
			);
		};

		buttonEl.addEventListener('mousemove', handleHover);
	});

	const handleMouseEnter = () => {
		gsap.to(buttonFlairEl, { scale: 2.2, duration: 0.2, ease: 'power1.out' });
	};

	const handleMouseLeave = () => {
		gsap.to(buttonFlairEl, { scale: 0, duration: 0.2, ease: 'power1.out' });
	};
</script>

<button
	class="button"
	class:button--small={size === 'small'}
	class:button--medium={size === 'medium'}
	class:button--large={size === 'large'}
	class:button--primary={color === 'primary'}
	class:button--black={color === 'black'}
	class:button--nav={type === 'nav'}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:click
	bind:this={buttonEl}
>
	<slot />
	<span class="button-flair" bind:this={buttonFlairEl}></span>
</button>

<style lang="scss">
	.button {
		cursor: pointer;
		position: relative;
		display: block;
		border-radius: 500px;
		border: 2px solid var(--clr-primary);
		color: white;
		background-color: transparent;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		padding: 10px 20px;
		isolation: isolate;
		transition: 0.6s;
		width: fit-content;
		&--small {
			font-size: 0.8rem;
			padding: 2px 10px;
			border-width: 1px;
		}
		&--medium {
			font-size: 1rem;
			padding: 10px 25px;
		}
		&--large {
			font-size: 2rem;
			padding: 15px 30px;
		}
		&--primary {
			background-color: transparent;
			border-color: var(--clr-primary);
			transition: none;
			&:hover {
				transition: background-color 0.2s 0.2s;
				background-color: var(--clr-primary);
			}
		}
		&--black {
			background-color: transparent;
			border-color: black;
			color: black;
			transition: 0.2s;
			&:hover {
				color: white;
				border-color: black;
			}
			.button-flair {
				background-color: black;
			}
		}
		&--nav {
			--_size: 25px;
			cursor: pointer;
			position: relative;
			width: var(--_size);
			height: var(--_size);
			border: 2px solid var(--clr-primary);
			border-radius: 100%;
			background-color: transparent;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
		}
		&-flair {
			width: 100%;
			aspect-ratio: 1/1;
			border-radius: 100%;
			background-color: var(--clr-primary);
			position: absolute;
			display: block;
			transform-origin: center center;
			z-index: -1;
		}
	}
</style>
