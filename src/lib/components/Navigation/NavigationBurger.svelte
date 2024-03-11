<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let navOpen = false;

	let buttonEl: HTMLElement;
	let buttonFlairEl: HTMLElement;

	$: if (!import.meta.env.SSR) {
		document.body.style.overflow = navOpen ? 'hidden' : 'auto';
	}

	onMount(() => {
		gsap.set(buttonFlairEl, { xPercent: -50, yPercent: -50, scale: 0 });

		let xTo = gsap.quickSetter(buttonFlairEl, 'x', 'px'),
			yTo = gsap.quickSetter(buttonFlairEl, 'y', 'px');

		const handleHover = (e: MouseEvent) => {
			xTo(e.clientX - buttonEl.getBoundingClientRect().left);
			yTo(e.clientY - buttonEl.getBoundingClientRect().top);
		};

		buttonEl.addEventListener('mousemove', handleHover);
	});
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && (navOpen = false)} />

<div class="navigation-burger" class:navOpen>
	<button
		class="navigation-burger__circle"
		bind:this={buttonEl}
		on:mouseenter={() => gsap.to(buttonFlairEl, { scale: 2.5, duration: 0.6, ease: 'power3' })}
		on:mouseleave={() => gsap.to(buttonFlairEl, { scale: 0, duration: 0.6, ease: 'power3' })}
		on:click={() => (navOpen = !navOpen)}
	>
		<span class="button-flair" bind:this={buttonFlairEl}></span>
	</button>
	<div class="navigation-backdrop"></div>
	<div class="navigation-content">
		<div class="container">
			<a href="/test" on:click={() => (navOpen = false)}>Test</a>
			<a href="/" on:click={() => (navOpen = false)}>Home</a>
		</div>
	</div>
</div>

<style lang="scss">
	.button-flair {
		height: 100%;
		width: 100%;
		border-radius: 100%;
		background-color: var(--clr-primary);
		position: absolute;
	}
	.navigation-backdrop {
		position: absolute;
		width: 400vh;
		aspect-ratio: 1/1;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		background-color: var(--clr-primary);
		scale: 0;
		border-radius: 100%;
		transition: 0.4s;
		.navOpen & {
			scale: 1;
			transition: 0.8s;
		}
	}
	.navigation-burger {
		position: relative;
		width: fit-content;
		&__circle {
			--_size: 25px;
			cursor: pointer;
			position: relative;
			display: block;
			width: var(--_size);
			height: var(--_size);
			border: 2px solid var(--clr-primary);
			border-radius: 100%;
			background-color: transparent;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			&::after {
				content: 'Menü';
				position: absolute;
				top: 50%;
				left: calc(100%);
				padding-left: 15px;
				translate: 0 -50%;
				color: var(--clr-white);
			}
		}
	}
	.navigation-content {
		position: absolute;
		inset: 0;
		opacity: 0;
		pointer-events: none;
		transition: 0.8s;
		padding-top: 120px;
		.navOpen & {
			opacity: 1;
			pointer-events: all;
		}
		a {
			color: var(--clr-white);
			font-size: 2rem;
			text-decoration: none;
			transition: 0.2s;
		}
	}
</style>
