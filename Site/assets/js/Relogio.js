const timeZones = [
    'America/Sao_Paulo',
    'America/New_York',
    'Lisboa/Portugal',
    'Asia/Tokyo',
    'Australia/Sydney'
]

timeZones.forEach(element => function(){
    console.log(element);
});



function obterHoraDeBrasilia() {
    // Obter a data e hora atual no fuso horário de Brasília
    const dataBrasilia = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return dataBrasilia;
}



function obterHoraDePortugal() {
    // Obter a data e hora atual no fuso horário de Brasília
    const dataBrasilia = new Date().toLocaleString('pt-BR', {
        timeZone: 'Lisboa/Portugal',
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

const divRelogio = document.getElementsByClassName('card-paises');

console.log(divRelogio[0].children[1].textContent);

console.log(timeZones.length);

    

setInterval(atualizarHora, 1000);

atualizarHora();