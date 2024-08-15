const red = document.querySelector("input[name=red]")
const green = document.querySelector("input[name=green")
const blue = document.querySelector("input[name=blue")
const container = document.querySelector(".container")

red.addEventListener('input', function(){
    document.querySelectorAll("p")[0].textContent = red.value
    container.style.backgroundColor = "rgb(" + red.value + "," + green.value +"," + blue.value +")"
    document.querySelectorAll("p")[3].innerHTML = "RGB("+ red.value + ","+ green.value + "," + blue.value +")"  
})
green.addEventListener('input', function(){
    document.querySelectorAll("p")[1].textContent = green.value
    container.style.backgroundColor = "rgb(" + red.value + "," + green.value +"," + blue.value +")"
    document.querySelectorAll("p")[3].innerHTML = "RGB("+ red.value + ","+ green.value + "," + blue.value +")"
})
blue.addEventListener('input', function(){
    document.querySelectorAll("p")[2].textContent = blue.value
    container.style.backgroundColor = "rgb(" + red.value + "," + green.value +"," + blue.value +")"
    document.querySelectorAll("p")[3].innerHTML = "RGB("+ red.value + ","+ green.value + "," + blue.value +")"
})

document.body.addEventListener('mousemove', function(move){
   const sum = Math.round(Math.random() * 255)
   const x = Math.round((move.clientY / window.innerHeight) * 255)
   const y = Math.round((move.clientX / window.innerWidth) * 255)
   const z = Math.round((move.clientX / window.innerWidth) * 255)

   document.body.style.backgroundColor = "rgb("+ x + "," + y + "," + z + ")"

   
   
    
})



   