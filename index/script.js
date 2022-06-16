let info = document.querySelector("#info")
let mostrarInfo = document.querySelector("#mostrarInfo")
info.addEventListener("click", ()=>{
    info.classList.add("d-none")
})

async function carregarDados(){
    const url = "https://swapi.dev/api/starships/"
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        console.log(dados.results)
        for(elementos of dados.results){
            
            const cardTitutlo = document.createElement("h5")
            cardTitutlo.classList.add("card-title")
            cardTitutlo.textContent = `${elementos.name}`

            const cardDescricao = document.createElement("p")
            cardDescricao.classList.add("card-text")
            cardDescricao.textContent = `${elementos.model}`

            info.appendChild(cardTitutlo)
            info.appendChild(cardDescricao)
           
        }
    } catch (error) {
        console.log("o seguinte erro ocorreu: ", error)
    }
}

carregarDados()