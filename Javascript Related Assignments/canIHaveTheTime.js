var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if (MINUTE<30 && PERIOD == "PM"){
    console.log ("It's just past " + HOUR "in the evening.")
}
elsse if (MINUTE<30 && PERIOD == "AM"){
    console.log ("It's just past " + HOUR "in the morning.")
}
else if (MINUTE>30 && PERIOD == "PM"){
    console.log ("It's just past " + HOUR "in the evening.")
}
else if (MINUTE>30 && PERIOD == "PM"){
    console.log ("It's just past " + HOUR "in the evening.")
}
else {
    console.log ("it is " + HOUR MINUTE PERIOD)
}