(function(exports) {
  function noteList() {
    this.list = []
  }
  noteList.prototype.returnList= function() {
    return this.list
  }
  noteList.prototype.createNote = function(text) {
    this.list.push(new note(text))
  }
  exports.noteList = noteList;
})(this);
