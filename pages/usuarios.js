const main = document.querySelector("main")


async function buscarUsuarios() {
   const users = await fetch("http://localhost:3000").then((response) => response.json())
   
    users.map(user => {
     main.innerHTML += `
      <section>
       <h3>nome: ${user.name} </h3>
        <p>Idade: ${user.age} anos</p>
        <p>E-mail: ${user.email}</p>
     </section>
    `
    })
}

buscarUsuarios()