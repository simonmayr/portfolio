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
		gsap.from('.navigation__wrapper', {
			opacity: 0,
			y: -50,
			duration: 1,
			delay: loadingDuration + 0.6,
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
			padding: 5px 0;
			backdrop-filter: blur(10px);
		}
		&__wrapper {
			display: grid;
			align-items: center;
			grid-template-columns: repeat(3, 1fr);
			@media (max-width: 576px) {
				grid-template-columns: repeat(2, 1fr);
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
			gap: 25px;
			justify-content: flex-end;
			align-items: center;
			@media (max-width: 576px) {
				display: none;
			}
		}
	}
</style>
