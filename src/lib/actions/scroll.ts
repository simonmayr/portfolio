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

	const originalHeight = node.getClientRects()[0].height;

	node.style.height = node.getClientRects()[0].width * 2 + contentWidth + 'px';

	const checkScroll = (e: Event) => {
		if (node.getClientRects()[0].top < 0 && node.getClientRects()[0].bottom > 0) {
			let percentage =
				Math.abs(node.getClientRects()[0].top) / (node.getClientRects()[0].height - originalHeight);

			percentage = Math.min(Math.max(percentage, 0), 1);

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
