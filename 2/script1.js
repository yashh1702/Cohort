var box = document.querySelector("#box")
var btn = document.querySelector("button")

btn.addEventListener("click",function(){
    var color1 = Math.floor(Math.random()*256)
    var color2 = Math.floor(Math.random()*256)
    var color3 = Math.floor(Math.random()*256)
    
    box.style.backgroundColor = `rgb(${color1},${color2},${color3})`
    btn.style.backgroundColor = `rgb(${color3},${color1},${color2})`
})