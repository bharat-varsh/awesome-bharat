document.getElementById('bharatSVG').addEventListener('load', function () {
	// We need to target the DOM inside the SVG
	const bharatMapDOM = this.contentDocument;  // the embedded SVG DOM
	const selectAllInBharatMap = (selector) => bharatMapDOM.querySelectorAll(selector);  // For convenience
	const selectSingleInBharatMap = (selector) => bharatMapDOM.querySelector(selector);  // For convenience

	gsap.registerPlugin(MorphSVGPlugin);
	const masterAnimation = gsap.timeline();
	gsap.set(selectAllInBharatMap('.state'), { autoAlpha: 0 });
	const bharatMapAnimationTimeline = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 3, ease: "power1.inOut" } });
	for (let i = 2; i <= 31; i++) {
		bharatMapAnimationTimeline.to(selectSingleInBharatMap("#stateArea1"), {
			morphSVG: {
				shape: selectSingleInBharatMap(`#stateArea${i}`),
				map: "size"
			}
		});
	}
	masterAnimation.add(bharatMapAnimationTimeline);
});
