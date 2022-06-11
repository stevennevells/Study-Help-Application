var mathButton= document.querySelector('.math-button');
var literatureButton= document.querySelector('.literature-button');
var scienceButton= document.querySelector('.science-button');
var historyButton = document.querySelector('.history-button');
var booksContainer = document.querySelector('.books-container');
var imageAndTriviaContainer = document.querySelector('.image-trivia-container');
var imageContainer = document.querySelector('.image-container');
var triviaContainer = document.querySelector('.trivia-container');
var heroContainer = document.querySelector('.hero');
var savedBooksContainer = document.querySelector('.saved-books-container');
var savedBookListHeader = document.querySelector('.saved-book-list-header');


// Event listeners
mathButton.addEventListener('click', mathFunc);
literatureButton.addEventListener('click', literatureFunc);
scienceButton.addEventListener('click', scienceFunc);
historyButton.addEventListener('click', historyFunc);



function mathFunc(){
    clearScreen();
    searchBooks();
    searchMathImage();
    searchTriviaMath();
}

function literatureFunc(){
    clearScreen();
    searchBooks();
    searchLiteratureImage();
    searchTriviaLiterature();
}

function scienceFunc(){
    clearScreen();
    searchBooks();
    searchScienceImage();
    searchTriviaScience();
}

function historyFunc(){
    clearScreen();
    searchBooks();
    searchHistoryImage();
    searchTriviaHistory();
}

function clearScreen() {
    booksContainer.textContent = '';
    imageContainer.textContent = '';
    triviaContainer.textContent = '';
    heroContainer.remove();
    savedBookListHeader.textContent = '';
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
    
    recommendationHeaderEl.textContent = 'Recommended Books:';
    savedBookListHeader.textContent = 'Saved Book List:';

    recommendationHeaderEl.classList = 'recommendations-header';
    bookListEl.classList = 'book-list-ul';


    var bookArray = [0,1,2,3,4,5,6,7,8,9,10,11];
    for (var i = 0; i < bookArray.length; i++) {
        var bookListItemEl = document.createElement('li');
        var bookListImageEl = document.createElement('img');
        var bookListInfoEl = document.createElement('div');
        var bookListTitleEl = document.createElement('p');
        var bookListAuthorEl = document.createElement('p');
        var saveButton = document.createElement('button');
        
        bookListImageEl.src = "https://covers.openlibrary.org/b/id/" + data.works[i].cover_id + "-M.jpg"; //M is medium. S would be small. L would be large.
        bookListTitleEl.textContent = data.works[i].title 
        bookListAuthorEl.textContent = "by " + data.works[i].authors[0].name;
        saveButton.textContent = 'Save Book';

        bookListItemEl.classList = 'book-list-item';
        bookListImageEl.classList = 'book-list-image';
        bookListInfoEl.classList = 'book-list-info-div'
        bookListTitleEl.classList = 'book-list-title';
        bookListAuthorEl.classList = 'book-list-author';
        saveButton.classList = 'save-button';

        bookListInfoEl.appendChild(bookListTitleEl);
        bookListInfoEl.appendChild(bookListAuthorEl);
        bookListInfoEl.appendChild(saveButton);
        bookListItemEl.appendChild(bookListImageEl);
        bookListItemEl.appendChild(bookListInfoEl);
        //Attaching list item to universal ul element
        bookListEl.appendChild(bookListItemEl);

        saveButton.addEventListener('click', addBookToSavedList);
    }

    recommendationHeaderEl.appendChild(bookListEl);
    booksContainer.appendChild(recommendationHeaderEl);
    savedBooksContainer.appendChild(savedBookListHeader);
}

function addBookToSavedList() {
    var bookText = event.target.parentElement.childNodes[0].innerText;
    var savedBookList = document.createElement('ul');
    var savedBookItem = document.createElement('li');

    savedBookItem.classList = 'saved-book-item'; 
    savedBookItem.textContent = bookText;

    savedBookList.appendChild(savedBookItem);
    savedBookListHeader.appendChild(savedBookList);
    // saveToLocalStorage(bookText);
}

// function saveToLocalStorage (bookTitle) {
//    localStorage.setItem
// }

function searchMathImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=calculus&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayImage(data);
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
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=chemistry&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayImage(data);
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
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=02c71edd48d48cb1a4938d2774e11f66&tags=bookpages&format=json&nojsoncallback=1';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayImage(data);
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
                    displayImage(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

function displayImage(data){
    var imageEl = document.createElement('img');
    var secret = data.photos.photo[5].secret;
    var photoId = data.photos.photo[5].id;
    var serverId = data.photos.photo[5].server;


    imageEl.src = "https://live.staticflickr.com/" + serverId + "/" + photoId + "_" + secret + ".jpg";
    imageEl.classList = 'flickr-img';
    imageContainer.appendChild(imageEl);
}

function searchTriviaMath(){
    var apiUrl = 'https://opentdb.com/api.php?amount=1&category=19&difficulty=easy&type=boolean';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayTrivia(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

function searchTriviaLiterature(){
    var apiUrl = 'https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=boolean';
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayTrivia(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

function searchTriviaScience(){
    var apiUrl = 'https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=boolean';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayTrivia(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

function searchTriviaHistory(){
    var apiUrl = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=boolean';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayTrivia(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}

function displayTrivia(data) {
    var triviaDescription = document.createElement('p');
    var triviaQuestionEl = document.createElement('p');
    var triviaDirectionsEl = document.createElement('p');
    var buttonContainer = document.createElement('div');
    var trueButtonEl = document.createElement('button');
    var falseButtonEl =  document.createElement('button');

    triviaDescription.textContent = 'Trivia Question:';
    triviaQuestionEl.textContent = data.results[0].question;
    triviaDirectionsEl.textContent = "(Hover over your choice to see if you're correct)";
    trueButtonEl.textContent = "True";
    falseButtonEl.textContent = "False";
    
    triviaDescription.classList = 'trivia-description';
    triviaQuestionEl.classList = 'trivia-question';
    
    var correct = data.results[0].correct_answer;
    var trueButtonText = trueButtonEl.textContent;
    var falseButtonText = falseButtonEl.textContent;

    if ( trueButtonText === correct) {
        trueButtonEl.classList = "correct";
    }
    else {
        trueButtonEl.classList = "wrong";
    }

    if ( falseButtonText === correct) {
        falseButtonEl.classList = "correct";
    }
    else {
        falseButtonEl.classList = "wrong";
    }
    
    triviaContainer.appendChild(triviaDescription);
    triviaContainer.appendChild(triviaQuestionEl);
    triviaContainer.appendChild(triviaDirectionsEl);
    buttonContainer.appendChild(trueButtonEl);
    buttonContainer.appendChild(falseButtonEl);
    triviaContainer.appendChild(buttonContainer);
}
