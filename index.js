let kissBtn = document.querySelector('#kissBtn');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

kissBtn.addEventListener('click', function(){
    modal.style.display='block';
})

close.addEventListener('click', function(){
    modal.style.display='none';
})

window.addEventListener('click', function(event){
    if (event.target == modal){
        modal.style.display='none';
    }
})