var btn = document.querySelector("button")
var h2 = document.querySelector("h2")
var inner = document.querySelector("#inner")
var p = document.querySelector("p")
var percentage = 0;

btn.addEventListener("click",function(){

    btn.style.pointerEvents = "none"

    let num = 50 + Math.floor(Math.random()*50)

    let int = setInterval(function(){
        percentage++;
        h2.innerHTML = percentage + "%"
        inner.style.width = percentage + "%"
    },num)

    setTimeout(function(){
        clearInterval(int)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.5
        p.innerHTML = `Downloaded in ${num/10} seconds`
    },num*100)
})