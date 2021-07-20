$(document).ready(function($) {

	// VARIABLES
	var stepCounter = 0;
	var pause = 0;

	// START ANIMATION
	resetItems();
	startAnimation();

	// FUNCTIONS
	function animateNext(pause) {
		stepCounter++;
		gsap.delayedCall(pause, startAnimation);
	}
	
	// BUTTON
	$("#general").on({
		mouseenter: function(){
			gsap.to(".button_container", 0.5, {filter: "brightness(2)", webkitFilter: "brightness(2)", delay: 0});
		},
		mouseleave: function(){
			gsap.to(".button_container", 0.5, {filter: "brightness(1)", webkitFilter: "brightness(1)", delay: 0});
		}
	});
	
	function resetItems() {
		
		// Scene 00
		// gsap.set(".img_00_1", {y: 250});
		gsap.set(".img_00_2", {x: 250});
		gsap.set(".txt_00_1_container", {x: -242});
		gsap.set(".txt_00_1", {x: 242});
		
		// Scene 01
		gsap.set(".txt_00_container", {x: -189});
		gsap.set(".txt_00", {x: 189});
		gsap.set(".img_01_1", {x: 300});
		gsap.set(".img_01_2", {x: 300});
		gsap.set(".txt_01_container", {x: -96});
		gsap.set(".txt_01", {x: 96});
		
		// Scene 02
		gsap.set(".img_02_1", {y: -250});
		gsap.set(".img_02_2", {y: -250});
		gsap.set(".txt_02_container", {x: -148});
		gsap.set(".txt_02", {x: 148});
		
		// Scene 03
		gsap.set(".button", {filter: "brightness(1)", webkitFilter: "brightness(1)"});
		
		// stepCounter = 2;
	}

	function startAnimation() {
		switch(stepCounter) {

		case(0):
			gsap.to(".img_00_2", {duration: 1, x: 0, ease: "power4.out", delay: 0});
			gsap.to("#txt_bg", {duration: 1, attr: {points:"0,0 300,0 300,0 0,0"}, ease: "power4.out", delay: 0.8})
			gsap.to("#txt_bg", {duration: 1, attr: {points:"0,0 300,0 300,70 0,150"}, ease: "power2.inOut", delay: 1.4})
			gsap.to(".txt_00_1_container", {duration: 0.75, x: 0, ease: "expo.out", delay: 2.25});
			gsap.to(".txt_00_1", {duration: 0.75, x: 0, ease: "expo.out", delay: 2.25});

			animateNext(3.5);
			break;

		case(1):
			gsap.to(".img_00_1", {duration: 1, x: -300, ease: "power4.inOut", delay: 0});
			gsap.to(".img_00_2", {duration: 1, x: -300, ease: "power4.inOut", delay: 0});
			gsap.to("#txt_bg", {duration: 1, attr: {points:"0,0 0,0 0,250 0,250"}, ease: "power4.inOut", delay: 0})
			gsap.to("#txt_bg", {duration: 1, attr: {points:"0,0 88,0 150,250 0,300"}, ease: "power2.inOut", delay: 0.8})
		
			gsap.to(".txt_00_1_container", {duration: 1, x: -300, ease: "power4.inOut", delay: 0});
			gsap.to(".txt_00_container", {duration: 0, x: -189, y: -60, ease: "expo.out", delay: 1.3});
			gsap.to(".txt_00_container", {duration: 1, x: 0, ease: "expo.out", delay: 1.5});
			gsap.to(".txt_00", {duration: 0, x: 189, ease: "expo.out", delay: 1.3});
			gsap.to(".txt_00", {duration: 1, x: 0, ease: "expo.out", delay: 1.5});
			
			gsap.to(".img_01_1", {duration: 1, x: 0, ease: "power4.inOut", delay: 0});
			gsap.to(".img_01_2", {duration: 1, x: 0, ease: "power4.inOut", delay: 0});
			gsap.to(".txt_01_container", {duration: 0.75, x: 0, ease: "expo.out", delay: 2});
			gsap.to(".txt_01", {duration: 0.75, x: 0, ease: "expo.out", delay: 2});
			
			animateNext(3.5);
			break;

		case(2):
			gsap.to(".img_01_1", {duration: 1, y: 250, ease: "power4.inOut", delay: 0});
			gsap.to(".img_01_2", {duration: 1, y: 250, ease: "power4.inOut", delay: 0});
			gsap.to("#txt_bg", {duration: 1, attr: {points:"0,250 300,250 300,250 0,250"}, ease: "power4.inOut", delay: 0})
			gsap.to("#txt_bg", {duration: 1, attr: {points:"0,240 300,205 300,250 0,250"}, ease: "power2.inOut", delay: 0.8})
			gsap.to(".txt_01_container", {duration: 1, y: 250, ease: "power4.inOut", delay: 0});
			gsap.to(".img_02_1", {duration: 1, y: 0, ease: "power4.inOut", delay: 0});
			gsap.to(".img_02_2", {duration: 1, y: 0, ease: "power4.inOut", delay: 0});
			gsap.to(".txt_02_container", {duration: 1, x: 0, ease: "expo.out", delay: 1.75});
			gsap.to(".txt_02", {duration: 1, x: 0, ease: "expo.out", delay: 1.75});
			
			animateNext(3.5);
			break;

		case(3):
			// gsap.to(".txt_02_container", {duration: 1, y: 120, ease: "power4.inOut", delay: 0});
			// gsap.to("#txt_bg", {duration: 1, attr: {points:"0,250 300,250 300,250 0,250"}, ease: "power4.inOut", delay: 0})
			// gsap.to("#txt_bg", {duration: 1, attr: {points:"0,182 300,152 300,250 0,250"}, ease: "power2.inOut", delay: 0.8})
			// gsap.to(".txt_collection_container", {duration: 0.75, x: 0, ease: "expo.out", delay: 2});
			gsap.to(".txt_collection", {duration: 0.75, x: 0, ease: "expo.out", delay: 2});
			gsap.to(".button", {duration: 0.5, filter: "brightness(2)", webkitFilter: "brightness(2)", delay: 4.5});
			gsap.to(".button", {duration: 0.5, filter: "brightness(1)", webkitFilter: "brightness(1)", delay: 5});

			// gsap.to(".txt_02_container", {duration: 1, autoAlpha: 0, delay: 0});
			// gsap.to(".logo_container", {duration: 0.5, y: 0, ease: "power4.out", delay: });
			// gsap.to(".logo", {duration: 2, autoAlpha: 1, delay: 1.5});
			// gsap.to(".txt_collection_container", {duration: 0.75, x: 0, ease: "expo.out", delay: 1});
			// gsap.to(".txt_collection", {duration: 0.75, x: 0, ease: "expo.out", delay: 1});
			// gsap.to(".button_container", {duration: 0.75, x: -10, ease: "expo.out", delay: 1.5});
			// gsap.to(".button_container", {duration: 0.75, x: 0, ease: "expo.inOut", delay: 2.25});
			// gsap.to(".button_shine", {duration: 1.5, x: 0, delay: 2.5});
			// gsap.to(".button", {duration: 0.5, filter: "brightness(2)", webkitFilter: "brightness(2)", delay: 3.5});
			// gsap.to(".button", {duration: 0.5, filter: "brightness(1)", webkitFilter: "brightness(1)", delay: 4});
			
			break;

		
		default:
			stepCounter = 0;
			startAnimation();
			break;
		}
	}

});