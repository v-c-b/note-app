$(document).ready(function() {
  $("#app").html("Note list");
});

// var newNoteList = new noteList();

function listenForHashChange() {
  window.addEventListener("hashchange", showNoteForCurrentPage)
};
listenForHashChange();

document.addEventListener("submit", function(event) {
  // console.log("Form submission intercepted");
  // console.log(event);
  // console.log(event.target[0].value);
  newNoteList.createNote(event.target[0].value);
  addLastNoteToTable();
  event.preventDefault();
}, false);
