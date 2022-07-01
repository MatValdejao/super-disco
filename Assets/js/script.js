// need to select div with class description
tasks = [];

// need to 




$(".saveBtn").on("click", function () {
    var text = $("textarea").val().trim();
    // take textarea and save to local storage and convert into p element
    localStorage.setItem("tasks", tasks)
})

