function response(input) {
	if(input.indexOf("examine") > -1) {
		addToLog("you look around to see a bright white room with nothing in it");
	} else {
		addToLog("I dun understand");
	}
}