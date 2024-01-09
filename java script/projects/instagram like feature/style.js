var box = document.querySelector("#box")
var heart = document.querySelector("i")

box = addEventListener("dblclick", function () {
    heart.style.transform = "translate(-50% ,-50%) scale(1)"
    heart.style.opacity = "0.8"
    console.log("heelo");

    setTimeout(function(){
        heart.style.opacity = "0"
    }, 1000)
    setTimeout(function(){
        heart.style.transform = "translate(-50% ,-50%) scale(0)"
    }, 2000)
})