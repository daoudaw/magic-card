// buttons
const bt_a = document.querySelector('#bt_a');
const bt_bra = document.querySelector('#bt_bra');
const bt_ca = document.querySelector('#bt_ca');
const bt_da = document.querySelector('#bt_da');
const bt_bra2 = document.querySelector('#bt_bra2');
const bt_end = document.querySelector('#bt_end');
const reveal = document.querySelector('.reveal');

const a_counter =document.querySelector('#a_counter');
const bra_counter =document.querySelector('#bra_counter');
const ca_counter =document.querySelector('#ca_counter');
const da_counter =document.querySelector('#da_counter');
const bra2_counter =document.querySelector('#bra2_counter');
const end_counter =document.querySelector('#end_counter');

//Secret counter
let counter = 0;

//result
const result = document.querySelector('.result');

//disabling buttons
bt_bra.disabled = true;
bt_ca.disabled = true;
bt_da.disabled = true;
bt_bra2.disabled = true;
bt_end.disabled = true;
reveal.disabled = true;

// Enabling first button
bt_a.addEventListener('click', ()=> {
    bt_bra.disabled = false;
    bt_ca.disabled = true;
    bt_da.disabled = true;
    bt_bra2.disabled = true;
    bt_end.disabled = true;
});

// Disabling the first button
a_counter.addEventListener('click', ()=> {
    bt_a.disabled = true;
    counter += 1;
});



// Enabling second button
bt_bra.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_ca.disabled = false;
    bt_da.disabled = true;
    bt_bra2.disabled = true;
    bt_end.disabled = true;
})

// Disabling the second button
bra_counter.addEventListener('click', ()=> {
    bt_bra.disabled = true;
    counter += 2;
});



// Enabling third button
bt_ca.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_da.disabled = false;
    bt_bra2.disabled = true;
    bt_end.disabled = true;
});

// Disabling the third button
ca_counter.addEventListener('click', ()=> {
    bt_ca.disabled = true;
    counter += 4;
});



// Enabling fourth button
bt_da.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_ca.disabled = true;
    bt_bra2.disabled = false;
    bt_end.disabled = true;
});

// Disabling the fourth button
da_counter.addEventListener('click', ()=> {
    bt_da.disabled = true;
    counter += 8;
});

// Enabling fifth button
bt_bra2.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_ca.disabled = true;
    bt_da.disabled = true;
    bt_end.disabled = false;
});

// Disabling the fith button
bra2_counter.addEventListener('click', ()=> {
    bt_bra2.disabled = true;
    counter += 16;
});



// Enabling sixth button
bt_end.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_ca.disabled = true;
    bt_da.disabled = true;
    bt_bra2.disabled = true;
    reveal.disabled = false;
});

// Disabling the sixth button
end_counter.addEventListener('click', ()=> {
    bt_end.disabled = true;
    counter += 32;
});

//Poof button
reveal.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_ca.disabled = true;
    bt_da.disabled = true;
    bt_bra2.disabled = true;
    bt_end.disabled = true;

    //if counter > 0, show number
    if(counter > 0) {
        result.innerHTML = `<h3>Tu as choisi <b>${counter}</b> !</h3>`
    }
    else {
        result.innerHTML = "<h3>Tu n'as pas fait de choix !</h3>";
    }


    // else show message


    //console.log(counter);
});


