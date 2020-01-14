let btnLeft = document.getElementById("btn-slider-left"),
	btnRight = document.getElementById("btn-slider-right"),
	mainSlide = document.getElementsByClassName("main-slide-container")[0],
	slider = document.querySelector(".slider");
	
let left = -100,
	counter = 1;
			
let firstImage = slider.firstElementChild.cloneNode(true),
	lastImage = slider.lastElementChild.cloneNode(true);
	slider.insertBefore(firstImage, slider.childNodes[slider.childNodes.length]);
	slider.insertBefore(lastImage, slider.childNodes[0]);
			
	firstImage.id = "leftReset";
	lastImage.id = "rightReset";
	btnRight.addEventListener("click", () => {
		counter++;
		
 		btnRight.disabled = true;
		setTimeout(() => { btnRight.disabled = false; },1000); 
		
		left -= 100;
		slider.style.transition = "1s ease-in-out";
		slider.style.marginLeft = left+"%";
			
	})
	
	btnLeft.addEventListener("click", () => {
		counter--;
		
		btnLeft.disabled = true;
		setTimeout(() => { btnLeft.disabled = false; },1000); 
		
		slider.style.transition = "1s ease-in-out";
		left += 100;
		slider.style.marginLeft = left+"%";
	})
	
 
	mainSlide.addEventListener('transitionend',() => {
		let slides = document.getElementsByClassName("slides");
		console.log(counter);

		if( slides[counter].id == 'leftReset' ) {
			slider.style.transition = "0ms";
			slider.style.marginLeft = "-100%"; 
			
			left = -100;
			counter = 1;
		}
		
		if( slides[counter].id == 'rightReset' ) {
			slider.style.transition = "0ms";
			slider.style.marginLeft = "-500%"; 
			
			left = -500;
			counter = 5;
		}
		
	})
	
	/* Hamburger toggle menu */
	let hamburger = document.getElementById("hamburger-toggle"),
		menu = document.querySelector(".menu-wrapper");
		
	hamburger.addEventListener("click", () => {
		var toggle = window.getComputedStyle(menu).display;
		
		if (toggle == "none") {
			menu.style.display = "block";
			menu.style.height = window.innerHeight + "px";
		} else {
			menu.style.display = "none";
		}
		
		
	})
	
	/* Seting full height for phones  */
	

	
	