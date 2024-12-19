/*
 * @Author: Deng nelsondeng0701@gmail.com
 * @Date: 2024-10-29 12:20:10
 * @LastEditors: Deng nelsondeng0701@gmail.com
 * @LastEditTime: 2024-11-01 10:52:46
 * @FilePath: /2024.10.19/lab 4.5/ex05.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE                                                                             
 */

window.addEventListener("load", function() {
    const baubles = document.querySelectorAll(".bauble");
    for (let bauble of baubles) {
        bauble.addEventListener("click", function() {
            bauble.classList.add("animated");
        });
    }
});
