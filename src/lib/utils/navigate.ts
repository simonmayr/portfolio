import { goto } from '$app/navigation';

export const navigate = async (e: MouseEvent, url: string, id: string | null = null) => {
	e.preventDefault();

	if (window.location.pathname !== url) {
		await goto(url);
	}

	if (id !== null) {
		const element = document.getElementById(id);
		setTimeout(() => element?.scrollIntoView({ behavior: 'smooth' }), 200);
	}
};
