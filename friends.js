
    let matt = document.querySelector('#Matt');
    let joey = document.querySelector('#Joey');
    let container = document.querySelector('#inner');
    let p = document.querySelector('#placeholder');
    let img = document.createElement('img');
    
    matt.addEventListener('click', function(){
        img.style.display='none';
        container.style.flexDirection='row';
        p.textContent='';
        p.textContent='While Guar\'s father was dying he gave \
        him a book that talks about a prophecy about this ancient weapon\
        that will on day stop evil events from happening in the wworld!\
        His father siad that weapon used to be in their family for generations\
        but got stolen and probably stolen around the world. noe he\'s going \
        to go get it back!';
    })
    
    joey.addEventListener('click', function(){
        img.style.display='inline';
        container.style.flexDirection='column';
        p.textContent='He never sent me anything....';
        img.src='./ImACop.jpg';
        container.appendChild(img);
    })
