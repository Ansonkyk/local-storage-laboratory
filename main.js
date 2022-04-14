let stringSaveForm = document.querySelector("#string-save-form");
let stringInput = document.querySelector("#string-input");
let savedString = document.querySelector("#saved-string");

let savedStringValue = JSON.parse(localStorage.getItem('savedStringValue'));
let displayPageLoadCount = document.querySelector("#page-load-count");

let pageLoadValue = localStorage.getItem('pageCount');


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


let setUpPageCount = () => {
    pageLoadValue = localStorage.getItem('pageCount');
    if (pageLoadValue === null){
        localStorage.setItem('pageCount', '1')
        displayPageLoadCount.innerText = 1;
    } else {
        pageLoadValue = Number(pageLoadValue) + 1;
        localStorage.setItem('pageCount', pageLoadValue.toString());
        displayPageLoadCount.innerText = pageLoadValue;
    }
}

setUpPageCount();

let stringSaveForm2 = document.querySelector("#string-save-form2");
let stringInput2 = document.querySelector("#string-input2");
let savedString2 = document.querySelector("#saved-string2");
let savedStringValue2 = localStorage.getItem('savedStringValue2');
if (savedStringValue2 === null ) {
    savedString2.innerText = 'Nothing Saved - Please submit an item into the form';
} else {
    savedString2.innerText = savedStringValue2;
}

stringSaveForm2.addEventListener('submit', function(event){
    event.preventDefault();
    
    savedStringValue2 = localStorage.getItem('savedStringValue2');
    
    console.log(stringInput2.value);

    //localStorage.setItem('key','value') - adds a key value pair into your local storage that will persist even after you refresh or exist the page
    localStorage.setItem('savedStringValue2', stringInput2.value);

    //localStorage.getItem('key') - takes in a key as a parameter and gets the value associated with that key from localStorage
    console.log(localStorage.getItem('savedStringValue2'));

    savedStringValue2 = localStorage.getItem('savedStringValue2');
    savedString2.innerText = savedStringValue2;
})
