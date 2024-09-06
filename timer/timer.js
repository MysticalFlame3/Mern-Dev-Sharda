let intervalId;
let isPaused = false;
let totalSeconds = 0;

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);

    if (minutes >= 0 && seconds >= 0 && seconds <= 59) {
        totalSeconds = minutes * 60 + seconds;
        isPaused = false;
        intervalId = setInterval(updateTimer, 1000);
    } else {
        alert('Invalid input. Please enter valid minutes and seconds.');
    }
}

function pauseTimer() {
    if (!isPaused) {
        clearInterval(intervalId);
        isPaused = true;
    }
}

function resetTimer() {
    clearInterval(intervalId);
    isPaused = false;
    totalSeconds = 0;
    updateTimer();
}

function updateTimer() {
    if (!isPaused) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer').textContent = formattedTime;

        if (totalSeconds === 0) {
            clearInterval(intervalId);
            alert('Time has expired!');
        }

        totalSeconds--;
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);