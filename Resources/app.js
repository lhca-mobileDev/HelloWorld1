function testCall(inURL){
		if (inURL === undefined){ inURL = "https://lcadev1.giezenconsulting.com/getScore/1"; }
		var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
	    	Ti.API.info(JSON.parse(this.responseText));
	        return JSON.parse(this.responseText);
	    },
	    onerror: function(e) {
			// this function is called when an error occurs, including a timeout
	        Ti.API.info(e.error);
	        return JSON.parse('{"error"; "Bad Return"}');
	    },
	    timeout:5000  /* in milliseconds */
	});
	xhr.open("GET", inURL);
	xhr.send();
};

var label = Ti.UI.createLabel({
	text: 'Hi There',
	color: 'Red'
});

var lhca_logo = Ti.UI.createImageView({
	image:'assets/images/1469542368.png',
	height:(Ti.Platform.displayCaps.platformHeight / 3),
	width:(Ti.Platform.displayCaps.platformWidth - 10),
	top:50
});

var username_field = Ti.UI.createTextField({
	color:'#FFFFFF',
	hintText: 'user@domain.com',
	hintTextColor:'#000000',
	height:'',
	width:'',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var cred_field = Ti.UI.createTextField({
	color:'#FFFFFF',
	hintText: 'Password',
	hintTextColor:'#000000',
	height:'',
	width:'',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask: true
});
/*
but1.addEventListener('click', function(e){
	alert(testCall("https://lcadev1.giezenconsulting.com/getScore/1"));
});

but2.addEventListener('click', function(e){
	alert(testCall("https://lcadev1.giezenconsulting.com/getScore/2"));
});
*/
var view = Ti.UI.createView({});
var window = Ti.UI.createWindow({});
//window.setBackgroundImage('assets/images/1469542368.png');
window.setBackgroundImage('assets/images/Mistyocean.jpg');
view.add(label);
//view.add(but1);
//view.add(but2);
window.add(view);
window.add(lhca_logo);
window.open();

//Ti.API.info(Ti.Platform.displayCaps.platformWidth);
