// let relation = document.querySelector("h5")
// let add = document.querySelector("#add")
// let remove =  document.querySelector("#remove")

// const addRelation = add.addEventListener("click", () => {
//     relation.innerHTML = "Friends"
//     relation.style.color = "#03C03C"
// })
// const removeRelation = remove.addEventListener("click", () => {
//     relation.innerHTML = "Stranger"
//     relation.style.color = "red"
// })

let relationship = document.querySelector("h5")
let btn = document.querySelector("#add")
let initial = 0
btn.addEventListener("click", () => {
    if (initial === 0){
        relationship.innerHTML = "Friends"
        relationship.style.color = "#03C03C"
        btn.innerHTML = "Remove Friend"
        initial = 1
    }
    else {
        relationship.innerHTML = "Stranger"
        relationship.style.color = "red"
        btn.innerHTML = "Add Friend"
        initial = 0
    }
})