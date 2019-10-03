$(document).ready(function() {
  $("#app").html("Howdy");
});

var newNoteList = new noteList();

(function(exports){
  newNoteList.createNote("Favourite drink: seltzer.");
  newNoteList.createNote("Favourite drink: Beer");


  function createNoteRow(index){
    this.htmlString = '<tr><td>';
    htmlString += '<a href=#notes/' + newNoteList.returnList()[index].returnID() + '>';
    htmlString += newNoteList.returnList()[index].returnText();
    htmlString += '<a/></td></tr>';
    return htmlString;
  };
  exports.createNoteRow = createNoteRow;
})(this);

function listenForHashChange() {
  window.addEventListener("hashchange", showNoteForCurrentPage)
};
listenForHashChange();

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  return location.hash.split("/")[1];
};

function showNote(note) {
  if (note != null) {
    document
    .getElementById("note to display")
    .innerHTML = newNoteList.returnList()[note].text;
  } else
  {document
  .getElementById("note to display")
  .innerHTML = '';
  }
};

document.addEventListener("submit", function(event) {
         console.log("Form submission intercepted");
         console.log(event);
         console.log(event.target[0].value);
         event.preventDefault();
}, false);
