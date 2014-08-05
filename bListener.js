//simulates an event firing
function eventFire(el, etype){
  if (el.fireEvent) { //check if fireEvent is available on object
    (el.fireEvent('on' + etype)); //fire the event on the given object
  } else {
    var evObj = document.createEvent('Events'); //create an Event object
    evObj.initEvent(etype, true, false); //type of event
    el.dispatchEvent(evObj); //simulate event
  }
}

var allLinks = document.getElementsByTagName("a"); // create an object of all the links on the page

//fire the event on all links within the allLinks object
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

//all links
var x = document.getElementsByTagName("a");

for(var i = 0; i < x.length; i++) {
	if(Number(y) > 0) {
		x[i].style.border = "dashed";
		x[i].style.borderColor = "red";
		x[i].innerHTML = y;
		x[i].setAttribute("onMousedown", "linkChecked(this)");
	}
}



//Testplace
//https://developer.chrome.com/extensions/getstarted


//newtrial: Try looping through all the event types to see if any of them can be listened for on mousedown
var worked = function(t) {
	console.log(t + "worked!");
};

document.addEventListener("load", worked, false);
