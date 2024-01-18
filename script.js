// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // variables
    let stopwatchTitle = document.getElementById('work');
    let seconds = 0;
    let minutes = 0;
    let milliseconds = 0;
    let stopwatchInterval;

    // display
    updateDisplay();
    stopwatchTitle.classList.add('active');

    // start stopwatch
    function start() {
        // change button
        document.getElementById('start').style.display = "none";
        document.getElementById('reset').style.display = "block";

        // start counting
        stopwatchInterval = setInterval(() => {
            milliseconds += 10;

            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;

                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
            }

            updateDisplay();
        }, 10); // 10 milliseconds interval
    }

    // stop and reset stopwatch
    function reset() {
        clearInterval(stopwatchInterval);
        document.getElementById('start').style.display = "block";
        document.getElementById('reset').style.display = "none";
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        updateDisplay();
    }

    // pad zero for single digits
    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    // function to update the display
    function updateDisplay() {
        document.getElementById('minutes').innerHTML = padZero(minutes);
        document.getElementById('seconds').innerHTML = padZero(seconds);
        document.getElementById('milliseconds').innerHTML = padZero(Math.floor(milliseconds / 10));
    }

    // Add event listeners for the start and reset buttons
    document.getElementById('start').addEventListener('click', start);
    document.getElementById('reset').addEventListener('click', reset);
});
