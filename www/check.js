let qtindex = 0;
const lang = localStorage.getItem("lan") || "en"; 
const wrapper = document.querySelector(".wrapper2");
let deh=0;
document.addEventListener("wheel", function (event) {
  event.preventDefault();
}, { passive: false });

document.addEventListener("touchmove", function (event) {
  event.preventDefault();
}, { passive: false });



function jsfetch(fact) {
    qtindex += fact;

    if (qtindex < 11) {
        if (qtindex < 1) {
            location.href = 'resultat.html';
        } else {
            
            fetch("question.json")
                .then(response => response.json())
                .then(data => {
                    while (wrapper.firstChild) {
                        wrapper.removeChild(wrapper.firstChild);
                    }

                    const fdata = data[lang];
                    let questionKey = "q" + qtindex.toString();
                    let question = fdata[questionKey];

                    document.querySelector(".title h1").innerHTML = question.q;

                    let scoreidnex = 0;

                    question.r.forEach(resp => {
                        const respond = document.createElement("div");

                        if (qtindex > 1) {
                            respond.classList.add("btn1");
                            wrapper.style.display = "block";
                            wrapper.style.marginTop = "10%";
                        } else {
                            respond.classList.add("btn2");
                            wrapper.style.display = "flex";
                            wrapper.style.marginTop = "35%";
                        }
                        if(question.s[scoreidnex]==1){
                            respond.style.backgroundColor="rgba(0, 184, 0, 0.345)";
                        }
                        else{
                            respond.style.backgroundColor="rgba(241, 0, 0, 0.485)";
                        }
                        respond.innerHTML = "<h3>" + resp + "</h3>";
                        wrapper.appendChild(respond);
                        scoreidnex++;
                    });
                })
                .catch(error => console.error("Error fetching data:", error));
        }
    }
    else{
        const mypage=document.querySelector("body");
        mypage.classList.add("fade_out");
        setTimeout(()=>{
            location.href = 'thnks.html';
        },1000);
      
    }
}



jsfetch(1);
