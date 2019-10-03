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
  { document
    .getElementById("note to display")
    .innerHTML = '';
  }
};
