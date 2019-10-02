(function(exports) {
  function noteList() {
    this.list = []
    this.idCounter = 0
  }
  noteList.prototype.returnList= function() {
    return this.list
  }
  noteList.prototype.createNote = function(text) {
    this.list.push(new note(text, this.idCounter))
    this.idCounter += 1
  }
  exports.noteList = noteList;
})(this);
