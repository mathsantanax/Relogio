const horasInput = document.getElementById('horas');
const minutosInput = document.getElementById('minutos');
const segundosInput = document.getElementById('segundos');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');
const milezimo = document.getElementById('milezimo');

let ativo = false;
let tempo;
let tempoRestante;

function updateDisplay(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    hora.textContent(`${String(hours).padStart(2, '0')}`);
    minuto.textContent(`${String(minutes).padStart(2, '0')}`);
    segundo.textContent(`${String(seconds).padStart(2, '0')}`);
    //timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function comercar(){
    if(!ativo)
    {
        const hours = parseInt(horasInput.value) || 0;
        const minutes = parseInt(minutosInput.value) || 0;
        const seconds = parseInt(segundosInput.value) || 0;
        tempoRestante = hours * 3600 + minutes * 60 + seconds;
        updateDisplay(tempoRestante);

        if (tempoRestante > 0) {
            ativo = true;
            timer = setInterval(() => {
                if (tempoRestante > 0) {
                    tempoRestante--;
                    updateDisplay(tempoRestante);
                } else {
                    clearInterval(timer);
                    ativo = false;
                }
            }, 1000);
        }
    }
}

function pauseTimer() {
    clearInterval(timer);
    ativo = false;
}

function resetTimer() {
    clearInterval(timer);
    ativo = false;
    tempoRestante = 0;
    updateDisplay(tempoRestante);
    horasInput.value = '';
    minutosInput.value = '';
    segundosInput.value = '';
}

start.addEventListener('click', comercar);
//pauseBtn.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);
