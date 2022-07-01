$("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do" ));

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
  // check whether span element already exits and delete if so
  if ($("header").children("span") != undefined) {
    $("header").children("span").remove();
  }
  // create span element
  var pMessageEl = $("<span>").addClass("saveMessage").html("Appoitment Added to<span class='red-text'> localStorage</span><i class='bi bi-check2'></i>");

  // append as first child to container
  $(".container").prepend(pMessageEl);
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
