let tempNumber; 
let count=0
element = document.querySelector("#randomizer");
imgArray = document.querySelectorAll(".img1");
element.addEventListener("click", buttonRandom); 
function buttonRandom(){
	tempNumber= Math.floor(Math.random() * imgArray.length); 
	// change number 5 to the amount of images
	//pixel number between 1 and 5
	console.log(tempNumber);
	console.log(imgArray[tempNumber]);
	imgArray[tempNumber].style.opacity="100%"; 
	imgArray[tempNumber].style.zIndex=count;
	element.style.zIndex=count;
	count++;
};


let tempNumber2; 
let count2=0
element2 = document.querySelector("#randomizer2");
imgArray2 = document.querySelectorAll(".img2");
element2.addEventListener("click", button2Random); 
function button2Random(){
	tempNumber2= Math.floor(Math.random() * imgArray2.length); 
	//pixel number between 1 and 5
	console.log(tempNumber2);
	console.log(imgArray2[tempNumber2]);
	imgArray2[tempNumber2].style.opacity="100%"; 
	imgArray2[tempNumber2].style.zIndex=count2;
	element2.style.zIndex=count2;
	count2++;
};


let tempNumber3; 
let count3=0
element3 = document.querySelector("#randomizer3");
imgArray3 = document.querySelectorAll(".img3");
element3.addEventListener("click", button3Random); 
function button3Random(){
	tempNumber3= Math.floor(Math.random() * imgArray3.length); 
	//pixel number between 1 and 5
	console.log(tempNumber3);
	console.log(imgArray3[tempNumber3]);
	imgArray3[tempNumber3].style.opacity="100%"; 
	imgArray3[tempNumber3].style.zIndex=count3;
	element3.style.zIndex=count3;
	count3++;
};



let tempNumber4; 
let count4=0
element4 = document.querySelector("#randomizer4");
imgArray4 = document.querySelectorAll(".img4");
element4.addEventListener("click", button4Random); 
function button4Random(){
	tempNumber4= Math.floor(Math.random() * imgArray4.length); 
	//pixel number between 1 and 5
	console.log(tempNumber4);
	console.log(imgArray4[tempNumber4]);
	imgArray4[tempNumber4].style.opacity="100%"; 
	imgArray4[tempNumber4].style.zIndex=count4;
	element4.style.zIndex=count4;
	count4++;
};
