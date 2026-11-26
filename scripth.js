const foreach = document.querySelector("#foreach")
const map = document.querySelector("#map")
const reduce = document.querySelector("#reduce")
const filter = document.querySelector("#filter")

const lista = document.querySelector("#lista-produtos")

foreach.addEventListener("click", () => {

    lista.innerHTML = ""

    menuOptions.forEach((produto) => {

        lista.innerHTML += `
            <li>
            <img 
                class="${produto.name === 'X-Salada' ? 'x-salada' : ''}"
                 src="${produto.src}" 
                 alt="${produto.name}"
            >
                <p>${produto.name}</p>
                <p class="item-price">R$ ${produto.price},00</p>
            </li>
        `
    })
})

map.addEventListener("click", () => {

    lista.innerHTML = ""

    const produtosComDesconto = menuOptions.map((produto) => {
        return {
            ...produto,
            price: produto.price * 0.90
        }
    })

    produtosComDesconto.forEach((produto) => {
        lista.innerHTML += `
         <li>
           <img 
                class="${produto.name === 'X-Salada' ? 'x-salada' : ''}"
                 src="${produto.src}" 
                 alt="${produto.name}"
            >
                <p>${produto.name}</p>
                <p class="item-price">R$ ${produto.price.toFixed(2)}</p>
            </li>
        `
    })
})

reduce.addEventListener("click", () => {

    lista.innerHTML = ""

    const somaDosProdutos = menuOptions.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual.price
    }, 0)

    lista.innerHTML = `
    <li>
                <p>Total dos produtos</p>
                <p class="item-price">R$ ${somaDosProdutos},00</p>
            </li>
    `
})

filter.addEventListener("click", () => {

    lista.innerHTML = ""

    const produtosVeganos = menuOptions.filter((produto) => {
        return produto.vegan === true
    })

    produtosVeganos.forEach((produto) => {
        lista.innerHTML += `
            <li>
           <img 
                class="${produto.name === 'X-Salada' ? 'x-salada' : ''}"
                src="${produto.src}" 
                alt="${produto.name}"
            >
                <p>${produto.name}</p>
                <p class="item-price">R$ ${produto.price},00</p>
            </li>
        `
    })
})



