const timeZones = [
    'America/Sao_Paulo',
    'America/New_York',
    'Lisboa/Portugal',
    'Asia/Tokyo',
    'Australia/Sydney'
];

const containerPaises = document.querySelector(".container-paises");


function criarCard() {
    if(containerPaises)
    {
        for(var i = 0; i < timeZones.length; i++)
        {
            var cardPaises = document.createElement("div");
            cardPaises.className = "card-paises";
                    
            if(cardPaises)
            {
                var h3 = document.createElement("h3");
                var cidadesPaises = timeZones[i].split("/");
                
                h3.textContent = cidadesPaises.join(", ").split("_").join(" ");
                        
                var h2 = document.createElement("h2");
                var hora = ObterHora(timeZones[i]);
                console.log(hora);
                h2.textContent = hora;

                cardPaises.appendChild(h3);
                cardPaises.appendChild(h2);
            }
            containerPaises.appendChild(cardPaises)
        }   
    }
    else {
        console.log("Elemento com a classe 'container-paises' não encontrado.");
    }

}

function ObterHora(regiao,string){
    const Hora = new Date().toLocaleDateString(regiao, {
        timeZone: string,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return Hora;
}


function obterHoraDeBrasilia() {
    const dataBrasilia = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return dataBrasilia;
}

function atualizarHora() {
    const elementoHora = document.getElementById('horas-Digital');
    elementoHora.textContent = obterHoraDeBrasilia();
}
    

setInterval(atualizarHora, 1000);
// criarCard();
atualizarHora();

console.log(ObterHora("ja-JP", "Asia/Tokyo"));