function BreakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;
  let splitedText = h1Text.split("")
  let halfVal = Math.floor(splitedText.length/2)
  let clutter = ""
  splitedText.forEach(function (e,i) {
    if(i<halfVal){
        clutter += `<span class="a">${e}</span>`
    }
    else{
         clutter += `<span class="b">${e}</span>`
    }
  });

 h1.innerHTML = clutter
}

BreakTheText()
gsap.from("h1 .a",{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.4,
    stagger:0.15

})
gsap.from("h1 .b",{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.4,
    stagger:-0.15

})
