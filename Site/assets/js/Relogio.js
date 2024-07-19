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

function atualizarHora() {
    const elementoHora = document.getElementById('horas-Digital');
    elementoHora.textContent = obterHoraDeBrasilia();
}

setInterval(atualizarHora, 1000);

atualizarHora();