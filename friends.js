
    let matt = document.querySelector('.Matt');
    let joey = document.querySelector('.Joey');
    let abby = document.querySelector('.Abby');

    let container = document.querySelector('#inner');
    let container2 = document.querySelector('#inner2');
    let p = document.querySelector('#placeholder');

    let zod = document.createElement('div');

    let img = document.createElement('img');

    let cap = document.createElement('img');
    let aqu = document.createElement('img');
    let pis = document.createElement('img');
    let ari = document.createElement('img');
    let tau = document.createElement('img');
    let gem = document.createElement('img');
    let can = document.createElement('img');
    let leo = document.createElement('img');
    let vir = document.createElement('img');
    let lib = document.createElement('img');
    let sco = document.createElement('img');
    let sag = document.createElement('img'); 

    cap.id='cap';
    aqu.id='aqu';
    pis.id='pis';
    ari.id='ari';
    tau.id='tau';
    gem.id='gem';
    can.id='can';
    leo.id='leo';
    vir.id='vir';
    lib.id='lib';
    sco.id='sco';
    sag.id='sag';
     
    img.id='cop';

    matt.addEventListener('click', function(){
        if (container2.contains(zod)){
            container.style.flexDirection='column';
            container2.removeChild(zod);
            zod.removeChild(cap);
            zod.removeChild(aqu);
            zod.removeChild(pis);
            zod.removeChild(ari);
            zod.removeChild(tau);
            zod.removeChild(gem);
            zod.removeChild(can);
            zod.removeChild(leo);
            zod.removeChild(vir);
            zod.removeChild(lib);
            zod.removeChild(sco);
            zod.removeChild(sag);
        }
        if(!container.contains(p)){
            container2.appendChild(p);
        }
        img.style.display='none';
        p.style.grow='1';
        p.style.display = 'inline';
        p.textContent='';
        p.textContent='While Guar\'s father was dying he gave \
        him a book that talks about a prophecy about this ancient weapon\
        that will on day stop evil events from happening in the wworld!\
        His father siad that weapon used to be in their family for generations\
        but got stolen and probably stolen around the world. noe he\'s going \
        to go get it back!';
    })

    joey.addEventListener('click', function(){
        if (container2.contains(zod)){
            container2.removeChild(zod);
            zod.removeChild(cap);
            zod.removeChild(aqu);
            zod.removeChild(pis);
            zod.removeChild(ari);
            zod.removeChild(tau);
            zod.removeChild(gem);
            zod.removeChild(can);
            zod.removeChild(leo);
            zod.removeChild(vir);
            zod.removeChild(lib);
            zod.removeChild(sco);
            zod.removeChild(sag);
            p.textContent='';
        }
        if (container.contains(p)&&container2.contains(p)){
            container2.removeChild(p);
        } else {
            container.removeChild(p);
        }
        img.style.display='inline';
        img.src='./imgs/friends/ImACop.jpg';
        img.style.height= '100%';
        container2.appendChild(img);
    })

    abby.addEventListener('click', function(){
        if (container2.contains(p)){
            container2.removeChild(p);
        }

        container2.appendChild(zod);

        zod.style.display='flex';
        zod.style.flexDirection='row';
        zod.style.justifyContent='space-evenly';
        zod.style.width='100%';

        img.style.display = 'none';
        cap.src='./imgs/zodiac/capricorn.png';
        aqu.src='./imgs/zodiac/Aquarius.png';
        pis.src='./imgs/zodiac/Pisces.png';
        ari.src='./imgs/zodiac/Aries.png';
        tau.src='./imgs/zodiac/Taurus.png';
        gem.src='./imgs/zodiac/Gemini.png';
        can.src='./imgs/zodiac/cancer.png';
        leo.src='./imgs/zodiac/Leo.png';
        vir.src='./imgs/zodiac/Virgo.png';
        lib.src='./imgs/zodiac/Libra.png';
        sco.src='./imgs/zodiac/Scorpio.png';
        sag.src='./imgs/zodiac/Sagittarius.png';

        zod.appendChild(cap);
        zod.appendChild(aqu);
        zod.appendChild(pis);
        zod.appendChild(ari);
        zod.appendChild(tau);
        zod.appendChild(gem);
        zod.appendChild(can);
        zod.appendChild(leo);
        zod.appendChild(vir);
        zod.appendChild(lib);
        zod.appendChild(sco);
        zod.appendChild(sag);

        cap.className='zodi';
        aqu.className='zodi';
        pis.className='zodi';
        ari.className='zodi';
        tau.className='zodi';
        gem.className='zodi';
        can.className='zodi';
        leo.className='zodi';
        vir.className='zodi';
        lib.className='zodi';
        sco.className='zodi';
        sag.className='zodi';
    })

    cap.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='January - The World: Happy New Year! Now\'s the time to \
                        take the actions to propel yourself forward. And don\'t \
                        worry if you\'re feeling all stressed. You have to balance \
                        your negative and positive emotions to stay in control. '
        if (!container.contains(p)){
            container.appendChild(p);
        }     
        p.style.paddingBottom='50px';
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    aqu.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='February - Knight of Pentacles: Don\'t be afraid to have questions\
                        about your life. Analyzing certain aspects might lead to revelations or acceptance \
                        that you\'re on the right track. Don\'t overthink it though! '
        if (!container.contains(p)){
            container.appendChild(p);
        }     
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    pis.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='March - Seven of Wands: Following the tracks of the precious months, this month is about\
                            doing what you want to do and act more positively. Don\'t let negativity stop you from what YOU want and \
                            from being the light in this world you are. '
        if (!container.contains(p)){
            container.appendChild(p);
        }     
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    ari.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='April - Four of Swords: Don\'t isolate yourself. It\'s hard not to when you feel pessimistic,\
                            but come out of your cave and let in the light. Now\'s the time to collaborate. Bounce ideas off close ones \
                            and see what sticks. '
        if (!container.contains(p)){
            container.appendChild(p);
        }     
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    tau.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='May - The Magician: The end is here! Goodbye Saint Rose :(. This card is labeled 1 in Tarot decks,\
                        and the number literally represents a new start. Now\'s the time for the future. To succeed, make sure you\
                        listen to those around you, the ones who have your best interest at heart. They are here to help.'
        if (!container.contains(p)){
            container.appendChild(p);
        }     
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    gem.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='June - Ace of Cups: Focus on your relationships: new or old. Feel your emotions regarding them and yourself. \
                        Sometimes the only way out is through.'
        if (!container.contains(p)){
            container.appendChild(p);
        }     
        p.style.backgroundColor='rgb(165, 198, 250)';
    })
    can.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='July - Ace of Wands: Remember all those idea you had before? Now\'s the time to execute them. However, remember\
                        life is a double-edged sword. Don\'t give too much of yourself to your plans. Remember your boundaries and stick to them!'
        if (!container.contains(p)){
            container.appendChild(p);
        }     
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    leo.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='August - Nine of Pentacles: This card gives a feeling of independence and harmony. Things are coming together. \
                        But, don\'t get ahead of yourself. Take it at a confident pace, and don\'t wear yourself out early in the game.  '
        if (!container.contains(p)){
            container.appendChild(p);
        }     
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    vir.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='September - Seven of Swords: Be careful of the people you\'re spending your time with and energy on. You\'re able \
                        to face the truth and be honest. Avoid disloyal and dishonest people (duh).'
        if (!container.contains(p)){
            container.appendChild(p);
        } 
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    lib.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='October - Six of Pentacles: Be wary of people who don\'t make you feel good. If you have a bad feeling, take it as a \
                        warning. Take caution not to fall in destructive cycles with those around you as well as yourself.  '
        if (!container.contains(p)){
            container.appendChild(p);
        } 
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    sco.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='Novemmber - The Hanged Man: Take your circumstances and consider how you can improve your life. You are in charge of your \
                        own life, don\'t forget it. Use challenges as opppurtunities to adapt and grow.'
        if (!container.contains(p)){
            container.appendChild(p);
        } 
        p.style.backgroundColor='rgb(165, 198, 250)';
    })

    sag.addEventListener('click', function(){
        container.style.flexDirection='column';
        p.textContent='December - Two of Wands: Sometimes, just because you can, does not mean you should. You should have courage to do the right\
                         thing. You have the power you need, but everyone else may not be on your level.'
        if (!container.contains(p)){
            container.appendChild(p);
        } 
        p.style.backgroundColor='rgb(165, 198, 250)';
    })


