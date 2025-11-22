const button = document.querySelector("button")
button.addEventListener("click", login)

async function login(event) {
    event.preventDefault()
    
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
   
   
    if ( email === "" || password === "" ) {
        alert("Por favor, não deixe de preencher todas as informações!")
        return
    }

    const user = {
     email,
     password
    }

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
   }).then(response => response.json())


// se existir um response.message significa que o usuário errou, portanto mostramos a mensagem do erro
   if (response.message) {
    alert(response.message)
    window.location.reload()
    return
   }
//se o Usúario acertar, guardamos o id e o nome no sessionStorage
   const { id, name} = response

   //JSON.stringify converte o projeto em JSON
   sessionStorage.setItem("user", JSON.stringify({id , name}))

   alert("Login realizado com sucesso!")

   window.location.href = "../index.html"
}