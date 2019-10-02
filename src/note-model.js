(function(exports) {
  function note(text) {
    this.text = text
  }
  note.prototype.returnText = function() {
    return this.text.slice(0,20)
  }
  exports.note = note;
})(this);
