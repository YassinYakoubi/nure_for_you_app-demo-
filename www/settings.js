const lang = localStorage.getItem("lan") ;

fetch("settings.json")
        .then(response => response.json())
        .then(translations => {
            const data = translations[lang];

            document.querySelector(".title h1").textContent = data.settings;
            document.querySelector(".wrapp a[href='langues.html']").textContent = data.languages;
            document.querySelector(".wrapp a[href='home.html']").textContent = data.logout;
            document.querySelector(".wrapp a[href='apropos.html']").textContent = data.about;
            document.querySelector(".wrapp a[href='dedicases.html']").textContent = data.dedications;
        })
        .catch(error => console.error("Error loading translations:", error));
