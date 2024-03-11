<script lang="ts">
	import NavigationBurger from './NavigationBurger.svelte';
	import Fa from 'svelte-fa';

	import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export const animate = () => {
		gsap.from('.navigation', {
			opacity: 0,
			y: -50,
			duration: 1,
			ease: 'power3.inOut'
		});
	};

	onMount(() => {
		animate();
	});
</script>

<div class="navigation">
	<div class="container">
		<div class="navigation__wrapper">
			<div class="navigation__burger">
				<NavigationBurger />
			</div>
			<div class="navigation__logo">simon<span>.</span></div>
			<div class="navigation__social">
				<Fa icon={faInstagram} />
				<Fa icon={faLinkedinIn} />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.navigation {
		position: absolute;
		inset: 0 0 auto 0;
		z-index: 10;
		padding: 30px 0;
		&__wrapper {
			display: grid;
			align-items: center;
			grid-template-columns: repeat(3, 1fr);
		}
		&__logo {
			font-size: 2rem;
			font-weight: 600;
			text-align: center;
			span {
				color: #32daf1;
			}
		}
		&__social {
			display: flex;
			gap: 25px;
			justify-content: flex-end;
		}
	}
</style>
