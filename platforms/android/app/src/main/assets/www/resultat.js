const score = localStorage.getItem("score");
const lan = localStorage.getItem("lan") || "en";
console.log("Current language:", lan);
document.addEventListener("wheel", function (event) {
    event.preventDefault();
  }, { passive: false });
  
  
  document.addEventListener("touchmove", function (event) {
    event.preventDefault();
  }, { passive: false });
fetch("resultats.json")
    .then(response => response.json())
    .then(data => {
        const langData = data[lan];
        

        document.querySelector("h2").innerHTML = langData.title;
        document.querySelector(".stade").innerHTML = langData.stade;
        document.querySelector(".rateme h3").innerHTML = langData.c;
        const level = document.querySelector(".level");
        const scored = document.querySelector(".score");
        const img = document.querySelector(".image");
        const btn =document.querySelector(".btn2 h4");
        scored.innerHTML = score;
        
        if (score < 4) {
            level.innerHTML = langData.type[0]; // "Initial", "ابتدائي", "Beginner"
            btn.innerHTML=langData.r;
            level.style.color = "#ff3d3d"; // Red
            scored.style.color = "#ff3d3d"; // Red
            img.style.backgroundImage = "url(/Bienvenu/sad.png)";
        } else if (score >= 4 && score <= 5) {
            level.innerHTML = langData.type[1]; // "Intermédiaire", "متوسط", "Intermediate"
            btn.innerHTML=langData.r;
            level.style.color = "#b25522"; // Orange
            scored.style.color = "#b25522"; // Orange
            img.style.backgroundImage = "url(/Bienvenu/happy.png)";
        } else {
            level.innerHTML = langData.type[2]; // "Avancé", "متقدم", "Advanced"
            btn.innerHTML=langData.r;
            level.style.color = "#0ba84a"; // Green
            scored.style.color = "#0ba84a"; // Green
            img.style.backgroundImage = "url(/Bienvenu/veryhappy.png)";
        }
    })
.catch(error => console.error('Error loading JSON:', error));
let stars = document.querySelectorAll(".wrapper span");

stars.forEach(star => {
    star.addEventListener("mouseover", () => {
        const starid = parseInt(star.id); // Convert ID to a number
        for (let i = 0; i <= starid; i++) { // Ensure loop runs up to the star ID
            const recalledstar = document.getElementById(i.toString()); // Get star by ID
            if (recalledstar) recalledstar.style.color = "#d06b70";
        }
    });

    // Reset color on mouseout
    star.addEventListener("mouseout", () => {
        stars.forEach(s => s.style.color = ""); // Reset all stars
    });
});
function diss(){
    const logo =document.querySelector(".logo");
    const rate=document.querySelector(".rateme");
    const wrapped=document.querySelector(".wrapped");
    logo.style.top=" 87.5%";
    wrapped.style.animation="none";
    rate.style.display="none";
}
