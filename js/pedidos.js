
let dataBase = {
    "maquinas": {
        "Mini ME": 480.00,
        "Genio S Plus": 530.00,
        "Inissia": 500.00,
        "LOV": 400.00
    },
    "capsulas": {
        "Espresso": 18.00,
        "Intenso": 19.00,
        "Forza / Vibrante": 44.00,
        "Três cor. intenso": 20.00,
        "Lor Forza": 21.00
    },
    "pedido": '',
    "valorTotal": ''
}

const form = document.getElementById('form')
const quantidadeMaquinas = document.getElementById('QTD_maquinas')
const quantidadeCapsulas = document.getElementById('QTD_capsulas')
const capsulas = document.getElementById('capsulas')
const maquinas = document.getElementById('maquinas')
const botaoIncluir = document.getElementById('incluirProdutos')
const valorParcial = document.getElementById('valorParcial')
const valorTotal = document.getElementById('valorTotal')
const botaoEnviar = document.getElementById('submit')


function calculaValorCompra(tipoProduto, produto, quantidade) {
    if (produto.value == '') {
        return alertaProdutosVazios(quantidade)
    }

    // console.log(produtos)
    let valor = parseFloat(dataBase[tipoProduto][produto.value]) * parseInt(quantidade.value)
    console.log(valor)

    valorParcial.value =  valor
}
function alertaProdutosVazios(quantidadeSemTexto) {
    alert('preencha o campo de produto')
    quantidadeSemTexto.value = ''
}
function resetaValorMudado(tipoProduto) {
        
    if (tipoProduto == 'maquinas') {
        capsulas.selectedIndex = 0
    }else if (tipoProduto == 'capsulas') {
        maquinas.selectedIndex = 0
    }   
        valorParcial.value = 0
        quantidadeMaquinas.value=''
        quantidadeCapsulas.value=''
}
function incluirProdutos(event) {
    event.preventDefault()
    let produtos = [maquinas, capsulas]
    let boxPedidos = document.getElementById('boxPedidos')
    let quantidade = produto => produto.parentElement.nextElementSibling.children[1].value
    produtos.forEach(produto => {
        if (quantidade(produto) == '' & produto.value != '') {
            return alert('por favor digite a quantidade!')
        }
        else if (produto.value != '') {
            boxPedidos.textContent = boxPedidos.textContent + `${produto.value}: ${produto.parentElement.nextElementSibling.children[1].value} \n`
            produto.selectedIndex = 0
            console.log(produto)
            produto.parentElement.nextElementSibling.children[1].value = ''
            valorTotal.value = parseFloat(valorTotal.value) + parseFloat(valorParcial.value)
            valorParcial.value = 0
        }

    });
    dataBase.pedido = boxPedidos.textContent
}
function enviarFormulario(event) {
    if (valorTotal.value == 0) {
        event.preventDefault()
        return alert('selecione pelo menos 1 produto!')
    }
}

quantidadeCapsulas.addEventListener("click", () => { calculaValorCompra('capsulas', capsulas, quantidadeCapsulas) })
quantidadeMaquinas.addEventListener("click", () => { calculaValorCompra('maquinas', maquinas, quantidadeMaquinas) })

maquinas.addEventListener('click', () => { resetaValorMudado('maquinas') })
capsulas.addEventListener('click', () => { resetaValorMudado('capsulas') })

// quantidadeMaquinas.addEventListener('click',()=>{resetaQTD('maquinas', maquinas, quantidadeMaquinas)})
// quantidadeCapsulas.addEventListener("click", () => {resetaQTD('capsulas', capsulas, quantidadeCapsulas) })


// botaoIncluir.addEventListener('click', incluirProdutos)
botaoEnviar.addEventListener('click', (event) => { enviarFormulario(event) })

