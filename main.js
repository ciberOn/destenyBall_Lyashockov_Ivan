const arrVariants = [
    "Да",
    "Нет",
    "Возможно честично",
    "Наверное",
    "У тебя есть гугл для этого"
]

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const randInt = Math.floor(Math.random()*arrVariants.length)
    alert(arrVariants[randInt])
})