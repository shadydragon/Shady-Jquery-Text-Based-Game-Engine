$(function() {
	storySettings = {
		//The jquery selectors for functional elements
		inputBoxSelector: "#usrinput",
		logSelector: ".gamelog",
	};

	//Modify the stage
	stageSettings = {
		//Page Backgrounds
		backgroundColour: "",
		backgroundImage: ""
	}

	//Initialization Section
	init();	
});

//Starts Listening for inputs
function init() {
	console.log("Init called");
	$('form').submit(function(e) {
		e.preventDefault();
		var usrInput = $(storySettings.inputBoxSelector).val();
		$(storySettings.inputBoxSelector).val('');
		addToLog('<p>&#8811;' + usrInput);
		response(usrInput);
		// worldSelect();
	});
};

function addToLog(content) {
	console.log("Adding to the game log")
	$(storySettings.logSelector).append(content);
};