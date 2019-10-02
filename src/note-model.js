(function(exports) {
  function note(text, id) {
    this.text = text
    this.id = id
  };
  note.prototype.returnText = function() {
    return this.text.slice(0,20)
  };

  note.prototype.returnID = function() {
    return this.id
  };
  exports.note = note;
})(this);
