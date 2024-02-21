const searchInput = document.getElementById("search-input")
const resultsArtist = document.getElementById("result-artist")
const resultPlaylist = document.getElementById("cards-container")

function requestApi(searchTerm) {
  const url = `https://json-api-artists-js.vercel.app/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}
function displayResults(result) {
  const artistName = document.getElementById("artist-name")
  const artistImage = document.getElementById("artist-img")
  resultPlaylist.style.display = "none"

  result.forEach((element) => {
    artistName.innerText = element.name
    artistImage.src = element.urlImg
  })

  resultsArtist.classList.remove("hidden")
}
document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase()
  if (searchTerm === "") {
    resultPlaylist.style.display = "flex"
    resultsArtist.style.display = "none"
    return
  }
  resultPlaylist.style.display = "none"
  resultsArtist.style.display = "flex"

  requestApi(searchTerm)
})
document.addEventListener("DOMContentLoaded", function () {
  saudacaoDinamica()
})

function saudacaoDinamica() {
  var saudacaoElemento = document.querySelector(".greeting")
  var dataAtual = new Date()
  var horaAtual = dataAtual.getHours()

  var saudacao

  if (horaAtual >= 6 && horaAtual < 12) {
    saudacao = "Bom dia"
  } else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao = "Boa tarde"
  } else {
    saudacao = "Boa noite"
  }

  saudacaoElemento.textContent = saudacao
}
document.addEventListener("DOMContentLoaded", function () {
  exibirDataHorario()
  setInterval(exibirDataHorario, 1000)
})

function exibirDataHorario() {
  var hora = new Date().getHours();

  let saudacao;
  if (hora >= 5 && hora < 12) {
    saudacao = "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

   if (hora < 10) {
     hora = "0" + hora 
   }

  document.querySelector(".greeting").innerHTML = saudacao + `, agora são ${hora} horas`;
}
