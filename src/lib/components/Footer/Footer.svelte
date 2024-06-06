<script lang="ts">
	import { EMAIL } from '$lib/utils/email';
</script>

<footer class="section footer" id="footer">
	<div class="container">
		<div class="footer-top">
			<div class="footer-top__mail">
				<a href="mailto:{EMAIL}" class="footer-top__mail-link">{EMAIL}</a>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="footer-bottom__social">
				<b>Social</b>
				<a href="https://www.instagram.com/simon_mayrr" target="_blank">Instagram</a>
				<a href="https://www.linkedin.com/in/simon-mayr-365349248" target="_blank">LinkedIn</a>
				<a href="https://x.com/CIM0N_" target="_blank">X</a>
			</div>
			<div class="footer-bottom__legal">
				<a href="/impressum">Impressum</a>
				<span>simon. © 2024</span>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		margin-top: 0;
		&-top {
			border-bottom: 1px solid var(--clr-white);
			padding-bottom: 20px;
			&__mail {
				&-link {
					font-size: 119px;
					translate: -10px 0;
					display: inline-block;
					background: linear-gradient(
						to right,
						var(--clr-primary),
						var(--clr-primary) 50%,
						var(--clr-white) 50%
					);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
					background-size: 200% 100%;
					background-position: 100%;
					transition: background 1s ease;
					&:hover {
						background-position: 0 100%;
					}
					@media (max-width: 1200px) {
						font-size: 99px;
					}
					@media (max-width: 991px) {
						font-size: 73px;
					}
					@media (max-width: 768px) {
						font-size: 54px;
					}
					@media (max-width: 576px) {
						translate: 0 0;
						font-size: clamp(30.6px, 9.7vw, 100vw);
					}
				}
			}
		}
		&-bottom {
			padding-top: 30px;
			display: flex;
			align-items: center;
			@media (max-width: 768px) {
				flex-direction: column;
				align-items: flex-start;
				gap: 20px;
			}
			a {
				color: var(--clr-white);
				&:hover {
					color: var(--clr-primary);
				}
			}
			&__social {
				display: flex;
				gap: 20px;
				width: 50%;
				@media (max-width: 768px) {
					width: 100%;
					justify-content: space-between;
				}
			}
			&__legal {
				width: 50%;
				display: flex;
				justify-content: space-between;
				@media (max-width: 768px) {
					width: 100%;
				}
			}
		}
	}
</style>
