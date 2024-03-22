
    const matt = document.querySelector('#Matt');
    const joey = document.querySelector('#Joey');
    const abby = document.querySelector('#abby');

    let container = document.querySelector('#inner');
    let topDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let p = document.querySelector('#placeholder');

    let img = document.createElement('img');
    const cap = document.createElement('img');
    const aqu = document.createElement('img');
    const pis = document.createElement('img');
    const ari = document.createElement('img');
    const tau = document.createElement('img');
    const gem = document.createElement('img');
    const can = document.createElement('img');
    const leo = document.createElement('img');
    const vir = document.createElement('img');
    const lib = document.createElement('img');
    const sco = document.createElement('img');
    const sag = document.createElement('img'); 

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
        img.style.display='none';
        p.style.display = 'inline';
        p.padding = '20px';
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
        if (container.contains(topDiv)){
            container.removeChild(topDiv);
            container.removeChild(botDiv);
            container.removeChild(cap);
            container.removeChild(aqu);
            container.removeChild(pis);
            container.removeChild(ari);
            container.removeChild(tau);
            container.removeChild(gem);
            container.removeChild(can);
            container.removeChild(leo);
            container.removeChild(vir);
            container.removeChild(lib);
            container.removeChild(sco);
            container.removeChild(sag);
        }
        img.style.display='inline';
        p.padding = 'none';
        p.style.display = 'none';    
        img.src='./imgs/friends/ImACop.jpg';
        container.appendChild(img);
    })

    abby.addEventListener('click', function(){
        container.style.flexDirection='column';
        topDiv.style.flexDirection='row';
        botDiv.style.flexDirection='row';
        topDiv.style.flexWrap='none';

        container.appendChild(topDiv);
        container.appendChild(botDiv);

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

        topDiv.appendChild(cap);
        topDiv.appendChild(aqu);
        topDiv.appendChild(pis);
        topDiv.appendChild(ari);
        topDiv.appendChild(tau);
        topDiv.appendChild(gem);

        botDiv.appendChild(can);
        botDiv.appendChild(leo);
        botDiv.appendChild(vir);
        botDiv.appendChild(lib);
        botDiv.appendChild(sco);
        botDiv.appendChild(sag);
    })
