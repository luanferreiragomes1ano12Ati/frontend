const header = document.querySelector("header ul");

function init() {
    //converte o JSON para objeto e guarda na variável user
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    header.innerHTML += `
      <li>Usuário: ${user.name}</li>
      <li><button id="logout">Sair</button></li>
    `

    //adicionar o evento ao botão apenas se o usúarios estiverem logados
    const logoutButton = document.querySelector("#logout")
    logoutButton.addEventListener("click", logout)
    return
  }

  header.innerHTML += `
    <li>
      <a href="login.html">Login</a>
    </li>
  `;
}

init()

function logout () {
    //apagando o usuário do sessionStorege
sessionStorage.removeItem("user")
alert("Voçê deslogou. Até mais, Volte mais vezes!")
window.location.reload()
}
