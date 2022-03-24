//chilometri che vuole percorrere
const km_user = prompt('Distanza che si desidera percorrere?')
console.log(km_user);

//funzione per il calcolo della percentuale

//sconto del 40%
function calcPerc(num) {
    return ((num/100) * 60).toFixed(2)
}

//sconto del 20%
function calcPerc_20(num) {
    return ((num/100) * 80).toFixed(2)
}

//eta persona
const age_user = prompt('inserisca la sua età?')
console.log(age_user);

//costo del prezzo per km
const price_km = 0.29;

//calcolo del prezzo per km
const prezzo = km_user * price_km;
console.log(prezzo);

if (age_user >= 65){
    var sconto = calcPerc(prezzo);
    document.getElementById('sct').innerHTML = sconto + '$';
    document.getElementById('sct_2').innerHTML = 'Non puo usufruire di questo sconto';
} else {
    var sconto_2 = calcPerc_20(prezzo);
    document.getElementById('sct_2').innerHTML = sconto_2 + '$';
    document.getElementById('sct').innerHTML = 'Non puo usufruire di questo sconto';
}

