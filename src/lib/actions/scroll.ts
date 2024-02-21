export const horizontalWheelScroll = (node: HTMLElement) => {
	const scrollWrapper = node.querySelector('.scroll-wrapper') as HTMLElement;
	const scrollContent = node.querySelector('.scroll-content') as HTMLElement;

	if (!scrollWrapper || !scrollContent) {
		console.error('scroll-wrapper or scroll-content not found');
		return;
	}

	const contentWidth =
		(scrollContent?.getClientRects()[0].width ?? 0) -
		(scrollWrapper?.getClientRects()[0].width ?? 0);

	node.style.height = node.getClientRects()[0].height + contentWidth + 'px';

	const checkScroll = (e: Event) => {
		if (node.getClientRects()[0].top < 0) {
			let percentage = Math.abs(node.getClientRects()[0].top) / node.getClientRects()[0].height;
			console.log(percentage);

			if (percentage < 0.01) {
				percentage = 0;
			}

			scrollContent.style.transform = `translateX(-${contentWidth * percentage}px)`;
		}
	};

	window.addEventListener('scroll', checkScroll);

	return {
		destroy() {
			window.removeEventListener('scroll', checkScroll);
		}
	};
};
