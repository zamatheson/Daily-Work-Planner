// date and time variables.
var currentDate = new Date();
var currentHour = currentDate.getHours();

var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();

// display current date and time at the top of the page.
document.getElementById("currentDayTime").innerHTML = currentDate


// display color-coded timeblocks according to past, present and future times.
document.querySelectorAll(".timeblock").forEach(timeblock => {
  const hour = parseInt(timeblock.id.split("-")[1]);
  const timeblockDate = new Date(currentYear, currentMonth, currentDay, hour, 0, 0);

if(timeblockDate < currentDate) {
  $(timeblock).addClass("past");
} else if (timeblockDate.getHours() === currentHour) {
  $(timeblock).addClass("present");
} else {
  $(timeblock).addClass("future");
}
});

// save text input into local stoage to manage schedule. 
const saveButton = document.querySelector(".saveBtn");

saveButton.addEventListener("click", function() {
  const scheduleMsg = document.querySelector(".textBox").value;
  localStorage.setItem("scheduleMsg", scheduleMsg);
  alert("Scheduled Saved");
})