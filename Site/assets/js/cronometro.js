document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start');
    const pauseBtn = document.getElementById('pause');
    const resetBtn = document.getElementById('reset');

    const hour = document.getElementById('hour');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');
    const mil = document.getElementById('mil');

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
        const miliseconds = Math.floor((difference % 1000));

        hour.textContent = `${String(hours).padStart(2, '0')}`;
        min.textContent = `${String(minutes).padStart(2, '0')}`;
        sec.textContent = `${String(seconds).padStart(2, '0')}`;
        mil.textContent = `${String(miliseconds).padStart(2, '0')}`;
    }

    startBtn.addEventListener('click', () => {
        if (!running) {
            startTime = new Date().getTime() - (difference || 0);
            timerInterval = setInterval(updateTimer, 10);
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
        hour.textContent = "00";
        min.textContent = "00";
        sec.textContent = "00";
        mil.textContent = "000";
    });
});
