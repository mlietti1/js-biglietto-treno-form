const btnInput = document.getElementById('genera');
btnInput.addEventListener('click', function(){
    const name = document.getElementById('name').value;
    document.getElementById('output-name').innerHTML = name;
    const prezzoKm = 0.21;
    const scontoMinorenni = 0.2;
    const scontoOver = 0.4;
    let prezzoFinale;
    const kmPercorsi = document.getElementById('km-percorsi').value;

    const prezzoIniziale = kmPercorsi * prezzoKm;
    let etaUtente = document.getElementById('fascia-eta').value;

    if (etaUtente == "under18") {
    prezzoFinale = prezzoIniziale - prezzoIniziale * scontoMinorenni;
    }else if (etaUtente == "over65") {
    prezzoFinale = prezzoIniziale - prezzoIniziale * scontoOver;
    }else {
    prezzoFinale = prezzoIniziale;
    };
    document.getElementById('output-price').innerHTML = prezzoFinale.toFixed(2) + ` €`;
    document.getElementById('n-carrozza').innerHTML = Math.floor(Math.random() * 8) + 1;
    document.getElementById('offerta').innerHTML = etaUtente;
    document.getElementById('code').innerHTML = Math.floor(Math.random() * 9999999) + 1;
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
});
