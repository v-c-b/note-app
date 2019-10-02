$(document).ready(function() {
  $("#app").html("Howdy");
});

(function(exports){
  var newNoteList = new noteList();
  newNoteList.createNote("Favourite drink: seltzer.");
  newNoteList.createNote("Favourite drink: Beer");


  function createNoteRow(){
    this.htmlString = '<tr><td>';
    htmlString += '<a href=#notes/' + newNoteList.returnList()[newNoteList.returnList().length - 1].returnID() + '>';
    htmlString += newNoteList.returnList().pop().returnText();
    htmlString += '<a/></td></tr>';
    return htmlString;
  }
  exports.createNoteRow = createNoteRow;
})(this);
