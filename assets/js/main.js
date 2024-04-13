


const toggleContenByTab = () => {

    let tabs = document.querySelectorAll('.products-block__tab');
    let contents = document.querySelectorAll('.products-block__wrapper');    

    // console.log(tabs);
    // console.log(content);

    tabs.forEach((tab, index) => {

        tab.addEventListener('click', ()=> {
            
            tabs.forEach((tab_2) =>{
                tab_2.classList.remove('active');
            })

            contents.forEach((content) => {
                content.classList.remove('active'); 
            })

            tab.classList.add('active');
            contents[index].classList.add('active');
        })

    })


}

toggleContenByTab();

var mobileMenu = document.querySelector('.mobile-menu');
var burger = document.querySelector('.burger');
var krestik = document.querySelector('.krestik');

burger.addEventListener('click',() => {

    burger.classList.add('active');

    console.log(burger);
    console.log(mobileMenu);

    // if(burger.classList.contains('active')){
    //     burger.classList.remove('active');
 
    // }
    // else{
    //     burger.classList.add('active');
    //     mobileMenu.classList.add('active');
    // }
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

krestik.addEventListener('click',() => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  var tabs = document.querySelectorAll(".products-block__tab");
  var wrappers = document.querySelectorAll(".products-block__wrapper");
