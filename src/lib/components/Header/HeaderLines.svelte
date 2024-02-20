<script lang="ts">
	import { draw } from 'svelte/transition';

	export let startAnimation: boolean;
</script>

<div class="header-lines">
	<div class="header-lines__line blue-line">
		<svg
			width="158"
			height="435"
			viewBox="0 0 158 435"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{#if startAnimation}
				<path
					transition:draw={{ duration: 1400 }}
					d="M-24.8914 419.257C13.0598 413.468 56.2989 403.367 85.1488 376.379C104.659 358.127 113.445 332.469 116.444 306.677C119.569 279.797 104.037 250.759 91.4484 227.83C78.3284 203.933 60.85 181.136 57.0037 153.25C55.015 138.832 53.9575 125.406 60.6615 111.998C67.6802 97.9607 81.1845 86.8012 92.1596 75.826C104.554 63.4314 120.375 50.4465 126.503 33.3544C133.173 14.7477 144.792 -6.98374 144.792 -27"
					stroke="#32DAF1"
					stroke-width="20"
					stroke-linecap="round"
				/>
			{/if}
		</svg>
	</div>
	<div class="header-lines__line purple-line">
		<svg
			width="208"
			height="632"
			viewBox="0 0 208 632"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{#if startAnimation}
				<path
					transition:draw={{ duration: 1400 }}
					d="M232.438 15.0005C178.839 15.0005 94.1048 14.172 77.8946 79.0128C70.2051 109.771 85.5721 138.815 107.157 160.4C124.981 178.223 152.947 207.813 149.731 235.69C146.152 266.703 119.48 278.039 97.0983 294.826C56.5218 325.258 15 376.063 15 429.353C15 453.976 25.0587 481.019 38.5728 501.29C57.7391 530.04 83.4688 547.411 115.692 559.105C199.989 589.696 288.514 604.086 376.923 616.716"
					stroke="#EB15E2"
					stroke-width="30"
					stroke-linecap="round"
				/>
			{/if}
		</svg>
	</div>
	<div class="header-lines__line orange-line">
		<svg
			width="175"
			height="244"
			viewBox="0 0 175 244"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{#if startAnimation}
				<path
					transition:draw={{ duration: 1400 }}
					d="M-26.3219 69.8494C-10.3534 51.3692 11.3379 37.6236 34.3648 29.7238C73.3706 16.3421 137.963 -11.4096 160.381 39.1655C169.935 60.7202 159.469 81.0965 144.405 96.635C127.856 113.705 103.035 120.869 87.1258 138.183C78.4987 147.572 71.457 156.464 69.5311 169.484C67.7199 181.728 77.9339 192.051 83.6694 201.577C93.8176 218.431 106.688 237.008 92.9679 256.036"
					stroke="#FFA500"
					stroke-width="20"
					stroke-linecap="round"
				/>
			{/if}
		</svg>
	</div>
</div>

<style lang="scss">
	.header-lines {
		&__line {
			position: absolute;
			z-index: 1;
			svg {
				display: block;
			}
			&.blue-line {
				top: 0;
				left: 0;
			}
			&.purple-line {
				right: 0;
				top: 40px;
			}
			&.orange-line {
				left: 0;
				bottom: 0px;
			}
		}
	}
</style>
