// =========================
// Premium Effects
// =========================

// Typewriter Effect

function typeWriter(element, text, speed = 25){

    element.innerHTML="";

    let i=0;

    let typing=setInterval(()=>{

        if(i<text.length){

            element.innerHTML+=text.charAt(i);

            i++;

        }else{

            clearInterval(typing);

        }

    },speed);

}



// Floating Hearts

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML=["❤️","💜","✨","🤍","💖"][Math.floor(Math.random()*5)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

},900);



// Ripple Effect

document.addEventListener("click",(e)=>{

    if(e.target.tagName==="BUTTON"){

        const ripple=document.createElement("span");

        ripple.className="ripple";

        ripple.style.left=e.offsetX+"px";

        ripple.style.top=e.offsetY+"px";

        e.target.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    }

});



// Button Pop

document.addEventListener("click",(e)=>{

    if(e.target.tagName==="BUTTON"){

        e.target.classList.add("clicked");

        setTimeout(()=>{

            e.target.classList.remove("clicked");

        },200);

    }

});