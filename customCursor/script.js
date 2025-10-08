let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let img = document.querySelector("#image")
main.addEventListener("mousemove", function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"back.out"
    })
})

img.addEventListener("mouseenter",function(e){
    cursor.innerHTML ="View More"
 gsap.to(cursor,{
    scale:4
 })
})
img.addEventListener("mouseleave",function(e){
    cursor.innerHTML =""
 gsap.to(cursor,{
    scale:1
 })
})