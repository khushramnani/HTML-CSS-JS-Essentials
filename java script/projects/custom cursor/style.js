var cur = document.querySelector(".cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove",function (dets) {
    cur.style.left = dets.x + "px";
    cur.style.top = dets.y + "px";
    

    
})