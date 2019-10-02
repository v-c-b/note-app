$(document).ready(function() {
  $("#app").html("Howdy");
});

var newNoteList = new noteList();

(function(exports){
  newNoteList.createNote("Favourite drink: seltzer.");
  newNoteList.createNote("Favourite drink: Beer");


  function createNoteRow(){
    this.htmlString = '<tr><td>';
    htmlString += '<a href=#notes/' + newNoteList.returnList()[newNoteList.returnList().length - 1].returnID() + '>';
    htmlString += newNoteList.returnList()[newNoteList.returnList().length - 1].returnText();
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
  console.log(location.hash.split("/")[1]);
  return location.hash.split("/")[1];
};

function showNote(note) {
  console.log(newNoteList.returnList()[note].text)
  document
    .getElementById("note to display")
    .innerHTML = newNoteList.returnList()[note].text;
};