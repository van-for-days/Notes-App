(function(exports) {

  function NoteController(doc = document) {
    this.notemodel = new ViewNotes()
    this.notelist = new NoteList()
    this.document = doc
  }

NoteController.prototype.insert = function(text) {
  var elem = this.document.getElementById("app")
  elem.innerHTML = text
}

NoteController.prototype.addnote = function(text){ 
  this.notelist.createNote(text)
}

NoteController.prototype.view = function() {
  return this.notemodel.shownotes()
}

exports.NoteController = NoteController
})(this);





