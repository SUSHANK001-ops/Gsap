function wheelAni(){
    window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    gsap.to(".mar", {
      transform: "translateX(-100%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".mar img", {
      rotate: 180,
    });
  } else {
    gsap.to(".mar", {
      transform: "translateX(0%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    })
     gsap.to(".mar img",{
    rotate:0
 })
  }
});

}

wheelAni()