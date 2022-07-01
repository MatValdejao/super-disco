// need to select div with class description
tasks = {
  hour9: "",
  hour10: "",
  hour11: "",
  hour12: "",
  hour13: "",
  hour14: "",
  hour15: "",
  hour16: "",
  hour17: "",
};

// need to load items from local storage
var loadItems = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
          hour9: "",
          hour10: "",
          hour11: "",
          hour12: "",
          hour13: "",
          hour14: "",
          hour15: "",
          hour16: "",
          hour17: ""
        };
    }

    $.each(tasks,function () {
        var time = $(".saveBtn").parent(".time-block").attr("id");
        console.log(time)
    })
}

var saveTasks = function () {
  // save into local storage
  tasks = localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".time-block").on("click", ".saveBtn", function () {
  // select textarea
  var text = $("textarea").val().trim();

  // find closest .time-block and retrurn id value
  var time = $(this).parent(".time-block").attr("id");

  tasks[time] = text;
  // take textarea and save to local storage and convert into p element
  saveTasks();
});







loadItems();