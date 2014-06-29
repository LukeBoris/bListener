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
