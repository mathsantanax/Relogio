function getBrasiliaTime() {
    // Cria um objeto Date com a hora atual em UTC
    let now = new Date();

    // Converte a hora atual para o fuso horário de Brasília (GMT-3)
    let brasiliaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));

    return brasiliaTime;
}

// Exemplo de uso
let horaDeBrasilia = getBrasiliaTime();
console.log(horaDeBrasilia.toString());


document.addEventListener('DOMContentLoaded', function(){
    getBrasiliaTime()
});