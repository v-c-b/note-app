function testNoteListOnSite(notelist) {
  notelist.createNote('Favourite drink: seltzer');
  notelist.createNote('Favourite drink: seltzer');
  addLastNoteToTable();
  addLastNoteToTable();
  $(document).ready(function() {
    if(document.getElementById('noteTable').innerHTML !== '<tr><td><a href="#notes/1">Favourite drink: sel</a><a></a></td></tr><tr><td><a href="#notes/1">Favourite drink: sel</a><a></a></td></tr>') {
      console.log("Shortened note not on site as expected!");
      console.log(document.getElementById('noteTable').innerHTML)
    }
    else { console.log("Shortened note on site as expected") }
  })
};

function testSubmitNote() {
  document.getElementById("text").value = '123456'
  var event = new Event('submit')
  document.getElementsByName("submitButton")[0].dispatchEvent(event)
  // document.getElementsByName("noteform")[0].submit()
  // console.log(document.getElementsByName("noteform"));
  $(document).ready(function() {
    if(document.getElementById('noteTable').innerHTML !== '<tr><td><a href="#notes/1">Favourite drink: sel</a><a></a></td></tr><tr><td><a href="#notes/1">Favourite drink: sel</a><a></a></td></tr>') {
      console.log("Shortened note not on site as expected!");
      console.log(document.getElementById('noteTable').innerHTML)
    }
    else { console.log("Shortened note on site as expected") }
  })
}



function testHashChange() {
  document.location.hash = '#notes/1';
  $(document).ready(function() {
    if(document.getElementById('note to display').innerHTML !== 'Favourite drink: seltzer') {
      console.log("Full note text not displayed as expected");
      console.log(document.getElementById('note to display').innerHTML);
    }
    else { console.log("Full note text displayed as expected") }
    document.location.hash = '';
    clearNoteTable();
  });
};
