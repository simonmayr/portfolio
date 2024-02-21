const options = {
	rootMargin: '-200px'
};

export const inViewport = (e: HTMLElement, callback: () => void) => {
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			callback();
		}
	}, options);

	observer.observe(e);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

export const outViewport = (e: HTMLElement, callback: () => void) => {
	const observer = new IntersectionObserver((entries) => {
		if (!entries[0].isIntersecting) {
			callback();
		}
	}, options);

	observer.observe(e);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
