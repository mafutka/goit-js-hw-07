const categoriesEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
    const titleEl = category.querySelector("h2").textContent;
    const prductsCount = category.querySelectorAll("ul li").length;

    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${prductsCount}`);
    
    
})


// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе 
// в консоль текст заголовка елемента (тегу <h2>) 
// і кількість елементів у категорії (усіх <li>, вкладених у нього).


// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей 
// і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()