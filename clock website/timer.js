let interval;
let remainingTime;
const countdownDisplay = document.getElementById('countdown-display');

document.getElementById('start-button').addEventListener('click', function() {
    const durationInput = document.getElementById('duration');
    const unitSelect = document.getElementById('unit');
    const duration = parseInt(durationInput.value);
    const unit = unitSelect.value;

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid number for the duration.');
        return;
    }

    if (unit === 'minutes') {
        remainingTime = duration * 60; // Convert minutes to seconds
    } else {
        remainingTime = duration; // Seconds as is
    }

    clearInterval(interval); // Clear any existing intervals

    interval = setInterval(function() {
        if (remainingTime <= 0) {
            clearInterval(interval);
            countdownDisplay.textContent = 'Time\'s up!';
            document.getElementById('stop-button').disabled = true;
            document.getElementById('reset-button').disabled = false;
        } else {
            updateDisplay(remainingTime);
            remainingTime--;
        }
    }, 1000);

    document.getElementById('start-button').disabled = true;
    document.getElementById('stop-button').disabled = false;
    document.getElementById('reset-button').disabled = false;
});

document.getElementById('stop-button').addEventListener('click', function() {
    clearInterval(interval);
    document.getElementById('start-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
});

document.getElementById('reset-button').addEventListener('click', function() {
    clearInterval(interval);
    remainingTime = 0;
    updateDisplay(remainingTime);
    document.getElementById('start-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('reset-button').disabled = true;
});

function updateDisplay(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    countdownDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
