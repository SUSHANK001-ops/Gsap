let menu = document.querySelector("#nav i");
let close = document.querySelector("#full i");

let tl = gsap.timeline();
tl.from("#full", {
  right:"-40%",
  duration: 0.5,
});

tl.from("#full h4", {
  x: 150,
  duration: 0.3,
  stagger: 0.2,
  opacity:0,
});
tl.from("#full i", {
  x: 150,
  duration: 0.3,
  opacity:0,
});

tl.pause()

menu.addEventListener("click",function(){
  tl.play()
})

close.addEventListener("click", function(){
  tl.reverse()
})