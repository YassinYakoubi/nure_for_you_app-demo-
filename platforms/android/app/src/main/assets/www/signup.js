     document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Charger le fichier JSON
        const response = await fetch("sign.json"); // Assurez-vous que le fichier JSON est dans le bon emplacement
        const translations = await response.json();

        // Définir la langue par défaut (modifier selon besoin)
        const lang = localStorage.getItem("lan") ;

        // Appliquer les traductions
        document.querySelector(".titlewrap h1").textContent = translations[lang].signup;
        document.querySelector(".twrap .eh").textContent = translations[lang].fullName;
        document.querySelector(".bap .beh").textContent = translations[lang].age;
        document.querySelector(".formwrap .eh").textContent = translations[lang].emailOrPhone;
        
        const passwordLabels = document.querySelectorAll(".formwrap h6");
        passwordLabels[1].textContent = translations[lang].password;
        passwordLabels[2].textContent = translations[lang].confirmPassword;
    } catch (error) {
        console.error("Error loading translations:", error);
    }
});
