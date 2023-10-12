$(document).ready(function(){
  // pull current day and time using dayjs
  var currentDayTime = dayjs().format('MM-DD-YY HH:mm:ss');

  $('#currentDayTime').text(currentDayTime);
  
  var currentHour = dayjs().hour();

// display color-coded timeblocks according to past, present and future times
  document.querySelectorAll(".timeblock").forEach(timeblock => {
    const hour = parseInt(timeblock.id.split("-")[1]);
    const timeblockDate = dayjs().hour(hour).minute(0).second(0);

    if(timeblockDate.isBefore(currentDayTime, 'hour')) {
      $(timeblock).addClass("past"); 
    } else if (timeblockDate.isSame(currentDayTime, 'hour')) {
      $(timeblock).addClass("present");
    } else {
      $(timeblock).addClass("future");
    }
  });
});

// save text input into local stoage to manage schedule 
const saveButton = document.querySelectorAll(".saveBtn");

saveButton.forEach(function(saveButton) {

  saveButton.addEventListener("click", function() {

    const timeBlock = saveButton.closest(".timeblock");
    const textBox = timeBlock.querySelector(".textBox");
    const scheduleMsg = textBox.value;
    const timeBlockId = timeBlock.id;

    localStorage.setItem(timeBlockId, scheduleMsg);
    alert("Scheduled Saved");
  });
});