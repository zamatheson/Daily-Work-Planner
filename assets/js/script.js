var currentDate = new Date();

var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();

document.getElementById("currentDayTime").innerHTML = currentDate


document.querySelectorAll(".timeblock").forEach(timeblock => {
  const hour = parseInt(timeblock.id.split("-")[1]);
  const timeblockDate = new Date(currentYear, currentMonth, currentDay, hour, 0, 0);

if(timeblockDate < currentDate) {
  timeblock.style.backgroundColor = "#d3d3d3";
} else if (timeblockDate.getHours() === currentHour) {
  timeblock.style.backgroundColor = "#ff6961";
} else {
  timeblock.style.backgroundColor = "#77dd77";
}
});

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
