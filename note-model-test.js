(function testTextStoredInNote() {
  var note = new Note("Hello");
  assert.isTrue(note.text === "Hello");

})();

(function testReturnsText() {
  var note = new Note("Hi");
  assert.isTrue(note.getText() === "Hi");
})();