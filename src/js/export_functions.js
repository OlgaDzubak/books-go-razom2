import saveTheChildren from '/src/images/png/safe_children_icon.png';
import projectHope from '/src/images/png/progect_hope_icon.png';
import internationalMedicalCorps from '/src/images/png/international_medical_icon.png';
import razom from '/src/images/png/razom_icon.png';
import actionAgainstHunger from '/src/images/png/action_against_hunger_icon.png';
import serhiyPrytulaFoundation from '/src/images/png/serhiy_prytula_foundation_icon.png';
import united24 from '/src/images/png/united24_icon.png';
import medicinsSansFrontieres from '/src/images/png/medicins_sans_frontieres_icon.png';
import worldVision from '/src/images/png/world_vision_icon.png';
import saveTheChildren from '/src/images/png/safe_children_icon.png';
import projectHope from '/src/images/png/progect_hope_icon.png';
import internationalMedicalCorps from '/src/images/png/international_medical_icon.png';
import razom from '/src/images/png/razom_icon.png';
import actionAgainstHunger from '/src/images/png/action_against_hunger_icon.png';
import serhiyPrytulaFoundation from '/src/images/png/serhiy_prytula_foundation_icon.png';
import united24 from '/src/images/png/united24_icon.png';
import medicinsSansFrontieres from '/src/images/png/medicins_sans_frontieres_icon.png';
import worldVision from '/src/images/png/world_vision_icon.png';

// --- SUPPORT UKRAINE 

//масив об`єктів - благодійні організації
export const supportItems = [
  {
    id: '01',
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveTheChildren,
  },
  {
    id: '02',
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHope,
  },
  {
    id: '03',
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: internationalMedicalCorps,
  },
  {
    id: '04',
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    id: '05',
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionAgainstHunger,
  },
  {
    id: '06',
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: serhiyPrytulaFoundation,
  },
  {
    id: '07',
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
  },

  {
    id: '08',
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medicinsSansFrontieres,
  },
  {
    id: '09',
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
  },
];
// функція. що створює розмітку для блоку Support Ukraine
export default function createFundsMarkup(supportItems) {
  console.log("in createFundsMarkup, supportItems=", supportItems);
  return supportItems.map(({ title, url, img, id }) => {
      return `
    
            <li class="support_gallery_item swiper-slide"><span class="support_gallery_number">${id}</span>
              <a class="support_gallery_link link" href="${url}">
                <img class="support_gallery_link_img"  src="${img}" alt="${title}" height="32">  
            </a>
            </li>
            `;
    })
    .join('');
}


// --- DARK/LIGHT THEMES
// фукція при умові наявності в локал сторадж темної теми додає класи темної теми,
// в усіх інших випадках - видаляє класи темної теми
  export default function addDarkClassToHTML() {
    console.log("in addDarkClassToHTML");
    if (localStorage.getItem('theme') === 'dark') {  document.querySelector('body').classList.add('dark'); }
    else { document.querySelector('body').classList.remove('dark');  }
} 
  


// --- СПИСОК КАТЕГОРІЙ, BEST SELLERS BOOKS. BOOK OF ONE CATEGORY


// Формування розмітки списку категорій
export default function createCategoryMarkUp(data) {
  console.log("in createCategoryMarkUp, data=", data);
  let categoryListHTML = `<h3 id="category-list-title" class="category-list-item">All categories</h3>`;
  data.forEach(category => { 
          categoryListHTML += `
                              <p id="${category.list_name}" class="category-list-item">${category.list_name}</p>`;
  });
  return categoryListHTML;
};
// Функція для розмітки бестселерів за категоріями
export default function createMarcupBestBooks(topBooksData, querty) {
  console.log("in createMarcupBestBooks,  topBooksData==", topBooksData);
  const markup = topBooksData.map(({list_name, books}) => {
      const titleBook = `<p class="theme-book">${list_name}</p>`;
      console.log("list_name=", list_name);
      if (books.length) {
          let book = books.splice(0, querty).map(({_id, book_image, title, author}) => 
          `<li class="item-book" data-id="${_id}">
          <div class="img-owerlay">
          <img src="${book_image}" alt="${title}" class="img-book">
          <div class="owerlay">
              <p class="owerlay-content">quick view</p>
          </div>
          </div>
          <p class="title-book">${shortTitle(title, 17)}</p>
          <p class="author">${shortTitle(author, 34)}</p>
          </li>`).join('');

          return `<div class="best-book-container">${titleBook}<ul class="list-books">${book}</ul>
          <button type="button" class="button-more js-btn-more" data-category="${list_name}">See more</button></div>`
      } else {
          return `<div class="off-books"><p class="off-books-text">Sorry, there are no books in this category, please choose another category</p></div>`
      }}).join('');

      return `<h2 class="title-theme-book">Best Sellers <span class="last-word-color">Books</span></h2>${markup}`;
}

// Функція для розмітки книг за категорією
export default function createMarcupCategoryBooks(booksOfCategoryData) {
  console.log("in createMarcupCategoryBooks, booksOfCategoryData ==", booksOfCategoryData);

if(booksOfCategoryData.length){
      const markup = arr.map(({_id, book_image, author, title}) => 
      `<li class="item-book" data-id="${_id}">
      <div class="img-owerlay">
      <img src="${book_image}" alt="${title}" class="img-book">
      <div class="owerlay">
      <p class="owerlay-content">quick view</p>
      </div>
      </div>
      <p class="title-book">${shortTitle(title, 17)}</p>
      <p class="author">${shortTitle(author, 34)}</p>
      </li>`
      ).join('')

      return `<h2 class="title-theme-book">${lastBlueWord(arr[0].list_name)}</h2><ul class="list-books category">${markup}</ul>`
  } else {
      return `<div class="off-books">
      <p class="off-books-text">Sorry, there are no books in this category, please choose another category</p>
      </div>`
  }
}
// Функція що скорочує title i author на книгаг до вказаного числа символів та додає три крапки в кінці
function shortTitle(string, value) {
  console.log("in shortTitle, string =", string);
  if(string.length > Number(value)) {
      return string.slice(0, Number(value)) + '...';
  }
  return string
}
// Функція що робить синім кольором останнє слово 
function lastBlueWord(string) {
  console.log("in lastBlueWord");
  const arrWord = string.split(" ");
  const firstWord = arrWord.splice(0, arrWord.length - 1);
  return `${firstWord.join(' ')} <span class="last-word-color">${arrWord.join('')}</span>`
}




//---BOOK SHOPPING LIST

  