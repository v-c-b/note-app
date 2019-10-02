function testNoteListOnSite() {
  if(document.getElementById('noteTable').innerHTML !== '<tr><td><a href="#notes/0">Favourite drink: sel</a><a></a></td></tr><tr><td><a href="#notes/1">Favourite drink: Bee</a><a></a></td></tr>') {
    console.log("Note not on site as expected!");
    console.log(document.getElementById('noteTable').innerHTML)
  }
  else { console.log("On site as expected") }
}
