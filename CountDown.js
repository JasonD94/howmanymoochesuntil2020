/*
* 	Count Down to a given a date
*/
window.onload = function() {
	// Month Day, Year Hour:Minute:Second, id-of-element-container
	// Change the Date to whatever you want
	// Formats include Unix Time Stamps in ms, dateStrings, 
	// or (year, monthIndex, day, hours, minutes, seconds). Reference:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
	// https://www.epochconverter.com/
	countDownFromTime(new Date('November 3, 2020 00:00:00'), 'countDownDiv');
};

function countDownFromTime(countDown, id) {

	var timeTo = countDown - new Date();	// Time to countDown date in milliseconds
	
	// Displaying only Mooches in this version of the Count Down
	var floatMooches = Number( (timeTo / (1000*60*60*24)) * 10 ).toFixed(4);

	// Mooches are defined as a unit of 10, named for former 
	// White House Communications Director Anthony Scaramucci‘s famously short tenure
	$("#floatMooches").text(floatMooches);
	
	// Stop counting down when we hit 0
	if (timeTo <= 0) {
		clearTimeout(id);
		
		// Change title of page / above count down to name of epic video
		document.title = "HAPPIER"
		$("#countDownTitle").text("HAPPIER");
		$("#countDownTitle").addClass("font-weight-bold font-italic");
		
		// Clear the count down div and replace it with an epic video
		$(countDownDiv).load("CountDownDone.html");
	}
	else {
		clearTimeout(countDownFromTime.interval);
		
		// Super fast refresh with this count down - every 100 milliseconds instead of
		// every 1000 milliseconds in the original version
		countDownFromTime.interval = setTimeout(function(){ countDownFromTime(countDown, id); }, 100);
	}
}