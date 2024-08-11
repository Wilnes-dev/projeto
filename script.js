function toggleMode() {
  const html = document.documentElement //primeira instrução - estou pegando o html
  html.classList.toggle("light") // segunda instrução - estou fazendo a troca das classes

  /* if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
   html.classList.add('light')
  } a função "toggle" (em cima) já faz tudo o que está aqui. Ver no caderno a explicação do "if". Para trocar a imagem vamos utilizar o "if" tambem, entao vamos copiar a primeira linha e o "else" */

  // terceira instrução - pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light-w.png")
    img.setAttribute(
      "alt",
      "foto de wilnes sorrindo de frente com óculos de grau, usando blusa preta e um fundo branco"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-w.png")
    img.setAttribute(
      "alt",
      "foto de wilnes sorrindo de lado, usando blusa branca e fundo com rio e barcos."
    )
  }
}
