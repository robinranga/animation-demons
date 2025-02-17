let butt = document.querySelector("button");
let ball = document.querySelector(".box");

butt.addEventListener("click", () => {
  let currentState = window.getComputedStyle(ball).animationPlayState;

  if (currentState === "paused") {
    ball.style.animationPlayState = "running";
    butt.innerText = "Stop Animation";
    console.log("Animation started");
  } else {
    ball.style.animationPlayState = "paused";
    butt.innerText = "Start Animation";
    console.log("Animation paused");
  }
});


butt.addEventListener("mouseover", ()=>{
    butt.style.boxShadow = " rgb(3, 255, 33) 0 0 1rem"
})
butt.addEventListener("mouseout", ()=>{
    butt.style.boxShadow = "none"
})
