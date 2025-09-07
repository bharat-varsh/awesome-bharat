document.getElementById('bharatSVG')
    .addEventListener(
        'load',
        function() {
            // We need to target the DOM inside the SVG
            const bharatMapDOM = this.contentDocument;  // the embedded SVG DOM
            const selectAllInBharatMap = (selector) => bharatMapDOM.querySelectorAll(selector);  // For convenience
            const selectSingleInBharatMap = (selector) => bharatMapDOM.querySelector(selector);  // For convenience

            gsap.registerPlugin(MorphSVGPlugin);
            const masterAnimation = gsap.timeline();
            gsap.set(selectAllInBharatMap('.morph-target'), { autoAlpha: 0 });
            const bharatMapAnimationTimeline = gsap.timeline({ defaults: { duration: 2, ease: 'slow(0.1,2,false)' } });
            for (let i = 2; i <= 3; i++) {
                bharatMapAnimationTimeline.to(selectSingleInBharatMap("#stateArea1"), {
                    morphSVG: {
                        shape: selectSingleInBharatMap(`#stateArea${i}`),
                        map: "size"
                    }
                });
            }
            masterAnimation.add(bharatMapAnimationTimeline);

            // -------------- | Test code | -----------------

            // tl
            //     .to(selectSingle('#stateArea1'), { morphSVG: { shape: q('#path2'), map: 'size' } })
            //     .to(q('#path1'), { morphSVG: { shape: q('#path3'), map: 'size' } });
            // });

            // -------------- | Test code | -----------------

            // -------------- | Older working code | ----------------

            // gsap.registerPlugin(MorphSVGPlugin);

            // gsap.set(".morph-target", { autoAlpha: 0 });
            // const master = gsap.timeline();
            // // const tlMainland = gsap.timeline({ defaults: { duration: 5, ease: "steps(12)" } });
            // // const tlMainland = gsap.timeline({ defaults: { duration: 2, ease: "bounce.inOut" } });
            // // const tlMainland = gsap.timeline({ defaults: { duration: 2, ease: "bounce.in" } });
            // // const tlMainland = gsap.timeline({ defaults: { duration: 2, ease: "elastic.inOut(2,0.1)" } }); // AWESOME
            // const tlMainland = gsap.timeline({ defaults: { duration: 2, ease: "slow(0.1,2,false)" } });
            // for (let i = 2; i <= 3; i++) {
            //     tlMainland.to("#path1", {
            //         morphSVG: {
            //             shape: `#path${i}`,
            //             map: "size"
            //         }
            //     });
            // }
            // // const tlIslands = gsap.timeline({ defaults: { ease: "power1.out", duration: 3.7 } });
            // // tlIslands.to(".island", {
            // //     autoAlpha: 1,
            // //     stagger: 0.15 // one-by-one fade
            // // });

            // // master.add(tlMainland).add(tlIslands, "-=0.3");
            // master.add(tlMainland);

            // -------------- | Older working code | ----------------
        }
    );