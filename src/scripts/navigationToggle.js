import refs from "./refs";

function navToggle(home,library){
    refs.homeItemNav.addEventListener('click',()=>{
        home.style.display = 'block';
        library.style.display = 'none';
    });
    refs.libraryNav.addEventListener('click',()=>{
        home.style.display = 'none';
        library.style.display = 'block';
    });
}
function libraryList(library){
    refs.libraryNav.addEventListener('click',()=>{
        refs.menuNav.style.display = 'none';
        refs.libraryMenu.style.display = 'flex';
        refs.swithSearch.style.display = 'none';
    });
}
navToggle(/*тут должны быть ссылки на блоки home и library*/);
libraryList(/*а тут ссылка на library */);