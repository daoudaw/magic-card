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

const a_counter_bis =document.querySelector('#a_counter_bis');
const bra_counter_bis =document.querySelector('#bra_counter_bis');
const ca_counter_bis =document.querySelector('#ca_counter_bis');
const da_counter_bis =document.querySelector('#da_counter_bis');
const bra2_counter_bis =document.querySelector('#bra2_counter_bis');
const end_counter_bis =document.querySelector('#end_counter_bis');

//Secret counter
let counter = 0;

//result
const result = document.querySelector('.result');

//disabling buttons
bt_bra.disabled = true;
bt_bra.style.backgroundColor = "#27252f";

bt_ca.disabled = true;
bt_ca.style.backgroundColor = "#27252f";

bt_da.disabled = true;
bt_da.style.backgroundColor = "#27252f";

bt_bra2.disabled = true;
bt_bra2.style.backgroundColor = "#27252f";

bt_end.disabled = true;
bt_end.style.backgroundColor = "#27252f";

reveal.disabled = true;
reveal.style.backgroundColor = "#27252f";

// Enabling first button
bt_a.addEventListener('click', ()=> {
    bt_bra.disabled = false;
    bt_bra.style.backgroundColor = "white";
    bt_ca.disabled = true;
    bt_da.disabled = true;
    bt_bra2.disabled = true;
    bt_end.disabled = true;
});

// Disabling the first button yes
a_counter.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_a.style.backgroundColor = "#27252f";
    counter += 1;
});
// Disabling the first button no
a_counter_bis.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_a.style.backgroundColor = "#27252f";

});



// Enabling second button
bt_bra.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_ca.disabled = false;
    bt_ca.style.backgroundColor = "white";
    bt_da.disabled = true;
    bt_bra2.disabled = true;
    bt_end.disabled = true;
})

// Disabling the second button yes
bra_counter.addEventListener('click', ()=> {
    bt_bra.disabled = true;
    bt_bra.style.backgroundColor = "#27252f";
    counter += 2;
});
// Disabling the second button no
bra_counter_bis.addEventListener('click', ()=> {
    bt_bra.disabled = true;
    bt_bra.style.backgroundColor = "#27252f";
   
});



// Enabling third button
bt_ca.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_da.disabled = false;
    bt_da.style.backgroundColor = "white";
    bt_bra2.disabled = true;
    bt_end.disabled = true;
});

// Disabling the third button yes
ca_counter.addEventListener('click', ()=> {
    bt_ca.disabled = true;
    bt_ca.style.backgroundColor = "#27252f";
    counter += 4;
});
// Disabling the third button no
ca_counter_bis.addEventListener('click', ()=> {
    bt_ca.disabled = true;
    bt_ca.style.backgroundColor = "#27252f";
  
});



// Enabling fourth button
bt_da.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_ca.disabled = true;
    bt_bra2.disabled = false;
    bt_bra2.style.backgroundColor = "white";
    bt_end.disabled = true;
});

// Disabling the fourth button yes
da_counter.addEventListener('click', ()=> {
    bt_da.disabled = true;
    bt_da.style.backgroundColor = "#27252f";
    counter += 8;
});
// Disabling the fourth button no
da_counter_bis.addEventListener('click', ()=> {
    bt_da.disabled = true;
    bt_da.style.backgroundColor = "#27252f";
  
});


// Enabling fifth button
bt_bra2.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_ca.disabled = true;
    bt_da.disabled = true;
    bt_end.disabled = false;
    bt_end.style.backgroundColor = "white";
});

// Disabling the fith button yes
bra2_counter.addEventListener('click', ()=> {
    bt_bra2.disabled = true;
    bt_bra2.style.backgroundColor = "#27252f";
    counter += 16;
});
// Disabling the fith button no
bra2_counter_bis.addEventListener('click', ()=> {
    bt_bra2.disabled = true;
    bt_bra2.style.backgroundColor = "#27252f";
  
});



// Enabling sixth button
bt_end.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_bra.disabled = true;
    bt_ca.disabled = true;
    bt_da.disabled = true;
    bt_bra2.disabled = true;
    reveal.disabled = false;
    reveal.style.backgroundColor = "white";
});

// Disabling the sixth button yes
end_counter.addEventListener('click', ()=> {
    bt_end.disabled = true;
    bt_end.style.backgroundColor = "#27252f";
    counter += 32;
});
// Disabling the sixth button no
end_counter_bis.addEventListener('click', ()=> {
    bt_end.disabled = true;
    bt_end.style.backgroundColor = "#27252f";
   
});


//Poof button
reveal.addEventListener('click', ()=> {
    bt_a.disabled = true;
    bt_a.style.backgroundColor = "#27252f";

    bt_bra.disabled = true;
    bt_bra.style.backgroundColor = "#27252f";

    bt_ca.disabled = true;
    bt_ca.style.backgroundColor = "#27252f";

    bt_da.disabled = true;
    bt_da.style.backgroundColor = "#27252f";

    bt_bra2.disabled = true;
    bt_bra2.style.backgroundColor = "#27252f";

    bt_end.disabled = true;
    bt_end.style.backgroundColor = "#27252f";

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


