document.addEventListener('DOMContentLoaded', () => {
    const horasInput = document.getElementById('horas');
    const minutosInput = document.getElementById('minutos');
    const segundosInput = document.getElementById('segundos');

    const iniciar = document.getElementById('start');
    const resetar = document.getElementById('reset');
    const pausar = document.getElementById('pause'); // Botão de pausa

    const hora = document.getElementById('hora');
    const minuto = document.getElementById('minuto');
    const segundo = document.getElementById('segundo');
    const milezimo = document.getElementById('milezimo');

    let ativo = false;
    let timer;
    let tempoRestante;

    function atualizarDisplay(tempo) {
        const horas = Math.floor(tempo / 3600);
        const minutos = Math.floor((tempo % 3600) / 60);
        const segundos = tempo % 60;
        hora.textContent = `${String(horas).padStart(2, '0')}`;
        minuto.textContent = `${String(minutos).padStart(2, '0')}`;
        segundo.textContent = `${String(segundos).padStart(2, '0')}`;
    }

    function comecar() {
        if (!ativo) {
            const horas = parseInt(horasInput.value) || 0;
            const minutos = parseInt(minutosInput.value) || 0;
            const segundos = parseInt(segundosInput.value) || 0;
            tempoRestante = horas * 3600 + minutos * 60 + segundos;
            atualizarDisplay(tempoRestante);

            if (tempoRestante > 0) {
                ativo = true;
                timer = setInterval(() => {
                    if (tempoRestante > 0) {
                        tempoRestante--;
                        atualizarDisplay(tempoRestante);
                    } else {
                        clearInterval(timer);
                        ativo = false;
                    }
                }, 1000);
            }
        }
    }

    function pausarTimer() {
        clearInterval(timer);
        ativo = false;
    }

    function resetarTimer() {
        clearInterval(timer);
        ativo = false;
        tempoRestante = 0;
        atualizarDisplay(tempoRestante);
        horasInput.value = '';
        minutosInput.value = '';
        segundosInput.value = '';
    }

    iniciar.addEventListener('click', comecar);
    pausar.addEventListener('click', pausarTimer);
    resetar.addEventListener('click', resetarTimer);
});
