(function(exports) {
  function SingleView(note = new Note) {
    this.note = note;
    this.text = note.text
  }

  SingleView.prototype.createString = function() {
    var string = '<div>' + this.text + '</div>'
    return string
  }

  exports.SingleView = SingleView
})(this)