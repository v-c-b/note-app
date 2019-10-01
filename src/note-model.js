(function(exports) {
  function note(text) {
    this.text = text
  }
  note.prototype.returnText = function() {
    return this.text
  }
  exports.note = note;
})(this);
