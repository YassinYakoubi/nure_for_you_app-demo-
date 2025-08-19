
function funcy (bruh){
   h3s=document.querySelectorAll("h3");
   h3s.forEach(h3 => {
    h3.style="background-color: none;";
   });
   const myh3=document.getElementById(bruh);
   myh3.style="background-color: #4d4c4c10;";
   localStorage.setItem("lan",bruh);
            }
