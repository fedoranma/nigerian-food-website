const langSelect = document.getElementById("languageSelect");
const themeBtn = document.getElementById("themeBtn");
let savedLang = localStorage.getItem("healthyLang")||"en";
let savedTheme = localStorage.getItem("healthyTheme")||"light";

if (langSelect) {
    langSelect.value = savedLang;
}

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) themeBtn.textContent = "LIGHT";
}

function changeLanguage(lang) {
    let elements = document.querySelectorAll("[data-en]");
    elements.forEach(el => {
        let text = el.getAttribute("data-" + lang);
        if (text) {
            el.innerText = text;
        }
    });
    localStorage.setItem("healthyLang",lang);
}

changeLanguage(savedLang);
if (langSelect) {
    langSelect.addEventListener("change",function () {
        changeLanguage(this.value);
    });
}

if (themeBtn) {
    themeBtn.addEventListener("click",function () {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("healthyTheme", "dark");
            this.textContent = "LIGHT";
        } else{
            localStorage.setItem("healthyTheme","light");
            this.textContent = "DARK";
        }
    });
}