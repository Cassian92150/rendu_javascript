let boutonElement = document.getElementById('bouton')
boutonElement.addEventListener("click", function(){
        document.body.classList.toggle("dark")
})

let burgouzzElement = document.getElementById("burgouzz")
let menu = document.getElementById("menu")
burgouzzElement.addEventListener("click", function(){
    menu.classList.toggle("active")
})