let qtindex = 0;
const lang = localStorage.getItem("lan") || "en"; 
const wrapper = document.querySelector(".wrapper2");
let score=0;
let pagescore=0;
let previouspagescore=0;
let deh=0;
let prep="";
document.addEventListener("wheel", function (event) {
  event.preventDefault();
}, { passive: false });

document.addEventListener("touchmove", function (event) {
  event.preventDefault();
}, { passive: false });
fetch("question1.json")
    .then(response => response.json())
    .then(re => {
        const stupid=re[lang];
        document.querySelector(".intro1 h1").innerHTML = stupid.a;
        prep=stupid.b;
    })
    .catch(error => console.error("Error loading translations:", error));

function passme(){
    if (deh==1){
        in1=document.querySelector(".intro1");
        in1.style="animation: fade 1s ease reverse; display:none;"
    }
    else{
        const bruh=document.querySelector(".intro1 h1 ");
        bruh.innerHTML=prep;
        bruh.style="font-size:3em;animation: fade 4s ease 2s;";
        deh=1;
    }
    
}


function kliked(heh, question) {
    const scoreidnex = heh.dataset.sx;
    if (heh.classList.contains('selected')) {
        heh.classList.remove('selected');  
        heh.style.backgroundColor = "transparent";  
        heh.style.boxShadow = "none";  
        pagescore -= 0.4 * question.s[scoreidnex];  
    } else {
        heh.classList.add('selected');  
        heh.style.backgroundColor = "rgba(0, 0, 0, 0.082)";  
        heh.style.boxShadow = "0 0 5px #c52e2f";  
        pagescore += 0.4 * question.s[scoreidnex];  
    }
    
}

function jsfetch(fact) {
    qtindex += fact;

    if (qtindex < 11) {
        if (qtindex < 1) {
            location.href = 'home.html';
        } else {
            
            fetch("question.json")
                .then(response => response.json())
                .then(data => {
                    if (fact>0){
                        previouspagescore=pagescore;
                        score+=pagescore;//add this addtional steps after the quizz ends!
                    }
                    else{
                        score-=previouspagescore;
                        previouspagescore=0;
                    }
                    pagescore=0;
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

                        respond.innerHTML = "<h3>" + resp + "</h3>";
                        respond.dataset.sx = scoreidnex;
                        respond.onclick = () => kliked(respond, question);

                        wrapper.appendChild(respond);
                        scoreidnex++;
                        

                    });
                })
                .catch(error => console.error("Error fetching data:", error));
        }
    }
    else{
        location.href = 'resultat.html';
        score+=pagescore;
        localStorage.setItem("score",score);
    }
}



jsfetch(1);
