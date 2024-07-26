const Zones = {
    'America/Sao_Paulo': 'pt-BR',
    'America/New_York': 'en-US',
    'Europe/Lisbon': 'pt-PT',
    'Asia/Tokyo': 'ja-JP',
    'Australia/Sydney': 'en-US'
};

const imagensPaises = {
    'America/Sao_Paulo': 'assets/img/sao_paulo.jpg',
    'America/New_York': 'assets/img/new_york.jpg',
    'Europe/Lisbon': 'assets/img/lisbon.jpg',
    'Asia/Tokyo': 'assets/img/tokyo.jpg',
    'Australia/Sydney': 'assets/img/sydney.jpg'
}

const containerPaises = document.querySelector(".container-paises");

const relogioAnalogico = document.querySelector(".card-relogio-analogico");
const seletorHora = document.querySelector(".hora");
const seletorMinuto = document.querySelector(".minuto");
const seletorSegundo = document.querySelector(".segundo");

const setaDireita = document.getElementById('seta-direita');
const setaEsquerda = document.getElementById('seta-esquerda'); 

const cidadePais = document.getElementById('cidade-pais');
const horasDigital = document.getElementById('horas-digital');
const dataAtual = document.getElementById('data-atual');

let indiceRelogioAtual = 0;
const zonas = Object.keys(Zones);

// cria os cards de horas em baixo
function criarCard() {
    for (const [zone, locale] of Object.entries(Zones)) {
        if (containerPaises) {
            var cardPaises = document.createElement("div");
            cardPaises.className = "card-paises";
            cardPaises.setAttribute('data-zone', zone);

            if (cardPaises) {
                var h3 = document.createElement("h3");
                var cidadesPaises = zone.split("/");

                h3.textContent = cidadesPaises[1].split("_").join(" ");

                var h2 = document.createElement("h2");
                h2.className = "time-display";
                h2.innerHTML = ObterHora(locale, zone);

                cardPaises.appendChild(h3);
                cardPaises.appendChild(h2);
            }
            containerPaises.appendChild(cardPaises);
        } else {
            console.log("Elemento com a classe 'container-paises' não encontrado.");
        }
    }
}

// pegar hora passando os parametros
function ObterHora(regiao, pais){
    const Hora = new Date().toLocaleString(regiao, {
        timeZone: pais,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return Hora;
}


// função para o relogio analogico funcionar

function AtualizarRelogioAnalogico(regiao, pais) {
  
    const date = new Date();
  
    const Horas = { timeZone: pais, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}
    const timeString = date.toLocaleString(regiao, Horas);
    const [hours, minutes, seconds] = timeString.split(':').map(part => parseInt(part, 10));
  
    const hourRotation = (hours % 12 + minutes / 60) * 30 - 360;
    const minuteRotation = minutes * 6 - 360;
    const secondRotation = seconds * 6 - 360;
  
    seletorHora.style.transform = `rotate(${hourRotation}deg)`;
    seletorHora.style.transition = 'transform 0.5s ease-in-out';
  
    seletorMinuto.style.transform = `rotate(${minuteRotation}deg)`;
    seletorMinuto.style.transition = 'transform 0.5s ease-in-out';
  
    seletorSegundo.style.transform = `rotate(${secondRotation}deg)`;
    seletorSegundo.style.transition = 'transform 0.1s ease-in-out';
  }
  
// função para atualizar a hora sempre
  function atualizarHora() {
    const zonaAtual = zonas[indiceRelogioAtual];
    const regiaoAtual = Zones[zonaAtual];
    const cidadesPaises = zonaAtual.split("/");

    horasDigital.textContent = ObterHora(regiaoAtual, zonaAtual);
    AtualizarRelogioAnalogico(regiaoAtual, zonaAtual);

    cidadePais.textContent = `${cidadesPaises[1].split("_").join(" ")}, ${cidadesPaises[0]}`;
    dataAtual.textContent = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.querySelectorAll('.card-paises').forEach(card => {
                 const zone = card.getAttribute('data-zone');
                 const locale = Zones[zone];
                 const timeDisplay = card.querySelector('.time-display');
                 if (timeDisplay) {
                     timeDisplay.textContent = ObterHora(locale, zone);
                 }
             });

    const imageUrl = imagensPaises[zonaAtual];
    if(imageUrl){
        document.querySelector('.imagem-pais').style.backgroundImage = `url(${imageUrl})`;
        document.querySelector('.imagem-pais').style.transition = '.2s ease-in-out';
    }
}

// funcionamento das setas
function mudarRelogio(direcao) {
    indiceRelogioAtual = (indiceRelogioAtual + direcao + zonas.length) % zonas.length;
    atualizarHora();
}

setaEsquerda.addEventListener('click', () => mudarRelogio(-1));
setaDireita.addEventListener('click', () => mudarRelogio(1));

setInterval(atualizarHora, 1000); // atualiza a cada 1 segundo
criarCard(); // cria os card de paises em baixo 
atualizarHora(); // atualiza a hora assim que abre o site