const burger = document.querySelector('#burger'); 
const nav = document.querySelector('#nav');
const cross = document.querySelector('#cross');

burger.addEventListener('click', ()=>{
    // if (nav.classList.contains('hidden')){
    //     nav.classList.remove('hidden');
    // } else {
    //     nav.classList.add('hidden');
    // }
nav.classList.toggle('hidden')
    


})

cross.addEventListener('click', ()=>{
    // if (nav.classList.contains('hidden')){
    //     nav.classList.remove('hidden');
    // } else {
    //     nav.classList.add('hidden');
    // }

    nav.classList.toggle('hidden')

})