<script lang="ts">
	import { draw } from 'svelte/transition';
	export let startAnimation: boolean;

	let mouseX = 0;
	let mouseY = 0;
	let currentX = 0;
	let currentY = 0;

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.pageX;
		mouseY = event.pageY;
	}

	$: {
		currentX = mouseX * 0.01;
		currentY = mouseY * 0.01;
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div class="header-ellipse">
	<svg
		class="header-ellipse__svg"
		style="transform: translate({currentX}px, {currentY}px)"
		width="281"
		height="281"
		viewBox="0 0 281 281"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		{#if startAnimation}
			<g filter="url(#filter0_d_63_87)">
				<path
					transition:draw={{ delay: 600 }}
					d="M228.5 140.5C228.5 189.101 189.101 228.5 140.5 228.5C91.8989 228.5 52.5 189.101 52.5 140.5C52.5 91.8989 91.8989 52.5 140.5 52.5C189.101 52.5 228.5 91.8989 228.5 140.5Z"
					stroke="#5EE2FF"
					stroke-width="5"
					shape-rendering="crispEdges"
				/>
			</g>
		{/if}
		<defs>
			<filter
				id="filter0_d_63_87"
				x="0"
				y="0"
				width="281"
				height="281"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="25" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.370313 0 0 0 0 0.886656 0 0 0 0 1 0 0 0 0.81 0"
				/>
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_63_87" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_63_87" result="shape" />
			</filter>
		</defs>
	</svg>
</div>

<style lang="scss">
	.header-ellipse {
		position: absolute;
		top: -94px;
		left: -75px;
		&__svg {
			position: absolute;
		}
	}
</style>
