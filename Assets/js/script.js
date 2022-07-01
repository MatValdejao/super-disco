$("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do"));

// check current time and compare to each
var todayHour = parseInt(moment().format("HH"));

// loop through rows and compare to todayHour variable
var timeCompare = function () {
  // select all container children with .time-block to loop through
  var timeBlockEl = $(".container").children(".time-block");
  for (var i = 0; i < timeBlockEl.length; i++) {
    var time = timeBlockEl[i].getAttribute("id").replace("hour", "");
    time = parseInt(time);

    // compare time to current time and set background color accordingly
    if (time > todayHour) {
      $("#hour" + time).css("backgroundColor", "lightgreen");
    }
    else if (time === todayHour) {
      $("#hour" + time).css("backgroundColor", "rgb(255, 114, 118");
    }
    else {
      $("#hour" + time).css("backgroundColor", "lightgrey");
    }
  }
  
  

}

// upon button click, save text and hour time and display message to let user know every is saved
$(".time-block").on("click", ".saveBtn", function () {
  // save textarea text upon button click
  var text = $("textarea").val().trim();
  // save hour id upon button click
  var hour = $(this).parent(".time-block").attr("id");

  // save data into storage
  localStorage.setItem(hour, text);

  saveMessage();
});

var saveMessage = function () {
  // create span element and leave it on page for 5 seconds
  var pMessageEl = $("<span>")
    .addClass("saveMessage")
    .html(
      "Appoitment Added to<span class='red-text'> localStorage</span><i class='bi bi-check2'></i>"
    );

  // append as first child to container
  $(".container").prepend(pMessageEl);

  var saveInterval = setTimeout(function () {
    $(pMessageEl).remove();
  }, 5000) 
}

$("#hour9")
  .children(".description")
  .val(localStorage.getItem("hour9", "text"));
$("#hour10")
  .children(".description")
  .val(localStorage.getItem("hour10", "text"));
$("#hour11")
  .children(".description")
  .val(localStorage.getItem("hour11", "text"));
$("#hour12")
  .children(".description")
  .val(localStorage.getItem("hour12", "text"));
$("#hour13")
  .children(".description")
  .val(localStorage.getItem("hour13", "text"));
$("#hour14")
  .children(".description")
  .val(localStorage.getItem("hour14", "text"));
$("#hour15")
  .children(".description")
  .val(localStorage.getItem("hour15", "text"));
$("#hour16")
  .children(".description")
  .val(localStorage.getItem("hour16", "text"));
$("#hour17")
  .children(".description")
  .val(localStorage.getItem("hour17", "text"));

timeCompare();