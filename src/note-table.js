(function(exports){
  // newNoteList.createNote("Favourite drink: seltzer.");
  // newNoteList.createNote("Favourite drink: Beer");
  function createNoteRow(index){
    this.htmlString = '<tr><td>';
    htmlString += '<a href=#notes/' + newNoteList.returnList()[index].returnID() + '>';
    htmlString += newNoteList.returnList()[index].returnText();
    htmlString += '<a/></td></tr>';
    return htmlString
  };
  exports.createNoteRow = createNoteRow;
})(this);

function addLastNoteToTable() {
  $("#noteTable").append(createNoteRow(newNoteList.returnList().length - 1))
}

function clearNoteTable() {
  $("#noteTable tr").remove();
  document.getElementById("note to display").innerHTML = '';
  newNoteList.idCounter = 0
  newNoteList.list = []
}

//
// <!-- <script>
//   $(document).ready(function() {
//     for (i=0; i< newNoteList.returnList().length; i++) {
//       $("#noteTable").append(createNoteRow(i));
//     }
//     testNoteListOnSite();
//     testHashChange();
//   });
// </script> -->
