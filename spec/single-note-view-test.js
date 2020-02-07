(function textInitialisation() {
  var singleView = new SingleView()
  assert.isTrue(singleView.note instanceof Note)
})();

(function testCreateString() {
  var note = new Note('Vish smells');
  var singleView = new SingleView(note);
  assert.isTrue(singleView.createString() === '<div>Vish smells</div>');
})()
