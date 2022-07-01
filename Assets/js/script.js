$(".time-block").on("click", ".saveBtn", function () {
  // save textarea text upon button click
  var text = $("textarea").val().trim()
  // save hour id upon button click
  var hour = $(this).parent(".time-block").attr("id");

  // save data into storage 
  localStorage.setItem(hour, text);

})

