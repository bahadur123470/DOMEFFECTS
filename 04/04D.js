let element = document.querySelectorAll(".element")

element.forEach( (attach) => {
    attach.addEventListener("mouseenter", () => {
        attach.childNodes[3].style.opacity = 1
    })
    attach.addEventListener("mouseleave", () => {
        attach.childNodes[3].style.opacity = 0
    })
    attach.addEventListener("mousemove", (move) => {
        attach.childNodes[3].style.left = move.x+"px"
        attach.childNodes[3].style.top = move.x+"px"
    })
})