<script lang="ts">
	import Fa from 'svelte-fa';
	import NavigationBurger from './NavigationBurger.svelte';
	import { gsap } from 'gsap';
	import { faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
	import { getContext, onMount } from 'svelte';
	import { navigate } from '$lib/utils/navigate';

	let loadingDuration = getContext<number>('loadingDuration');

	let scrolled = false;

	const handeScroll = () => {
		scrolled = window.scrollY > 0;
	};

	onMount(() => {
		gsap.from('.navigation', {
			opacity: 0,
			duration: 1,
			delay: loadingDuration + 0.4,
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
				<div class="navigation__logo">
					<a href="https://www.simonmayr.at" on:click={(e) => navigate(e, '/')}
						>simon<span class="clr-primary ff-philosopher">.</span></a
					>
				</div>
				<div class="navigation__social">
					<a href="https://www.instagram.com/simon_mayrr" target="_blank"
						><Fa icon={faInstagram} scale={1.4} /></a
					>
					<a href="https://www.linkedin.com/in/simon-mayr-365349248" target="_blank"
						><Fa icon={faLinkedinIn} scale={1.4} /></a
					>
					<a href="https://x.com/simonmayr_at" target="_blank"
						><Fa icon={faXTwitter} scale={1.4} /></a
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
		view-transition-name: navigation;
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
				text-align: left;
				order: -1;
			}
			a {
				color: var(--clr-white);
				text-decoration: none;
			}
		}
		&__burger {
			@media (max-width: 576px) {
				display: flex;
				justify-content: flex-end;
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
				color: var(--clr-white);
			}
		}
	}
</style>
