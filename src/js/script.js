const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver = 0.4;
let prezzoFinale;
let offerta;
let nameUser;
const ticketBox = document.querySelector('.ticket');
const ticketTitle = document.querySelector('.ticket-title');

const btnInput = document.getElementById('genera');

btnInput.addEventListener('click', function(){
    nameUser = document.getElementById('name').value;
    document.getElementById('output-name').innerHTML = nameUser;
    const kmPercorsi = document.getElementById('km-percorsi').value;
    
    ticketBox.classList.remove('hide');
    ticketTitle.classList.remove('hide');
    

    const prezzoIniziale = kmPercorsi * prezzoKm;
    const etaUtente = document.getElementById('fascia-eta').value;

    if (etaUtente == "under18") {
    prezzoFinale = prezzoIniziale - prezzoIniziale * scontoMinorenni;
    offerta = 'Sconto Junior';
    }else if (etaUtente == "over65") {
    prezzoFinale = prezzoIniziale - prezzoIniziale * scontoOver;
    offerta = 'Sconto Senior';
    }else {
    prezzoFinale = prezzoIniziale;
    offerta = 'Prezzo pieno';
    };
    document.getElementById('output-price').innerHTML = prezzoFinale.toFixed(2) + ` €`;
    document.getElementById('n-carrozza').innerHTML = Math.floor(Math.random() * 8) + 1;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('code').innerHTML = Math.floor(Math.random() * (999999 - 100000) +1 ) + 100000;
});

const btnReset = document.getElementById('annulla');

btnReset.addEventListener('click', function(){
    document.getElementById('name').value = '';
    document.getElementById('output-name').innerHTML = '';
    document.getElementById('km-percorsi').value = '';
    document.getElementById('output-price').innerHTML = '';
    document.getElementById('n-carrozza').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('code').innerHTML = '';
    ticketBox.classList.add('hide');
    ticketTitle.classList.add('hide');
});
