

const in1 = document.querySelector(".intro1");
const in2 = document.querySelector(".intro2");
const in3 = document.querySelector(".intro3");
const hp = document.querySelector(".homepage");

function fadein(element) {
    gsap.fromTo(element, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
    });
}

function fadeout(element) {
    gsap.fromTo(element, {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 3,
    });
}

function switchElements(elements, displayStyle, duration, callback) {
    let currentIndex = 0;

    function showNextElement() {
        const currentElement = elements[currentIndex];
        fadein(currentElement);

        setTimeout(() => {
            fadeout(currentElement);
            currentElement.style.display = "none";

            currentIndex++;
            if (currentIndex < elements.length) {
                const nextElement = elements[currentIndex];
                nextElement.style.display = displayStyle; // Show the next element
                showNextElement();
            } else if (callback) {
                callback(); // Call the callback after all elements are processed
            }
        }, duration);
    }

    elements[currentIndex].style.display = displayStyle; // Show the first element
    showNextElement();
}

// Call the function and display the homepage after the animation is complete
switchElements([in1, in2, in3], "flex", 3000, () => {
    hp.style.display = "block";
});

function updateText(translations) {
    if (!translations) return;

    document.querySelector(".intro1 h1").textContent =translations.welcome;
    document.querySelector(".titlewrap h1").textContent = translations.login;
    document.querySelector(".titlewrap h5").textContent = translations.signIn;
    document.querySelector(".eh").textContent = translations.emailOrPhone;
    document.querySelector("h6:nth-of-type(2)").textContent = translations.password;
    document.querySelector(".btn1").textContent = translations.logIn;
    document.querySelector("a h4").textContent = translations.forgotPassword;
    document.querySelector(".wrap h4").innerHTML = translations.noAccount;
    document.querySelector(".btn2").textContent = translations.signUp;
}

const lang = localStorage.getItem("lan") || "fr";

fetch("home.json")
    .then(response => response.json())
    .then(translations => updateText(translations[lang]))
    .catch(error => console.error("Error loading translations:", error));
