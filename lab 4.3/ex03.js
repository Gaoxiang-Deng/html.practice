window.addEventListener("load", function() {
    const h1 = document.querySelector("h1");
    h1.style.color = "red";
    h1.style.fontStyle = "italic";

    const h2 = document.querySelector("h2");
    h2.textContent = "I am a T-Rex";


    const firstButton = document.getElementById("firstButton");
    firstButton.addEventListener("click", function() {
        const img = document.querySelector("img");
        img.src = "t-rex-cry.png";  
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
