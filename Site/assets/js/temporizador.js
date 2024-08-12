document.addEventListener('DOMContentLoaded', () => {
    const horasInput = document.getElementById('horas');
    const minutosInput = document.getElementById('minutos');
    const segundosInput = document.getElementById('segundos');
    const inputTemp = document.querySelector('.inputs-temp');

    const startPause = document.getElementById('start-pause');
    const resetar = document.getElementById('reset');

    const hora = document.getElementById('hora');
    const minuto = document.getElementById('minuto');
    const segundo = document.getElementById('segundo');
    const milezimo = document.getElementById('milezimo');

    let ativo = false;
    let timer;
    let tempoRestante;
    let tempoInicial;

    // função para atualizar o display com o tempo
    function atualizarDisplay(tempo) {
        const horas = Math.floor(tempo / 3600000);
        const minutos = Math.floor((tempo % 3600000) / 60000);
        const segundos = Math.floor((tempo % 60000) / 1000);
        const milissegundos = tempo % 1000;
        hora.textContent = `${String(horas).padStart(2, '0')}`;
        minuto.textContent = `${String(minutos).padStart(2, '0')}`;
        segundo.textContent = `${String(segundos).padStart(2, '0')}`;
        milezimo.textContent = `${String(milissegundos).padStart(3, '0')}`;
    }


    // função para iniciar o contagem
    function comecar() {
        const horas = parseInt(horasInput.value) || 0;
        const minutos = parseInt(minutosInput.value) || 0;
        const segundos = parseInt(segundosInput.value) || 0;
        tempoInicial = horas * 3600000 + minutos * 60000 + segundos * 1000;
        tempoRestante = tempoInicial;
        atualizarDisplay(tempoRestante);
        esconderInputs()

        if (tempoRestante > 0) {
            ativo = true;
            timer = setInterval(() => {
                if (tempoRestante > 0) {
                    tempoRestante -= 10; // Atualiza a cada 10 milissegundos
                    atualizarDisplay(tempoRestante);
                } else {
                    clearInterval(timer);
                    ativo = false;
                    startPause.textContent = 'Iniciar';
                }
            }, 10); // Atualiza a cada 10 milissegundos
        }
    }

    // função para pausar 
    function pausarTimer() {
        clearInterval(timer);
        ativo = false;
    }


    // função para alternar entre iniciar e pausar
    function alternarIniciarPausar() {
        if (ativo) {
            pausarTimer();
            startPause.textContent = 'Iniciar';
        } else {
            comecar();
            startPause.textContent = 'Pausar';
        }
    }


    // função para resetrar timer
    function resetarTimer() {
        clearInterval(timer);
        ativo = false;
        tempoRestante = tempoInicial;
        atualizarDisplay(0);
        horasInput.value = '';
        minutosInput.value = '';
        segundosInput.value = '';
        startPause.textContent = 'Iniciar';
        esconderInputs()
    }


    // função para esconder os inputs
    function esconderInputs() {
        if (inputTemp.style.display === 'none') {
            inputTemp.style.display = 'flex';
        } else {
            inputTemp.style.display = 'none';
        }
    }

    startPause.addEventListener('click', alternarIniciarPausar);
    resetar.addEventListener('click', resetarTimer);
});
