var args = arguments[0] || {};

// pass in default setting or set to 'on'
args.defaultState = args.defaultState || 'on';

// set the initial state of the button
if(args.defaultState === "on") {
	toggleButtonByIdClicked("off");
} else if (args.defaultState ==="off") {
	toggleButtonByIdClicked("on");
}

// event handler for when the user clicks button
$.container.addEventListener("click", function(_event) {
	
	// hide the clicked item, show the unclicked one
	toggleButtonByIdClicked(_event.source.id);
});
// _buttonId name of the id clicked
function toggleButtonByIdClicked(_buttonId) {
	if (_buttonId === "on") {
		$.on.hide();
		$.off.show();
	} else if (_buttonId === "off") {
		$.on.show();
		$.off.hide();
	}
}
