var mathButton= document.querySelector('.math-button');
var literatureButton= document.querySelector('.literature-button');
var scienceButton= document.querySelector('.science-button');
var historyButton = document.querySelector('.history-button');
var booksContainer = document.querySelector('.books-container');
var imageContainer = document.querySelector('.image-container');

// Event listeners
mathButton.addEventListener('click', mathFunc);
literatureButton.addEventListener('click', literatureFunc);
scienceButton.addEventListener('click', scienceFunc);
historyButton.addEventListener('click', historyFunc);


function mathFunc(){
    clearScreen();
    searchBooks();
    searchMathImage();
}

function literatureFunc(){
    clearScreen();
    searchBooks();
    searchLiteratureImage();
}

function scienceFunc(){
    clearScreen();
    searchBooks();
    searchScienceImage();
}

function historyFunc(){
    clearScreen();
    searchBooks();
    searchHistoryImage();
}

function clearScreen() {
    booksContainer.textContent = '';
    imageContainer.textContent = '';
}

function searchBooks () {
    var buttonText = event.target.textContent;
    var lowercaseButtonText = buttonText.toLowerCase();
    console.log(buttonText)
    var apiUrl = "https://openlibrary.org/subjects/" + lowercaseButtonText + ".json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //Function for populating screen with book list
                    displayBooks(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

// Function for populating screen with book list
function displayBooks(data) {
    var recommendationHeaderEl = document.createElement('h3');
    var bookListEl = document.createElement('ul');
    
    recommendationHeaderEl.textContent = 'Recommended Books:';;

    recommendationHeaderEl.classList = 'recommendations-header';
    bookListEl.classList = 'book-list-ul';


    var bookArray = [0,1,2,3,4,5,6,7,8,9,10,11];
    for (var i = 0; i < bookArray.length; i++) {
        var bookListItemEl = document.createElement('li');
        var bookListImageEl = document.createElement('img');
        var bookListTitleEl = document.createElement('p');
        var bookListAuthorEl = document.createElement('p');
        
        bookListImageEl.src = "https://covers.openlibrary.org/b/id/" + data.works[i].cover_id + "-M.jpg"; //M is medium. S would be small. L would be large.
        bookListTitleEl.textContent = data.works[i].title 
        bookListAuthorEl.textContent = "by " + data.works[i].authors[0].name;

        bookListItemEl.classList = 'book-list-item';
        bookListImageEl.classList = 'book-list-image';
        bookListTitleEl.classList = 'book-list-title';
        bookListAuthorEl.classList = 'book-list-author';

        bookListTitleEl.appendChild(bookListAuthorEl);
        bookListItemEl.appendChild(bookListImageEl);
        bookListItemEl.appendChild(bookListTitleEl);
        //Attaching list item to universal ul element
        bookListEl.appendChild(bookListItemEl);
    }

    recommendationHeaderEl.appendChild(bookListEl);
    booksContainer.appendChild(recommendationHeaderEl);
}

function searchMathImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=calculus&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    // displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

function searchScienceImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=science&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    // displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

function searchLiteratureImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=books&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    // displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

function searchHistoryImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=history&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    // displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}


