// create the widget
var toggleBtnWidget = Alloy.createWidget("buttonToggle", null, {
	"defaulteState":"on",
	"id": "toggleButtonWidget"
});

// get the main view from the widget
$.mainWindow.add(toggleBtnWidget.getView());

// open the window
$.mainWindow.open();
