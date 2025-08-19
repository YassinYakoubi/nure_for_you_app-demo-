const lang = localStorage.getItem("lan") ;
fetch("thnks.json")
    .then(response => response.json())
    .then(data=> {
        const mydata=data[lang];
        document.querySelector(".intro1 h1").innerHTML=mydata.p;
    })
const intro = document.querySelector(".intro1");

// Add fillin class right after DOM is loaded (delay is handled by CSS)
setTimeout(()=>{
    intro.classList.remove("pop_in")
    intro.classList.add("fillin");

// Show h1 after 2s delay + 0.4s fillin duration = 2.4s
setTimeout(() => {
    intro.classList.add("show-h1");
}, 2400);
    
},600);
setTimeout(()=>{
    location.href="resultat.html";
},5000)