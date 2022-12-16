    function googleTranslateElementInit()
    {
        new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
        );
    }




var conselhoAtual = "";
var novoConselho = "";


var corpoModal = document.getElementById("corpoConselho")
var divConselho = document.getElementById("conselho")
var modalTitulo = document.getElementById("adviceModalLabel")

var apiUrl=("https://api.adviceslip.com/advice")


function acharConselho(){
    fetch(apiUrl).then(
                        adviceChoosen =>   
                                {return adviceChoosen.json()}
                      )
                    .then(
                        json => {conselhoAtual = json.slip.advice;}
                         )
}
function trocarModalAle(){
    corpoModal.innerHTML='<h2>' + conselhoAtual + '</h2>'
}
async function preencherModalConselhoAleatorio(){
    await acharConselho();
    setTimeout(trocarModalAle, 1000);
}
function acharConselhoId(){
    let idEscolhido = document.getElementById("idCon").value
    newUrl = apiUrl+"/"+idEscolhido;
    fetch(newUrl).then(adviceChoosen => {return adviceChoosen.json()})
                    .then(json => { novoConselho = json.slip.advice;})
}
function trocarModalId(){

    corpoModal.innerHTML='<h2>' + novoConselho + '</h2>'
}
async function preencherModalConselhoPorId(){
    await acharConselhoId();
    setTimeout(trocarModalId, 1000);
}
function voltaDivCarregamento(){
    corpoModal.innerHTML='<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>'        
}

