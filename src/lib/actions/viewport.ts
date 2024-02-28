export const inViewport = (e: HTMLElement, callback: () => void, rootMargin: string = '-200px') => {
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				callback();
			}
		},
		{ rootMargin }
	);

	observer.observe(e);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

export const outViewport = (
	e: HTMLElement,
	callback: () => void,
	rootMargin: string = '-200px'
) => {
	const observer = new IntersectionObserver(
		(entries) => {
			if (!entries[0].isIntersecting) {
				callback();
			}
		},
		{ rootMargin }
	);

	observer.observe(e);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
