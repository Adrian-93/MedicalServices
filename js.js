let openContact = false;
document.getElementById('openContact').onclick = function(){
	openContact = true;
	document.getElementById('contact').style.display = "block";
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementsByTagName("nav")[0].style.display= "none";
}


document.getElementById('close').onclick = function(){
	openContact = false;
	document.getElementById("contact").style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "visible";	
	if(window.innerWidth > 960){
		document.getElementsByTagName("nav")[0].style.display= "block";
		}
};


window.onresize = function(){
	if(window.innerWidth > 960 && openContact == false){
		document.getElementsByTagName("nav")[0].style.display= "block";
	}else{
		document.getElementsByTagName("nav")[0].style.display= "none";
	}
}

