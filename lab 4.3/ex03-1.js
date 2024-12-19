/*
 * @Author: Deng nelsondeng0701@gmail.com
 * @Date: 2024-10-29 12:14:36
 * @LastEditors: Deng nelsondeng0701@gmail.com
 * @LastEditTime: 2024-10-29 20:59:09
 * @FilePath: /2024.10.19/lab 4.3/ex03.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
window.addEventListener("load", function() {

    const h1 = document.querySelector("h1");
    h1.style.color = "red";
    h1.style.fontStyle = "italic";

    const h2 = document.querySelector("h2");
    h2.textContent = "I am a T-Rex";

 
    const firstButton = document.getElementById("firstButton");
    const img = document.querySelector("img");
    let isCrying = false;

    firstButton.addEventListener("click", function() {
        if (isCrying) {
            img.src = "t-rex.png";  
        } else {
            img.src = "t-rex-cry.png";  
        }
        isCrying = !isCrying; 
    });


    const secondButton = document.getElementById("secondButton");
    const box = document.getElementById("box");
    let animationRunning = false;

    secondButton.addEventListener("click", function() {
        if (!animationRunning) {
            box.style.animation = "moveHorizontally 2s infinite linear";
            animationRunning = true;
        } else {
            box.style.animation = "none";
            animationRunning = false;
        }
    });
});