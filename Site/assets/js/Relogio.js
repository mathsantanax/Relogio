const Zones = {
    'America/Sao_Paulo': 'pt-BR',
    'America/New_York': 'en-US',
    'Europe/Lisbon': 'pt-PT',
    'Asia/Tokyo': 'ja-JP',
    'Australia/Sydney': 'en-US'
};

const containerPaises = document.querySelector(".container-paises");

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

function atualizarHora() {
    const elementoHora = document.getElementById('horas-Digital');
    if (elementoHora) {
        elementoHora.textContent = ObterHora(Zones['America/Sao_Paulo'], 'America/Sao_Paulo');
    }

    document.querySelectorAll('.card-paises').forEach(card => {
        const zone = card.getAttribute('data-zone');
        const locale = Zones[zone];
        const timeDisplay = card.querySelector('.time-display');
        if (timeDisplay) {
            timeDisplay.textContent = ObterHora(locale, zone);
        }
    });
}

setInterval(atualizarHora, 1000);
criarCard();
atualizarHora();