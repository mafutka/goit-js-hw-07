const userText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

userText.addEventListener("input", () => {
   const trimmedInput = userText.value.trim();
   output.textContent = trimmedInput === "" ? "Anonymous" : trimmedInput;
    
})

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input)
//  підставляє його поточне значення в span#name-output як ім’я для привітання. 
// Обов’язково очищай значення в інпуті по краях від пробілів . 
// Якщо інпут порожній або містить лише пробіли, 
// то замість імені у спан має підставлятися рядок "Anonymous".