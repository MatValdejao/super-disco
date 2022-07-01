$(".time-block").on("click", ".saveBtn", function () {
  // save textarea text upon button click
  var text = $("textarea").val().trim()
  // save hour id upon button click
  var hour = $(this).parent(".time-block").attr("id");

  // save data into storage 
  localStorage.setItem(hour, text);

})


$("#hour9").children(".description").val(localStorage.getItem("hour9", "text"));
$("#hour10").children(".description").val(localStorage.getItem("hour10", "text"));
$("#hour11").children(".description").val(localStorage.getItem("hour11", "text"));
$("#hour12").children(".description").val(localStorage.getItem("hour12", "text"));
$("#hour13").children(".description").val(localStorage.getItem("hour13", "text"));
$("#hour14").children(".description").val(localStorage.getItem("hour14", "text"));
$("#hour15").children(".description").val(localStorage.getItem("hour15", "text"));
$("#hour16").children(".description").val(localStorage.getItem("hour16", "text"));
$("#hour17").children(".description").val(localStorage.getItem("hour17", "text"));

