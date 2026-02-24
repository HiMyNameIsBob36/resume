var loadedGame = document.createElement("script");
if (sessionStorage.getItem("loadedGame") !=null)
  loadedGame.src = `Games/${sessionStorage.getItem("loadedGame")}`
else {
  loadedGame.src = 

} 
document.head.appendChild(loadedGame);

function loadNewGame( filename) {
  sessionStorage.setItem("loadedGame", fileName)
  location.reload()
}
