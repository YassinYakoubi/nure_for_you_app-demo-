
const lang =  localStorage.getItem("lan");

function updateText(translations) {
    if (!translations) return;

    document.querySelector(".titlewrap h1").textContent = translations.login;
    document.querySelector(".titlewrap h5").textContent = translations.signIn;
    document.querySelector(".eh").textContent = translations.emailOrPhone;
    document.querySelector("h6:nth-of-type(2)").textContent = translations.password;
    document.querySelector(".btn1").textContent = translations.logIn;
    document.querySelector("a h4").textContent = translations.forgotPassword;
    document.querySelector(".wrap h4").innerHTML = translations.noAccount;
    document.querySelector(".btn2").textContent = translations.signUp;
}



fetch("home.json")
    .then(response => response.json())
    .then(translations => updateText(translations[lang]))
    .catch(error => console.error("Error loading translations:", error));
