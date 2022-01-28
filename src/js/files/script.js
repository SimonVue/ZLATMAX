// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);


/* ============== автодобавление колонок в подменю =================== */
const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
  menuBlocks.forEach(menuBlock => {
    const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
    menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
  });
}
/* ============== раскрываем каталог =================== */
function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest('[data-parent]')) {
    const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
    const catalogMenu = document.querySelector('.catalog-header');

    if (subMenu) {
      const activeLink = document.querySelector('._sub-menu-active');
      const activeBlock = document.querySelector('._sub-menu-open');

      if (activeLink && activeLink !== targetElement) {
        activeBlock.classList.remove('_sub-menu-open');
        activeLink.classList.remove('_sub-menu-active');
      }
      targetElement.classList.toggle('_sub-menu-active');
      subMenu.classList.toggle('_sub-menu-open');
    } else {
      console.log('Ой, ОЙ, нет такого меню');
    }
    e.preventDefault();
  }
}


