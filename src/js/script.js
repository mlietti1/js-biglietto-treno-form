const btnInput = document.getElementById('genera');
btnInput.addEventListener('click', function(){
    const name = document.getElementById('name').value;
    document.getElementById('output-name').innerHTML = name; 
});

const btnReset = document.getElementById('annulla');
btnReset.addEventListener('click', function(){
    document.getElementById('name').value = '';
});