document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    const startBtn = document.getElementById('start');
    const pauseBtn = document.getElementById('pause');
    const resetBtn = document.getElementById('reset');

    let startTime;
    let updatedTime;
    let difference;
    let timerInterval;
    let running = false;

    function updateTimer() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    startBtn.addEventListener('click', () => {
        if (!running) {
            startTime = new Date().getTime() - (difference || 0);
            timerInterval = setInterval(updateTimer, 1000);
            running = true;
        }
    });

    pauseBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        running = false;
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        running = false;
        difference = 0;
        timerDisplay.textContent = '00:00:00';
    });
});
