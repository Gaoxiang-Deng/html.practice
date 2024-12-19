/*
 * @Author: Deng nelsondeng0701@gmail.com
 * @Date: 2024-10-29 12:16:08
 * @LastEditors: Deng nelsondeng0701@gmail.com
 * @LastEditTime: 2024-10-29 21:36:16
 * @FilePath: /2024.10.19/lab 4.4/ex04.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
window.addEventListener("load", function() {
    const txtYear = document.getElementById("txtYear");
    const calculateButton = document.getElementById("calculate");
    const resultParagraph = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const year = parseInt(txtYear.value);

        if (isNaN(year)) {
            resultParagraph.textContent = "Please enter a valid year.";
        } else {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                resultParagraph.textContent = year + " is a leap year.";
            } else {
                resultParagraph.textContent = year + " is not a leap year.";
            }
        }
    });
});

