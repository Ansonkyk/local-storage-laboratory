let stringSaveForm = document.querySelector("#string-save-form");
let stringInput = document.querySelector("#string-input");
let savedString = document.querySelector("#saved-string");

let savedStringValue = JSON.parse(localStorage.getItem('savedStringValue'));

if (savedStringValue === null |savedStringValue === []) {
    savedString.innerText = 'Nothing Saved - Please submit an item into the form';
} else {
    savedString.innerText = savedStringValue;
}

stringSaveForm.addEventListener('submit', function(event){
    event.preventDefault();
    let list = document.getElementById("myList");
    var child = list.lastElementChild; 
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }
    savedStringValue = JSON.parse(localStorage.getItem('savedStringValue'));
    if (savedStringValue === null) {
        savedStringValue=[];
    } 
    console.log(stringInput.value);
    savedStringValue.push(stringInput.value);
  
  
    savedStringValue.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
    //localStorage.setItem('key','value') - adds a key value pair into your local storage that will persist even after you refresh or exist the page
    localStorage.setItem('savedStringValue', JSON.stringify(savedStringValue));

    //localStorage.getItem('key') - takes in a key as a parameter and gets the value associated with that key from localStorage
    console.log(localStorage.getItem('savedStringValue'));

    savedStringValue = localStorage.getItem('savedStringValue');
    savedString.innerText = savedStringValue;
})

function deleteChild() {
    var e = document.querySelector("ul");
    
    //e.firstElementChild can be used.
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
