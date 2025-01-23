let countEl = document.getElementById("counter-el");
let entryEl = document.getElementById("entryEl");

let count = 0;


function increment(){
    // increment count
    count += 1;

    // update the textContent
    countEl.textContent = count;
}

function save(){
    // saved the count
    let entry_saved = count + " - ";
    
    // update the textContent
    entryEl.innerHTML += entry_saved;

    // reset the count
    count = 0;
    countEl.textContent = count;

}

function clear_fct(){
    // clear the entries
    entryEl.innerHTML = "Previous entries:<br>";

    // clear the count
    count = 0
    countEl.textContent = count;
}
