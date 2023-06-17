console.log("Hello");

const containerBox = document.querySelector(".container");
const firstInput = containerBox.querySelector(".first");
const secondInput = containerBox.querySelector(".second");
const nxtButton = containerBox.querySelector(".next");
const backButton = containerBox.querySelector(".back");
const submitButton = containerBox.querySelector(".submit");
const allInput = containerBox.querySelectorAll(".first input")


nxtButton.addEventListener("click", () => {
    allInput.forEach(input => {
        if (input.value != "") {
            firstInput.classList.add("f");
            secondInput.classList.add("s");
        } else {
            firstInput.classList.remove("f");
            secondInput.classList.remove("s");

        }
    })
})

backButton.addEventListener("click", () => {
    firstInput.classList.remove("f");
    secondInput.classList.remove("s");
})


