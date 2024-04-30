const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll (".aba-conteudo");

for (let i = 0; i<botoes.length; i++){
    botoes[i].onclick= function (){
        botoes [i].classList.add("ativo")
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoobjetivo1 = new Date ("2024-12-01T23:59:59");
const tempoobjetivo2 = new Date ("2024-12-01T23:59:59");
const tempoobjetivo3 = new Date ("2024-12-01T23:59:59");
const tempoobjetivo4 = new Date ("2024-12-01T23:59:59");

function calculaTempo(tempoobjetivo1){
    let tempoAtual = new Date ();
    contadores[0].textContent =tempoobjetivo1 - tempoAtual;
    let segundos = Math.floor(tempofinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor (minutos / 60);
    let dis = Math.floor (horas / 24);
       
       segundos %= 60;
       minutos %= 60;
       horas %= 24;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}    

