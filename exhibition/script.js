

var creatureSlides = document.getElementsByClassName("leftImage");
var humanSlides = document.getElementsByClassName('rightImage');
	

function slideShow(){
	
	for(i = 0; i < humanSlides.length;i++){
		
		creatureSlides[i].style.display = "none";
		humanSlides[i].style.display = "none";

	}
	creatureSlides[index].style.display = "block";
	humanSlides[index].style.display = "block";
	


	
	index++;
	if(index == humanSlides.length){index = 0}
	setTimeout(slideShow,6000);	
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//changeImage();
var index = 0
var rand = getRandomIntInclusive(0,3);
var first = true;
window.onload = slideShow();

