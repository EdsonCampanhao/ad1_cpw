const capsulas={"Lor Forza":{"nome":"Lor Forza","quantidade":10,"preco":"R$ 21,00","img":"../Imagens/CapLorNespreso_10_Forza.jpg"},
               "Três cor. intenso":{"nome":"Três cor. intenso","quantidade":10,"preco":"R$ 20,00","img":"../Imagens/CapTresCoracoesNespreso_10_Intenso.jpg"},
               "Forza / Vibrante":{"nome":"Forza / Vibrante","quantidade":30,"preco":"R$ 44,00","img":"../Imagens/CapTresCoracoes_30_ForzaVibrante.jpg"},
               "Intenso":{"nome":"Intenso","quantidade":10,"preco":"R$ 19,00","img":"../Imagens/CapDolceGusto_10_Intenso.jpg"},
               "Espresso":{"nome":"Espresso","quantidade":10,"preco":"R$ 18,00","img":"../Imagens/CapDolceGusto_10_Espresso.jpg"}
                
}


const capsulasLink=document.querySelectorAll('.link');

function exibeDescricao(event){

    capsulaSelecionada=capsulas[event.target.innerHTML];
    document.querySelector('.descricao').innerHTML=`<h1>${capsulaSelecionada.nome}</h1>
    <img src="${capsulaSelecionada.img}" alt="">
    <p>QTD: ${capsulaSelecionada.quantidade} </p>
    <p>Preço: <span class="preco">${capsulaSelecionada.preco}</span></p>`

  
}

capsulasLink.forEach(capsula=>capsula.addEventListener("click", exibeDescricao))
