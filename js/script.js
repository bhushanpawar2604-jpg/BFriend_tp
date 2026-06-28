const startBtn=document.querySelector(".start-btn");
const container=document.querySelector(".container");
const quiz=document.querySelector(".quiz");

const question=document.querySelector(".question");

const optionBtns=document.querySelectorAll(".option");

const response=document.querySelector(".response h3");

const image=document.querySelector(".image-box img");

const next=document.querySelector(".next");

const progress=document.querySelector(".progress-fill");

const questionCount=document.querySelector(".question-count");

let current=0;

startBtn.onclick=()=>{

container.classList.add("hide");

quiz.classList.remove("hide");

loadQuestion();

};

function loadQuestion(){

const q=questions[current];

question.innerHTML=q.question;

optionBtns[0].innerHTML=q.options[0];

optionBtns[1].innerHTML=q.options[1];

response.innerHTML="";

image.style.display="none";

next.style.display="none";

questionCount.innerHTML=`Question ${current+1} / ${questions.length}`;

progress.style.width=((current+1)/questions.length)*100+"%";

}

optionBtns.forEach((btn,index)=>{

btn.onclick=()=>{

btn.disabled=true;

optionBtns.forEach(b=>b.disabled=true);

setTimeout(()=>{

typeWriter(response,questions[current].answers[index].text);

image.src=questions[current].answers[index].image;

image.style.display="block";

next.style.display="inline-block";

optionBtns.forEach(b=>b.disabled=false);

},700);

};

});

next.onclick=()=>{

current++;

if(current<questions.length){

loadQuestion();

}

else{

ending();

}

};

function ending(){

document.querySelector(".question-card").innerHTML=`

<h1>🎉 Mission Complete 🎉</h1>

<br>

<h2>Friendship Report</h2>

<br>

<p class="ending-text">

❤️ Official Friendship Report ❤️

<br><br>

✔️ Certified Best Friend

<br>

😂 Roast Level : 50-50%

<br>

🤝 Friendship Level : Infinity

<br>

🧠 Attitude : Unlimited

<br><br>

━━━━━━━━━━━━━━━━━━━━━━

⚠️ Secret Message Unlocked

━━━━━━━━━━━━━━━━━━━━━━

<br><br>

Waise...

Hi website kay ashich random navhti banavali mi.... 😌

<br><br>

Fakt ya sathi banavali ki...

Karn tu ek divashi asach bolli hoti ki....

<b>"Mi divas Bhar rikamach asato ani timepass karato."</b> 😭😂

<br><br>

Mg te mazya ego aal ...

Mg vatal ki Tula aaj proof detoch ki mala coding yete ki nahi ??? 😎💻

<br><br>

Mission Complete ✅

Ata Kitkat pending ahe..Mazya proof sathi.. 🍫😂

</p>

<br>

<button onclick="location.reload()">

Play Again 😂

</button>

`;

}