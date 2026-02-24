var loadedGame = document.createElement("script");
loadedGame.src = "Games/Pong.js"
document.head.appendChild(loadedGame);

function loadNewGame( filename) {
  sessionStorage.setItem("loadedGame", fileName)
  location.reload()
}
