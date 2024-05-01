<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount, tick } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	export let text: string;
	export let textSuffix: string | null = null;
	export let delay: number = 0;
	export let scrollTrigger: HTMLElement | false = false;

	let textEl: HTMLElement;

	let animationBlendConfig = {
		width: '100%',
		delay: delay,
		ease: 'power2.inOut',
		duration: 1
	};

	let animationWordConfig = {
		y: '100%',
		delay: delay + 0.6,
		ease: 'power3.out',
		duration: 1,
		stagger: {
			each: 0.05,
			ease: 'linear'
		}
	};

	gsap.registerPlugin(ScrollTrigger);

	onMount(async () => {
		await tick();

		if (!scrollTrigger) {
			gsap.from(textEl.querySelector('.text-animation__blend'), animationBlendConfig);
			gsap.from(textEl.querySelectorAll('.text-animation__word'), animationWordConfig);
		} else {
			let animationScrollTriggerConfig = {
				trigger: scrollTrigger,
				start: 'top 90%',
				end: 'bottom 60%'
			};

			gsap.from(textEl.querySelector('.text-animation__blend'), {
				...animationBlendConfig,
				scrollTrigger: animationScrollTriggerConfig
			});
			gsap.from(textEl.querySelectorAll('.text-animation__word'), {
				...animationWordConfig,
				scrollTrigger: animationScrollTriggerConfig
			});
		}
	});
</script>

<span class="text-animation" bind:this={textEl}>
	{#each text.split('') as letter, i}
		{#if letter === ' '}
			&nbsp;
		{:else}
			<span class="text-animation__word">{letter}</span>
		{/if}
	{/each}
	{#if textSuffix}
		<span class="text-animation__word clr-primary ff-philosopher">{textSuffix}</span>
	{/if}
	<div class="text-animation__blend"></div>
</span>

<style lang="scss">
	.text-animation {
		display: inline-flex;
		align-items: flex-end;
		width: fit-content;
		position: relative;
		overflow: hidden;
		&__blend {
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			width: 0%;
			background-color: #eee;
		}
		&__word {
			display: inline-block;
		}
	}
</style>
