// const shoppingListLinkEl = document.querySelector('.js-nav-shoppinglistlink');
// const mobileShoppingListLinkEl = document.querySelector('.js-mobile-nav-shoppinglistlink');
// const mobileShoppingBagIconEl = document.querySelector('.js-mobile-shopping-bag-icon');

// shoppingListLinkEl.classList.toggle('selected');
// mobileShoppingListLinkEl.classList.toggle('mobile-selected');
// mobileShoppingBagIconEl.classList.toggle('mobile-selected');

import createOrderedBooksCards from "./tamplates/book-cards.hbs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {booksAPI} from "./js/booksAPI";

//SHOPPING LIST --------------------------------------------------------------------------------------------------------------
const booksApi = new booksAPI();
const paginationBtn = document.querySelector('div.shopping_booklist_pagination')
const testBtn = document.querySelector('div.test')
const removeBtn = document.querySelector('div.closer')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
const pagePag = document.querySelector('div.null-page')
const markup = `
            <div class="shopping_booklist_pagination">
            <button class="btn"><<</button>
              <button class="btn"><</button>
              <button class="btn-two">1</button>
              <button class="btn-two">2</button>
              <button class="btn-two none">3</button>
              <button class="btn-many">...</button>
              <button class="btn-three">></button>
              <button class="btn-three">>></button>
            </div>
            `;
shoppingListDiv.innerHTML = "";5
const LOCALSTORAGE_KEY = "orderedBookID";   //localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a084","643282b1e85766588626a081","643282b1e85766588626a082"]));
let orderedBooksId = [];   
const orderedBooksId_str = localStorage.getItem(LOCALSTORAGE_KEY);
if (orderedBooksId_str  === null){
    shoppingListDiv.innerHTML = '<p class="ampty-shopping-list-msg">There is no books in the shopping list yet. Pleas choose books in the catalogue.</p>';
} else{
    orderedBooksId = JSON.parse(orderedBooksId_str);
    orderedBooksId.forEach(id => { getOrderedBookCard(id);});
} 

//  опис функцій блоку
async function getOrderedBookCard(book_id) {
    console.log("book_id=", book_id);
    try {
        const response = await booksApi.getBookById(book_id);

        //Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
        if (response.data === 0) {
            return Notify.failure("Sorry, there are no book with that ID");
        }
        shoppingListDiv.innerHTML = '';
        paginationBtn.innerHTML = '';   

         // Функція для оновлення розмітки при кліку на кнопку
        function updateMarkup() {
        shoppingListDiv.innerHTML += createOrderedBooksCards(response.data);
        pagePag.innerHTML = markup;
        
        }
        
    // Додаємо обробник події для кнопки
        
    testBtn.addEventListener('click', updateMarkup);
  } catch (error) {
    // якщо запит повернув помилку, виводимо її (виводимо у консоль)
    console.log(error);
  }
}
// ------------------------------------------------------------------------------------------------------------------