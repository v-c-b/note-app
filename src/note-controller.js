$(document).ready(function() {
  $("#app").html("Howdy");


  (function(exports){
    var newNoteList = new noteList();
    newNoteList.createNote("Favourite drink: seltzer.");
    
    function createNoteRow(){
      this.htmlString = "<tr><td>";
      // htmlString += newNoteList.returnList().pop().returnText();
      // htmlString += "</td></tr>";
      //return "test";
    }
    exports.createNoteRow = createNoteRow;
  })(this);

  console.log(createNoteRow());
});