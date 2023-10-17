
const maquinas=document.querySelectorAll('.link');
const maquina= {
    "Mini ME": { "page":"modal", "nome":"Mini ME", "preço": "R$ 480,00","capsulas": "Dolce Gusto" },
    "Genio S Plus": { "page":"modal2", "nome":"Genio S Plus", "preço": "R$ 530,00","capsulas": "Dolce Gusto" },
    "Inissia": { "page":"modal3", "nome":"Inissia", "preço": "R$ 500,00","capsulas": "Nespresso" },
    "LOV": { "page":"modal4", "nome":"LOV", "preço": "R$ 400,00","capsulas": "Três Corações" }
}

// function criaModal(event){
//     window.open('../html/modal.html',"Tipo","location=center,status=no,width=250,height=200");
//     maquinaSelecionada=maquina[event.target.innerHTML];

//     let modal = document.querySelector('.modal')
//     modal.innerHTML= `<h1 class="title">${maquina.nome}</h1>
//     <img src="" class="img" alt="imagem da cafeteira selecionada">
//     <p class="capsula">${maquina.capsulas}</p>
//     <p class="Preço">${maquina.preço}</p>
//     <button class="fechar">Fechar</button>`  

// }

function entraModal(event){
    
    maquinaSelecionada=maquina[event.target.innerHTML];
    window.open(`../html/${maquinaSelecionada.page}.html`,"Tipo","location=center,status=no,width=250,height=300");
    
}

maquinas.forEach(maquina=>maquina.addEventListener("click", entraModal))