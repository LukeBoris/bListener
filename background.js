//grab the webrequest object and pass it to the content.js script to be logged in the console
var details = {message: "random msg"};
var version = "1.0";

chrome.debugger.onEvent.addListener(onEvent);

chrome.browserAction.onClicked.addListener(function(tab) {
	var tabId = tab.id;
	var debuggeeId = {tabId:tabId};
	//start debugger
	chrome.debugger.attach(debuggeeId, version, onAttach.bind(null, debuggeeId));

	var file = {file: "content.js"};
	chrome.tabs.executeScript(tabId, file, function(re) {

	});
});

//to send messages
function sm(tab, message) {
	chrome.tabs.sendMessage(tab, message, function(response) {
		//did something come back?
		if(response.data.length > 1) {
			alert("Received a response");
		}
	
	});
};

//onAttach checks for error in attaching to debuggee, then sends command to enable Network tracking
function onAttach(debuggeeId) {
  if (chrome.runtime.lastError) {
    alert(chrome.runtime.lastError.message);
    return;
  }

  chrome.debugger.sendCommand(debuggeeId, "Network.enable");
};

function onEvent(debuggeeId, message, params) {
	if(message == "Network.requestWillBeSent") {
		sm(debuggeeId.id, params);
		
	}
	
};
