var loadedGame = document.createElement("script");
loadedGame.src = `Games/${sessionStorage.getItem("loadedGame")}`
document.head.appendChild(loadedGame);

function loadNewGame( filename) {
  sessionStorage.setItem("loadedGame", fileName)
  location.reload()
}
