var remove = document.querySelector(".remove")
var add = document.querySelector(".add")
var unk = document.querySelector(".unk")

remove.addEventListener("click",function() {
    remove.innerHTML = "REMOVED"
    add.style.display = "none"
    
})
add.addEventListener("click",function() {
    add.innerHTML = "ACCEPTED"
    remove.style.display = "none"
    unk.style.color = "green"
    unk.innerHTML = "Friends"

    
})
