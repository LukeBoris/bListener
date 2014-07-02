//simulates an event firing
function eventFire(el, etype){
  if (el.fireEvent) {
    (el.fireEvent('on' + etype));
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

var allLinks = document.links; // create an object of all the links on the page
for(var i = 0; i < allLinks.length; i++) {
	eventFire(allLinks[i], "mousedown");
}

//grab all anchors and put border them
function linkChecked(a) {
	if(a.style.borderColor == "red") {
		a.style.borderColor = "green";	
	} else {
		a.style.borderColor = "red";
	}
};

var x = document.getElementsByTagName("a");

for(var i = 0; i < x.length; i++) {
	x[i].setAttribute("id", "link" + i);
	x[i].setAttribute("onMousedown", "linkChecked(this)");
	x[i].style.border = "dashed";
	x[i].style.borderColor = "red";
}


//Testplace

//newtrial: Try looping through all the event types to see if any of them can be listened for on mousedown
var worked = function(t) {
	console.log(t + "worked!");
};

document.addEventListener("load", worked, false);
