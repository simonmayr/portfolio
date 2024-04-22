import { gsap } from 'gsap';

export const animateSkill = (skill: HTMLElement) => {
	gsap.from(skill, {
		opacity: 0,
		scale: 0.9,
    translateY: 50,
		duration: 1,
		ease: 'power3.inOut',
		scrollTrigger: {
			trigger: skill,
			start: 'top 90%'
		}
	});
};
