function noteController(){
}

noteController.prototype.insert = function(text) {
  var elem = document.getElementById("app")
  elem.innerHTML = text

}