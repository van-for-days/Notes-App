(function testInsert () {
  var fakeDiv = {
    innerHTML: "" 
  }

  var fakeDocument = {
    getElementById: function() {
      return fakeDiv
    }
  }

  var noteController = new NoteController(fakeDocument)
  noteController.addnote('testOne')
  noteController.insert('hello')
  assert.isTrue(fakeDiv.innerHTML.includes('hello'))
})();

