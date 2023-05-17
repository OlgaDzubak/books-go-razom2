//ІМПОРТ ФУНКЦІЙ----------------------------------------------------------------------------------------------------------
console.log("Імпорт");
import addDarkClassToHTML from './js/export_functions';                  // перемикання світлої/темної теми
import createFundsMarkup from "./js/export_functions";                   // функція повертаэ розмытку зі списком благодійних фондів Support Ukraine
import createCategoryMarkUp from  './js/export_functions';               // функція повертаэ розмітку зs списком категорый книжок
import createMarcupBestBooks from './js/export_functions';         // функція повертає розмітку зі списком категорій і книжок best sellers
import createMarcupCategoryBooks from './js/export_functions';           // функція повертає розмітку зі списком книжок за категорією

import {supportItems} from './js/export_functions';   // об'єкт із даними про благодійні фонди для блоку support Ukraine
import {booksAPI} from "./js/booksAPI";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const booksApi = new booksAPI();

//--------------------------------------------------------------------------------------------------------------
console.log("Файл index.js");

const homeLinkEl = document.querySelector('.js-nav-homelink');
const mobileHomeLinkEl = document.querySelector('.js-mobile-nav-homelink');
homeLinkEl.classList.toggle('selected');
mobileHomeLinkEl.classList.toggle('mobile-selected');







//1.ФУНКЦІЇ ПЕРЕМИКАННЯ ТЕМИ-------------------------------------------------------------------------------------
console.log("---1.ФУНКЦІЇ ПЕРЕМИКАННЯ ТЕМИ");
    const checkBoxEl = document.querySelector('#theme-switch-toggle');

    // Слухач на перемикач теми
    checkBoxEl.addEventListener('change', (event) => {
        event.preventDefault();
        if (localStorage.getItem('theme') === 'dark') {localStorage.removeItem('theme'); }
        else {localStorage.setItem('theme', 'dark');}
        addDarkClassToHTML();
    });

    // addDarkClassToHTML();
//------------------------------------------------------------------------------------------------------------





// //2.ФУНКЦІЇ БЛОКУ LIST OF CATEGORIES --------------------------------------------------------------------------
// console.log("---2.ФУНКЦІЇ БЛОКУ LIST OF CATEGORIES");
//     const categoryListBox = document.querySelector(".category-list-box");
//     getBookCategories()
//         .then((data)=>{
//             if (!data){ 
//                 return Notify.failure("Sorry, there are no categories of books on the server. Please reload the page or try later.");
//             }
//             categoryListBox.innerHTML = createCategoryMarkUp(data);
//         })
//         .catch((error)=>{ 
//             console.log(error);
//         });
    

//     async function getBookCategories() {
//         try {
//             const response = await booksApi.getCategoryList();
//             if (!response.data){
//                     return Notify.failure("Sorry, there are no categories of books on the server. Please reload the page or try later.");
//                 }
//                 return response.data;
//             }
//         catch(error) { 
//              console.log(error);
//         }
//      }   
// //--------------------------------------------------------------------------------------------------------------





//3.ФУНКЦІЇ БЛОКУ SUPPORT UKRAINE --------------------------------------------------------------------------------
// console.log("---3.ФУНКЦІЇ БЛОКУ SUPPORT UKRAINE");
//     const galleryItemsContainer = document.querySelector('.swiper-wrapper');

//     // слайдер для списку елементів
//     const swiper = new Swiper('.mySwiper', {
//         slidesPerView: 4,
//         spaceBetween: 20,
//         direction: 'vertical',
//         loop: true,
//         mousewheel: true,

//         navigation: {
//         nextEl: '.swiper-button-next',
//         },
//     });
//      document.querySelector('.scroll-up-btn').addEventListener('click', () => {swiper.next();});
//     galleryItemsContainer.innerHTML=createFundsMarkup(supportItems);
  
//--------------------------------------------------------------------------------------------------------------





// //4.ФУНКЦІЇ БЛОКУ BEST SELLERS BOOKS ТА BOOKS OF ONE CATEGORY---------------------------------------------------
// console.log("--4.ФУНКЦІЇ БЛОКУ BEST SELLERS BOOKS ТА BOOKS OF ONE CATEGORY");
//     const list = document.querySelector('.homepage-books');  // Посилання на контейнер блоку  BEST SELLERS BOOKS
//     list.addEventListener('click', loadMore);                // Слухач на кнопку Load More
//     createBestBooksByCategories();                           // Запит на сервер для отримання данних, та рендер списку категорый зы списками бестселерів
    


//         //опис функцій блоку------
//     async function createBestBooksByCategories() {           // запит та створення розмітки бестселлерів за категоріями   
//         console.log("in createBestBooksByCategories");
//         const pageWidth = document.documentElement.scrollWidth; // знаходимо ширину екрана, щоб зрозуміти скільки книжок рендерити

//         try {
//             const { topBooksData } = await booksApi.getTopBooks();
//             console.log("data =====", data);
//             if (topBooksData.length) {
//                 if (pageWidth < 768) {
//                     list.innerHTML = createMarcupBestBooks(topBooksData, 1);
//                 } else if (pageWidth < 1440 && pageWidth >= 768) {
//                     list.innerHTML = createMarcupBestBooks(topBooksData, 3);
//                 } else {
//                     list.innerHTML = createMarcupBestBooks(topBooksData, 5);
//                 }
//                 console.log(list.innerHTML);
//             } else {
//                 Notify.failure("Sorry, there was a server error, please reload the page");
//                 return;}}
//         catch (error) {
//             console.log(error);
//             Notify.failure('Sorry, there was a server error, please reload the page');
//         }   
//     }

//     async function loadMore(event) {                         // запит та створення розмітки для списку книжок за одгією категорією
//         console.log("in loadMore");
//         event.preventDefault();
            
//         try {
//             if(!event.target.classList.contains('js-btn-more')) { 
//                 return;
//             } else {
//                 let category = event.target.dataset.category.split(" ").join("%20");
//                 console.log("category = ", category);
//                 const { booksOfCategoryData } = await booksApi.getBooksByCategory(category);
//                 list.innerHTML = createMarcupCategoryBooks(booksOfCategoryData);
//             }
//         } catch (error) {
//             console.error(error);
//             Notify.failure('Sorry, there was a server error, please reload the page');
//         }
//     }


//     // Робимо Scroll на початок сторінки після її завантаження, щоб одразу була видка категорія книжок
//     const { height: cardHeight } = list.lastElementChild.getBoundingClientRect();
//     window.scrollBy({top: -cardHeight, behavior: "smooth",});
// //-----------------------------------------------------------------------------------------------------------------





// //5.MODAL WINDOW - ABOUT US-----------------------------------------------------------------------------------------
// console.log("--5.MODAL WINDOW - ABOUT US");
//     const openBtn = document.querySelector('.js-about-us-btn');
//     const backdrop = document.querySelector('.about-us-backdrop');
//     const closeBtn = document.querySelector('.about-us-close-button');

//     openBtn.addEventListener('click', onOpenModal);
//     closeBtn.addEventListener('click', onCloseModal);
        
//         //опис функцый блоку
//     function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyDown);
//     backdrop.classList.remove('is-hidden');
//     }
//     function onCloseModal() {
//     window.removeEventListener('keydown', onEscKeyDown);
//     backdrop.classList.add('is-hidden');
//     }
//     function onEscKeyDown(e) {
//     if (e.code === 'Escape') {
//         onCloseModal();
//     }
//     }
// //-------------------------------------------------------------------------------------------------------------------





// //6.MODAL WINDOW - AUTORIZATION --------------------------------------------------------------------------------------
// console.log("--6.MODAL WINDOW - AUTORIZATION");
//     openBtn = document.querySelector('.jsOpenBtn');
//     backdrop = document.querySelector('.backdrop');
//     closeBtn = document.querySelector('.close-button');
//     const modalForm = document.querySelector('.modalForm');

//     openBtn.addEventListener('click', onOpenModal);
//     closeBtn.addEventListener('click', onCloseModal);
//     modalForm.addEventListener('submit', onFormSubmit);

//     function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyDown);
//     backdrop.classList.remove('is-hidden');
//     }
//     function onCloseModal() {
//     window.removeEventListener('keydown', onEscKeyDown);
//     backdrop.classList.add('is-hidden');
//     }
//     function onFormSubmit(e) {
//     e.preventDefault();
//     const inputName = modalForm.elements.name.value;
//     const inputEmail = modalForm.elements.email.value;
//     const inputPassword = modalForm.elements.password.value;

//     if (inputName === '' || inputEmail === '' || inputPassword === '') {
//         return Notiflix.Notify.failure('Please fill in all fields!');
//     }
//     modalForm.reset();
//     }
//     function onEscKeyDown(e) { 
//     if (e.code === 'Escape') {
//         onCloseModal();
//     }
//     }

// //-------------------------------------------------------------------------------------------------------------------





// //7.MODAL WINDOW - ABOUT BOOK ----------------------------------------------------------------------------------------
// console.log("--7.MODAL WINDOW - ABOUT BOOK");
//     let book_Id;
//     const divContainerEl = document.querySelector('.homepage-books');
//     const divBackEl = document.querySelector('.back');
//     const btnCloseModal = document.querySelector('.btn-modal-close');
//     const btnAddEl = document.querySelector('.add');
//     const btnRemoveEl = document.querySelector('.remove');
//     const textEl = document.querySelector('.modal-message');

//     const objScroll = {
//         scrollPosition: 0,
//         disabledScroll() {
//             objScroll.scrollPosition = window.scrollY;
//             document.body.classList.add('block-scroll');

//             document.body.style.cssText = `top: -${objScroll.scrollPosition}px;`
//         },

//         enabledScroll() {
//             document.body.classList.remove('block-scroll');
//             document.body.style.cssText = `top: 0`
//             window.scroll({top: objScroll.scrollPosition})
//         },
//     }

//     divContainerEl.addEventListener('click', onReadId);
//     btnCloseModal.addEventListener('click', onCloseModal);
//     btnAddEl.addEventListener('click', addLocalStorage);
//     btnRemoveEl.addEventListener('click', removeLocalStorage);

//         // опис функцій блоку
//     function onReadId(event) {
        
//         if (event.target.classList[0] === 'img-book' || event.target.classList[0] === 'owerlay') {
//             book_Id = event.target.parentElement.parentElement.dataset.id;
            
//             createModalWindow(book_Id);
//         } else if (event.target.classList[0] === 'owerlay-content') {
//             book_Id = event.target.parentElement.parentElement.parentElement.dataset.id;
            
//             createModalWindow(book_Id);
//         } else if (event.target.classList[0] === 'title-book' || event.target.classList[0] === 'author') {
//             book_Id = event.target.parentElement.dataset.id;
            
//             createModalWindow(book_Id);
//         }
//     }
//     async function createModalWindow(book_Id) {
//         objScroll.disabledScroll();
//         document.addEventListener("keydown", event => {
//             if (event.key === 'Escape') {
//                 onCloseModal();
//             }
//         }, {once: true} );
//         try {
//             const respons = await booksApi.getBookById(book_Id);
//             const { author, book_image, description, title, buy_links } = respons.data;
//             const randerBox = document.querySelector('.book-img');
//             const nameBookEl = document.querySelector('#name-book');
//             const authorEl = document.querySelector('#author');
//             const descriptionEl = document.querySelector('#description');
//             const amazonEl = document.querySelector('#amazon');
//             const appleEl = document.querySelector('#apple');
//             const barnesEl = document.querySelector('#barnes');
//             randerBox.innerHTML = '';
//             const randerModal = `<img src="${book_image}" alt="${book_image}" class="img-modal">`
//             nameBookEl.textContent = title;
//             authorEl.textContent = author;
//             if (description === '') {
//                 descriptionEl.textContent = 'No description';
//             } else {
//                 descriptionEl.textContent = description
//             }
            
//             amazonEl.attributes[0].value = buy_links[0].url;
//             appleEl.attributes[0].value = buy_links[1].url;
//             barnesEl.attributes[0].value = buy_links[2].url;


//             randerBox.innerHTML = randerModal;
//             divBackEl.classList.toggle('is-hidden');
//             const dataJson = localStorage.getItem('key');
//             const arrLs = JSON.parse(dataJson);
//             if (arrLs.includes(book_Id)) {
//                 btnRemoveEl.classList.remove('is-hidden');
//                 textEl.classList.remove('is-hidden');
//             } else {
//                 btnAddEl.classList.remove('is-hidden');
//             }

//         } catch (error) {
//             console.error(error);
//             Notify.failure('Sorry, there was a server error, please reload the page');
//         }
//     };
//     function onCloseModal() {
//         objScroll.enabledScroll();
//         divBackEl.classList.toggle('is-hidden');
//         btnRemoveEl.classList.add('is-hidden');
//         btnAddEl.classList.add('is-hidden');
//         textEl.classList.add('is-hidden');
//     }
//     function addLocalStorage() {
//         btnAddEl.classList.add('is-hidden');
//         btnRemoveEl.classList.remove('is-hidden');
//         textEl.classList.remove('is-hidden');
//         const dataJson = localStorage.getItem('key');
//         const arrLs = JSON.parse(dataJson); //book_Id
//         arrLs.push(book_Id);
//         localStorage.setItem('key', JSON.stringify(arrLs));
//     };
//     function removeLocalStorage() {
//         btnAddEl.classList.remove('is-hidden');
//         btnRemoveEl.classList.add('is-hidden');
//         textEl.classList.add('is-hidden');
//         const dataJson = localStorage.getItem('key');
//         const arrLs = JSON.parse(dataJson);
//         let i = arrLs.indexOf(book_Id);
//         arrLs.splice(i, 1);
//         localStorage.removeItem('key')
//         localStorage.setItem('key', JSON.stringify(arrLs));
//     };
// //-------------------------------------------------------------------------------------------------------------------




// //8.MOBILE MENU ----------------------------------------------------------------------------------------
// console.log("--8.MOBILE MENU");
//     const burgerBtnEl = document.querySelector('.js-open-mobile-menu');
//     const mobileDivEl = document.querySelector('.js-mobile-menu');
//     const iconOpenMobileMenu = document.querySelector('.icon-burger-mobile-menu');
//     const iconCloseMobileMenu = document.querySelector('.icon-close-mobile-menu');

//     burgerBtnEl.addEventListener('click', onOpenMobileMenu);

//         //опис функцій
//     function onOpenMobileMenu(evt) {
//     if (iconCloseMobileMenu.classList.contains('is-hidden')) {
//         showMobileMenu();
//         iconOpenMobileMenu.classList.add('is-hidden');
//         iconCloseMobileMenu.classList.remove('is-hidden');
//     } else {
//         hideMobileMenu();
//         iconOpenMobileMenu.classList.remove('is-hidden');
//         iconCloseMobileMenu.classList.add('is-hidden');
//     }
//     }
//     function showMobileMenu() {
//     mobileDivEl.classList.remove('is-hidden-modal');
//     }
//     function hideMobileMenu() {
//     mobileDivEl.classList.add('is-hidden-modal');
//     }
// //-------------------------------------------------------------------------------------------------------------------