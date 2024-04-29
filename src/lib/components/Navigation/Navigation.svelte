<script lang="ts">
	import Fa from 'svelte-fa';
	import NavigationBurger from './NavigationBurger.svelte';
	import { gsap } from 'gsap';
	import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { getContext, onMount } from 'svelte';

	let loadingDuration = getContext<number>('loadingDuration');

	let scrolled = false;

	const handeScroll = () => {
		scrolled = window.scrollY > 0;
	};

	onMount(() => {
		gsap.from('.navigation .container', {
			opacity: 0,
			duration: 1,
			delay: loadingDuration + 1.2,
			ease: 'power3.inOut'
		});
		handeScroll();
	});
</script>

<svelte:window on:scroll={() => handeScroll()} />

<div class="navigation" class:scrolled>
	<div class="container">
		<div class="navigation__wrapper">
			<div class="navigation__burger">
				<NavigationBurger />
			</div>
			<div class="navigation__logo">simon<span>.</span></div>
			<div class="navigation__social">
				<Fa icon={faInstagram} scale={1.4} />
				<Fa icon={faLinkedinIn} scale={1.4} />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.navigation {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 10;
		padding: 30px 0;
		transition: 0.2s;
		@media (max-width: 576px) {
			padding: 15px 0;
		}
		&.scrolled {
			padding: 15px 0;
		}
		&__wrapper {
			display: grid;
			align-items: center;
			grid-template-columns: repeat(3, 1fr);
			padding: 0 15px;
			transition: 0.2s;
			@media (max-width: 576px) {
				grid-template-columns: repeat(2, 1fr);
			}
			.scrolled & {
				backdrop-filter: blur(10px);
				inset: 10px 10px auto 10px;
				border-radius: 12px;
				background-color: rgba(255, 255, 255, 0.05);
				box-shadow:
					inset 0.25px 1px 0 0 rgb(254 205 211/3%),
					0px 0.3px 0.3px rgba(255, 255, 255, 0.01),
					0px 2.2px 2.5px -0.4px rgba(255, 255, 255, 0.01),
					0px 4.3px 4.8px -0.8px rgba(255, 255, 255, 0.01),
					0px 7.5px 8.4px -1.2px rgba(255, 255, 255, 0.01),
					0px 12.8px 14.4px -1.7px rgba(255, 255, 255, 0.01),
					0px 21px 23.6px -2.1px rgba(255, 255, 255, 0.01),
					0px 33.2px 37.4px -2.5px rgba(255, 255, 255, 0.01);
			}
		}
		&__logo {
			font-size: 2rem;
			font-weight: 600;
			text-align: center;
			@media (max-width: 576px) {
				text-align: right;
			}
			span {
				color: #32daf1;
			}
		}
		&__social {
			display: flex;
			gap: 30px;
			justify-content: flex-end;
			align-items: center;
			padding-right: 5px;
			@media (max-width: 576px) {
				display: none;
			}
		}
	}
</style>
