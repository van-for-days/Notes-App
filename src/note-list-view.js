(function(exports) {
  function ViewNotes(notelist) {
    // console.log(notes.notes)
    // var notes = notes.notes.map(function(currentValue) { return currentValue.text
    // })
    this.noteList = notelist
  }

  ViewNotes.prototype.shownotes = function() {
    var cleanstring = this.noteList.notes.map(function(currentValue){return currentValue.text}).join("</div></li><li><div>")
    return `<ul><li><div>${cleanstring}</div></li></ul>`
  }



  

  


  exports.ViewNotes = ViewNotes
})(this)

