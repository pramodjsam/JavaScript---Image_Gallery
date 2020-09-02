function imageGallery(){
	const highlight= document.querySelector(".gallery-highlight");
	const previews= document.querySelectorAll(".room-preview img");
	previews.forEach(function(preview){
		preview.addEventListener("click",function(){
			const smallSrc= this.src;
			// console.log(smallSrc);
			const bigSrc= smallSrc.replace("small","big");
			// console.log(bigSrc);
			highlight.src=bigSrc;
			previews.forEach(function(preview){
				preview.classList.remove("room-active");
			})
			preview.classList.add("room-active")
		})
	})
}

imageGallery();