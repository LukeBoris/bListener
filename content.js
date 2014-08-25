console.log("script injected");

//maybe try tabs messaging
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	alert("message was received");
	console.log(message);

	//send our response back
	sendResponse({response: "true"});
	

});