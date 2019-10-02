function testNoteListOnSite() {
  if(document.getElementById('noteTable').innerHTML !== "<tr><td>Favourite drink: Bee</td></tr><tr><td>Favourite drink: sel</td></tr>") {
    console.log("Note not on site as expected!");
    console.log(document.getElementById('noteTable').innerHTML)
  }
  else { console.log("On site as expected")
  console.log(document.getElementById('noteTable').innerHTML)

}
}
