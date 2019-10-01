(function(exports) {
  function note(text) {
    this.text = text
  }
  note.prototype.return_text = function() {
    return this.text
  }
  exports.note = note;
})(this);
