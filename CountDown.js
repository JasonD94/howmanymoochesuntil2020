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
	
	var seconds = Math.floor( (timeTo/1000) % 60 ); 		// Convert ms to seconds and round down
	var minutes = Math.floor( (timeTo/1000/60) % 60);		// ms to seconds to minutes & round down
	var hours = Math.floor ( (timeTo/(1000*60*60)) % 24);	// ms to seconds to mins to hrs
	var days = Math.floor ( timeTo/(1000*60*60*24));		// ms to days
	
	// seems like 365.2422 is close enough according to Washington Post ¯\_(?)_/¯
	var years = Math.floor ( timeTo/(1000*60*60*24*365.2422));
	
	// If years > 0, remove some days so it's X years <365 days etc
	if (years > 0) {
		days = Math.floor( days - (365.2422 * years) )
	}

	// Let's also display total years, months, weeks, days & hours too while we're at it
	var floatYears  = Number( timeTo / (1000*60*60*24*365.2422) ).toFixed(2);
	var floatMonths = Number( timeTo / (1000*60*60*24) / (365/12) ).toFixed(2);
	var floatWeeks  = Number( (timeTo / (1000*60*60*24) ) / 7).toFixed(2);
	var floatDays   = Number( timeTo / (1000*60*60*24) ).toFixed(2);
	var floatHours  = Number( timeTo / (1000*60*60) ).toFixed(2);
	var floatMins   = Number( timeTo / (1000*60) ).toFixed(2);

	// Floating point weeks below the full X years Y days etc line. 
	// This would be something like "10.54 weeks"
	$("#floatYears").text(floatYears);
	$("#floatMonths").text(floatMonths);
	$("#floatWeeks").text(floatWeeks);
	$("#floatDays").text(floatDays);
	$("#floatHours").text(floatHours);
	$("#floatMins").text(floatMins);

	// Disable years/days/hours/etc as they hit 0.
	if (years != 0) {
		$("#years").text(years);
		
		if (years == 1) {							// 1 year vs 2 year(S)
			$("#timeRefYears").text("year");
		}
		else {
			$("#timeRefYears").text("years");
		}
	}
	else {
		$("#years").text("");
		$("#timeRefYears").text("");
	}
	
	if (days != 0) {
		$("#days").text(days);
		
		if (days == 1)								// 1 day vs 2 day(S)
			$("#timeRefDays").text("day");
		else 
			$("#timeRefDays").text("days");
	}
	else {
		$("#days").text("");
		$("#timeRefDays").text("");
	}
	
	if (hours != 0) {
		$("#hours").text(hours);
		
		if (hours == 1) {
			$("#timeRefHours").text("hour");		// 1 hour vs 2 hour(Z)
		}
		else {
			$("#timeRefHours").text("hours");
		}
	}
	else {
		$("#hours").text("");
		$("#timeRefHours").text("");
	}
	
	if (minutes != 0) {
		$("#minutes").text(minutes);
		
		if (minutes == 1) {
			$("#timeRefMinutes").text("minute");	// 1 minute vs 2 minute(S)
		}
		else {
			$("#timeRefMinutes").text("minutes");
		}
	}
	else {
		$("#minutes").text("");
		$("#timeRefMinutes").text("");
	}
	
	if (seconds != 0) {
		$("#seconds").text(seconds);
		
		if (seconds == 1) {
			$("#timeRefSeconds").text("second");	// 1 second vs 2 second($)
		}
		else {
			$("#timeRefSeconds").text("seconds");
		}
	} 
	else {
		$("#seconds").text("");
		$("#timeRefSeconds").text("");
	}
	
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
		countDownFromTime.interval = setTimeout(function(){ countDownFromTime(countDown, id); }, 1000);
	}
}