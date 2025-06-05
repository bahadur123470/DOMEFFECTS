let arr = [
    {
        dp: "https://images.unsplash.com/photo-1553782376-b2e8256ab838?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1553782376-b3c480f5fea7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1660758324476-6ed0b02c7001?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        story: "https://plus.unsplash.com/premium_photo-1727943459031-c9f1a2d059c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8" 
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1668485968590-aff3717c1dbe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8",
        story: "https://plus.unsplash.com/premium_photo-1683817397956-b46614758fb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://images.unsplash.com/photo-1536588086516-cf8b058a7aa0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgwfHx8ZW58MHx8fHx8",
        story: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1495298599282-d8920eb5009b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    }
]
let stories = document.querySelector("#stories")
let clutter = ""
let fullScreen = document.querySelector("#full-screen")
arr.forEach( (ele, idx) => {
    clutter += ` <div class="story">
                <img id="${idx}" src="${ele.dp}" alt="">
            </div>`
})
stories.innerHTML = clutter 
stories.addEventListener("click", (e) => {
    fullScreen.style.display = "block"
    fullScreen.style.backgroundImage = `url(${arr[e.target.id].story})`


    setTimeout( () => {
        fullScreen.style.display = "none"
    }, 3000)
})