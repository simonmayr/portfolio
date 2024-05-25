<script lang="ts">
	import Fa from 'svelte-fa';
	import Button from '../UI/Button.svelte';
	import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

	let navOpen = false;

	$: if (!import.meta.env.SSR) {
		document.body.style.overflow = navOpen ? 'hidden' : 'auto';
	}

	const navigationPoints = [
		{
			id: 'about',
			label: 'Über mich'
		},
		{
			id: 'skills',
			label: 'Skills'
		},
		{
			id: 'projects',
			label: 'Projekte'
		}
	];

	const navigate = (id: string) => {
		navOpen = false;
		const element = document.getElementById(id);
		setTimeout(() => element?.scrollIntoView({ behavior: 'smooth' }), 200);
	};
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && (navOpen = false)} />

<div class="navigation-burger" class:navOpen>
	<Button size={'small'} type={'nav'} on:click={() => (navOpen = true)} />
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<span class="navigation-burger__label" on:click={() => (navOpen = true)}>Inhalt</span>
	<div class="navigation-backdrop"></div>
	<div class="navigation-content">
		<div class="container">
			<div class="navigation-content-close">
				<button class="navigation-content-close__button" on:click={() => (navOpen = false)}
				></button>
				<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
				<span class="navigation-content-close__label" on:click={() => (navOpen = false)}
					>Schließen</span
				>
			</div>
			<div class="navigation-content-main">
				<div class="navigation-content-main__nav">
					{#each navigationPoints as { id, label }}
						<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
						<span class="navigation-content-main__link" on:click={() => navigate(id)}>{label}</span>
					{/each}
				</div>
				<div class="navigation-content-main__side">
					<div class="navigation-content-main__privacy">
						<a href="#a">Kontakt</a>
						<a href="#a">Impressum</a>
						<a href="#a">Cookies</a>
					</div>
					<div class="navigation-content-main__footer">
						<div class="navigation-content-main__social">
							<a href="https://www.instagram.com/simon_mayrr" target="_blank"
								><Fa scale={1.4} icon={faInstagram} /></a
							>
							<a href="https://www.linkedin.com/in/simon-mayr-365349248/" target="_blank"
								><Fa scale={1.4} icon={faLinkedinIn} /></a
							>
						</div>
						<a href="mailto:hello@simonmayr.at">hello@simonmayr.at</a>
					</div>
				</div>
			</div>
		</div>
		<div class="navigation-content-decoration">simon</div>
	</div>
</div>

<style lang="scss">
	.navigation-backdrop {
		position: absolute;
		width: max(400vw, 400vh);
		aspect-ratio: 1/1;
		top: 50%;
		left: calc(50% - 28px);
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
		display: flex;
		align-items: center;
		&__label {
			padding-left: 15px;
			cursor: pointer;
		}
	}
	.navigation-content {
		position: fixed;
		inset: 0;
		opacity: 0;
		pointer-events: none;
		color: var(--clr-secondary);
		.navOpen & {
			opacity: 1;
			pointer-events: all;
			transition: 0.8s;
			transition-delay: 0.3s;
		}
		&-close {
			display: flex;
			align-items: center;
			width: fit-content;
			margin-top: 40px;
			margin-left: 2px;
			:global(.scrolled) & {
				margin-top: 20px;
				margin-bottom: 20px;
			}
			@media (max-width: 576px) {
				margin-top: 20px;
			}
			&__button {
				--size: 20px;
				height: var(--size);
				width: var(--size);
				background-color: transparent;
				border: none;
				padding: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-shrink: 0;
				cursor: pointer;
				&::before,
				&::after {
					content: '';
					position: absolute;
					height: 2px;
					width: var(--size);
					background-color: var(--clr-secondary);
					transition: 0.2s;
					transform-origin: center;
					border-radius: 2px;
				}
				&::before {
					transform: rotate(45deg);
				}
				&::after {
					transform: rotate(-45deg);
				}
			}
			&__label {
				padding-left: 15px;
				cursor: pointer;
				font-weight: 500;
			}
		}
		&-main {
			padding-top: 100px;
			display: flex;
			justify-content: space-between;
			@media (max-width: 768px) {
				flex-direction: column;
				gap: 40px;
				padding-top: 40px;
			}
			&__nav {
				display: flex;
				flex-direction: column;
				gap: 25px;
			}
			&__link {
				color: var(--clr-secondary);
				font-size: clamp(3rem, 5vw, var(--fs-h2));
				font-weight: bold;
				width: fit-content;
				text-decoration: none;
				transition: 0.2s;
				white-space: nowrap;
				font-family: 'Philosopher', serif;
				cursor: pointer;
				position: relative;
				&:hover {
					padding-left: 30px;
				}
			}
			&__side {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				@media (max-width: 768px) {
					gap: 40px;
				}
			}
			&__privacy {
				display: flex;
				flex-direction: column;
				gap: 10px;
				a {
					color: var(--clr-secondary);
					text-decoration: none;
					cursor: pointer;
					font-weight: 500;
				}
			}
			&__footer {
				a {
					color: var(--clr-secondary);
					text-decoration: none;
					cursor: pointer;
				}
			}
			&__social {
				display: flex;
				gap: 20px;
				margin-bottom: 10px;
			}
		}
		&-decoration {
			position: absolute;
			left: -7vw;
			top: calc(100% - 21vw);
			font-size: 40vw;
			line-height: 0.7;
			pointer-events: none;
			color: transparent;
			-webkit-text-stroke: 1px var(--clr-dark-gray);
			opacity: 0.1;
		}
	}
</style>
