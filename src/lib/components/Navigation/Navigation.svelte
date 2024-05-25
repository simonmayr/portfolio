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
		gsap.from('.navigation', {
			opacity: 0,
			duration: 1,
			delay: loadingDuration + 0.6,
			ease: 'power3.inOut'
		});
		handeScroll();
	});
</script>

<svelte:window on:scroll={() => handeScroll()} />

<div class="navigation" class:scrolled>
	<div class="navigation__wrapper">
		<div class="container">
			<div class="navigation__inner">
				<div class="navigation__burger">
					<NavigationBurger />
				</div>
				<div class="navigation__logo">simon<span class="clr-primary ff-philosopher">.</span></div>
				<div class="navigation__social">
					<a href="https://www.instagram.com/simon_mayrr" target="_blank"
						><Fa icon={faInstagram} scale={1.4} /></a
					>
					<a href="https://www.linkedin.com/in/simon-mayr-365349248/" target="_blank"
						><Fa icon={faLinkedinIn} scale={1.4} /></a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.navigation {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 10;
		&__wrapper {
			padding: 30px 0;
			transition: 0.2s;
			@media (max-width: 576px) {
				padding: 10px 0;
			}
			.scrolled & {
				padding: 10px 0;
				background-color: var(--clr-dark-gray);
			}
		}
		&__inner {
			display: grid;
			align-items: center;
			grid-template-columns: repeat(3, 1fr);
			@media (max-width: 576px) {
				grid-template-columns: repeat(2, 1fr);
			}
		}
		&__logo {
			font-size: var(--fs-h3);
			font-weight: 600;
			text-align: center;
			@media (max-width: 576px) {
				text-align: right;
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
			a {
				color: white;
			}
		}
	}
</style>
