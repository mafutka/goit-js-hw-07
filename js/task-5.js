const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeColor.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    spanColor.textContent = `Current Color: ${randomColor}`;
})


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }




//   Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку 
// на button.change-color і задає це значення кольору текстовим вмістом для span.color.