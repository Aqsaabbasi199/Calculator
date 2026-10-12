let buttons = document.querySelectorAll(".btn")
let userInput = document.querySelector("#data")
for (let i = 0; i<buttons.length;i++){
    buttons[i].addEventListener("click", (event) => {
        userInput.value += event.target.innerText
    })

}

//Result

let resultBtn = document.querySelector("#result")
resultBtn.addEventListener("click", () => {
    let output =  eval(userInput.value)
    userInput.value = output;
})

//clear

let clearBtn = document.querySelector("#full")
clearBtn.addEventListener("click" , () => {
    userInput.value = ""
})