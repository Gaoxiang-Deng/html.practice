/*
 * @Author: Deng nelsondeng0701@gmail.com
 * @Date: 2024-10-29 12:06:20
 * @LastEditors: Deng nelsondeng0701@gmail.com
 * @LastEditTime: 2024-11-01 09:53:23
 * @FilePath: /2024.10.19/lab 4.6/timer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
window.addEventListener("load", function () {

  // TODO 1) Declare variables here
let timerInterval = null;
let elapsedTimeMillis = 0;

// TODO 5) Add event listeners for the two buttons:
// a. When #btnStartTimer is clicked, call the startTimer function.
// b. When #btnStopTimer is clicked, call the stopTimer function.
const btnStartTimer = document.getElementById("btnStartTimer");
const btnStopTimer = document.getElementById("btnStopTimer");

btnStartTimer.addEventListener("click", startTimer);
btnStopTimer.addEventListener("click", stopTimer);

// TODO 2) Complete the startTimer function to:
// a. If the timer has not started, perform the following:
// - Set elapsedTimeMillis to 0
// - Display "0.00" in the #timer_face <span>
// - Start the timer, calling the updateTimer function every 100 milliseconds.
// b. If the timer is already started, do nothing.
function startTimer() {
    if (!timerInterval) { 
        elapsedTimeMillis = 0;
        document.getElementById("timer_face").textContent = "0.00";
        timerInterval = setInterval(updateTimer, 100);
    }
}

// TODO 3) Complete the stopTimer function to:
// a. If the timer has started, stop the timer.
// b. If the timer has not started, do nothing.
function stopTimer() {
    if (timerInterval) { 
        clearInterval(timerInterval);  
        timerInterval = null;  
    }
}

// TODO 4) Complete the updateTimer function to:
// a. Update elapsedTimeMillis appropriately.
// b. Set the #timer_face <span> text to the current elapsed time in seconds, rounded to two decimal places.
function updateTimer() {
    elapsedTimeMillis += 100;
    const elapsedSeconds = (elapsedTimeMillis / 1000).toFixed(2);
    document.getElementById("timer_face").textContent = elapsedSeconds;
}


});
