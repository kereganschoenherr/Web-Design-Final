

	var creatureSlides = document.getElementsByClassName("leftImage");
	var humanSlides = document.getElementsByClassName('rightImage');
	//var bg = document.getElementsByClassName("bg");
	//var bg2 = document.getElementsByClassName("bg2");

	var colors = ['blue','green','orange','yellow'];
	var colors2 = ['aliceblue','lightgreen','pink','antiquewhite'];

	
function changeImage(){
	document.getElementById('leftImage').src='../images/faces_bumper.png';
	var x = document.getElementById("rightImage");
	x.src = "../images/annie_bumper.png";
}
function slideShow(){
	
	for(i = 0; i < humanSlides.length;i++){
		/*
		bg[i].style.display = "none";
		bg2[i].style.display = "none";
		*/
		creatureSlides[i].style.display = "none";
		humanSlides[i].style.display = "none";

	}
	creatureSlides[index].style.display = "block";
	humanSlides[index].style.display = "block";
	/*
	bg[index].style.backgroundColor = colors[index];
	bg[index].style.display = "block";
	bg2[index].style.backgroundColor = colors2[index];
	bg2[index].style.display = "block";

*/
	
	index++;
	if(index == humanSlides.length){index = 0}
	setTimeout(slideShow,6000);	
}
/*
function testSlide1(){

	
	creatureSlides[index].style.display = "block";
	humanSlides[index].style.display = "block";
	bg[index].style.backgroundColor = colors[index];
	bg[index].style.display = "block";


	
	index++;
	if(index == humanSlides.length){index = 0}
	setTimeout(testSlide1,6000);	

}
function testSlide2(){

	
	creatureSlides[index].style.display = "block";
	humanSlides[index].style.display = "block";
	bg[index].style.backgroundColor = colors[index];
	bg[index].style.display = "block";


	
	index++;
	if(index == humanSlides.length){index = 0}
	

}
*/
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

