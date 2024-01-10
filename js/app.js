document.addEventListener("DOMContentLoaded", e => {
    let btn_change_mode = document.getElementById("Btn");
    let parent_page = document.querySelector("body");
    let nav_page = document.querySelector("nav");
    let icone_select = document.querySelectorAll("a i");
    let button = document.querySelector("button");
    let icones = document.querySelectorAll("figure i");

    btn_change_mode.addEventListener("click", () => {
        parent_page.classList.toggle("darkmode");
        nav_page.classList.toggle("nav_darkmode");
        button.classList.toggle("darkmode");

        for (let ones in icones) {
            console.log(ones);
            icones[ones].style.color = "rgb(53, 49, 49)";
        }
        for (let row in icone_select) {
            icone_select[row].style.color = "#fff";
        }
    });
});