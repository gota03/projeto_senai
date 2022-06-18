let card1 = document.querySelector("#card1")
let btnAdicionar = document.querySelector("#mostrarInfo")
let btnRemover = document.querySelector("#removerInfo")

async function carregarDados(){
    const url = "https://swapi.dev/api/starships/"
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        console.log(dados.results)
        for(elementos of dados.results){

            const div1 = document.createElement("div")
            div1.classList.add("row")
            div1.classList.add("row-cols-6")
            div1.classList.add("row-cols-md-1")
            div1.classList.add("g-4")

            const div2 = document.createElement("div")
            div2.classList.add("col-6")

            const div3 = document.createElement("div")
            div3.classList.add("card")
            div3.classList.add("card-body")
        
            const cardTitulo = document.createElement("h5")
            cardTitulo.classList.add("card-title")
            cardTitulo.classList.add("text-center")
            cardTitulo.textContent = `${elementos.name}`

            const cardTexto = document.createElement("p")
            cardTexto.classList.add("card-text")
            cardTexto.classList.add("text-center")
            cardTexto.textContent = `${elementos.model}`

            div1.appendChild(div2)
            div2.appendChild(div3)
            div3.appendChild(cardTitulo)
            div3.appendChild(cardTexto)
            card1.appendChild(div1)

        }
    } catch (error) {
        console.log("o seguinte erro ocorreu: ", error)
    }
}

//carregarDados()

async function mostrarDados(){
    const url = "https://swapi.dev/api/starships/"
    try {
            const resultado = await fetch(url)
            const dados = await resultado.json()
            //console.log(dados.results)
            let elementos = dados.results[0]
            console.log(elementos)
            
            const div1 = document.createElement("div")
            div1.classList.add("row")
            div1.classList.add("row-cols-6")
            div1.classList.add("row-cols-md-1")
            div1.classList.add("g-4")

            const div2 = document.createElement("div")
            div2.classList.add("col-6")

            const div3 = document.createElement("div")
            div3.classList.add("card")
            div3.classList.add("card-body")
        
            const cardTitulo = document.createElement("h5")
            cardTitulo.classList.add("card-title")
            cardTitulo.classList.add("text-center")
            cardTitulo.textContent = `${elementos.name}`

            const cardTexto = document.createElement("p")
            cardTexto.classList.add("card-text")
            cardTexto.classList.add("text-center")
            cardTexto.textContent = `${elementos.model}`

            div1.appendChild(div2)
            div2.appendChild(div3)
            div3.appendChild(cardTitulo)
            div3.appendChild(cardTexto)
            card1.appendChild(div1)
                       
    } catch (error) {
        console.log("o seguinte erro ocorreu: ", error)
    }
}

async function removerDados(){
    const url = "https://swapi.dev/api/starships/"
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        let cont = dados.results
        cont--
                const div1 = document.createElement("div")
                    div1.classList.remove("row")
                    div1.classList.remove("row-cols-6")
                    div1.classList.remove("row-cols-md-1")
                    div1.classList.remove("g-4")

                    const div2 = document.createElement("div")
                    div2.classList.remove("col-6")

                    const div3 = document.createElement("div")
                    div3.classList.remove("card")
                    div3.classList.remove("card-body")
        
                    const cardTitulo = document.createElement("h5")
                    cardTitulo.classList.remove("card-title")
                    cardTitulo.classList.remove("text-center")
                    cardTitulo.textContent = `${elementos.name}`

                    const cardTexto = document.createElement("p")
                    cardTexto.classList.remove("card-text")
                    cardTexto.classList.remove("text-center")
                    cardTexto.textContent = `${elementos.model}`
        
        
     } catch (error) {
        console.log(error)
    }
}

btnAdicionar.addEventListener("click", mostrarDados)

btnRemover.addEventListener("click", removerDados)
