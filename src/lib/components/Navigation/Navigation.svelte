<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGitlab, faInstagram } from '@fortawesome/free-brands-svg-icons';

	import NavigationBurger from './NavigationBurger.svelte';

	export let startAnimation: boolean;
</script>

<div class="navigation" class:slideIn={startAnimation}>
	<div class="container">
		<div class="navigation__wrapper">
			<div class="navigation__burger">
				<NavigationBurger />
			</div>
			<div class="navigation__logo">simon<span>.</span></div>
			<div class="navigation__social">
        <Fa icon={faInstagram} scale={1.4} />
				<Fa icon={faGitlab} scale={1.4} />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.navigation {
		position: absolute;
		inset: 0 0 auto 0;
		opacity: 0;
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
			gap: 20px;
			justify-content: flex-end;
		}
	}
</style>
