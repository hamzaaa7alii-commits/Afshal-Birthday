const openBtn=document.getElementById("openBtn");
const surprise=document.getElementById("surprise");
const music=document.getElementById("music");

openBtn.addEventListener("click",()=>{
  surprise.classList.remove("hidden");
  openBtn.textContent="Our Little Surprise ❤️";
  surprise.scrollIntoView({behavior:"smooth"});
  music.play().catch(()=>{});
});

function createHeart(){
  const h=document.createElement("div");
  h.className="heart";
  h.textContent=["❤","♡","💗","💕"][Math.floor(Math.random()*4)];
  h.style.left=Math.random()*100+"vw";
  h.style.setProperty("--drift",(Math.random()*160-80)+"px");
  h.style.fontSize=(14+Math.random()*18)+"px";
  h.style.animationDuration=(5+Math.random()*4)+"s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),9000);
}
setInterval(createHeart,700);
