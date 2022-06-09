var mathButton= document.querySelector('.math-button');
var literatureButton= document.querySelector('.literature-button');
var scienceButton= document.querySelector('.science-button');
var historyButton = document.querySelector('.history-button');
var topicContainer = document.querySelector('.topic-container');

// Event listeners
mathButton.addEventListener('click', mathFunc);
literatureButton.addEventListener('click', literatureFunc);
scienceButton.addEventListener('click', scienceFunc);
historyButton.addEventListener('click', historyFunc);


function mathFunc(){
    clearScreen();
    searchMathImage();
    searchMathBooks();
}

function literatureFunc(){
    clearScreen();
    searchLiteratureImage();
    searchLiteratureBooks();
}

function scienceFunc(){
    clearScreen();
    searchScienceImage();
    searchScienceBooks();
}

function historyFunc(){
    clearScreen();
    searchHistoryImage();
    searchHistoryBooks();
}

function clearScreen() {
    topicContainer.textContent = '';
}

function searchMathBooks () {
    var apiUrl = "https://openlibrary.org/subjects/math.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //Function for populating screen with book list
                    displayResources(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}



function searchLiteratureBooks () {
    var apiUrl = "https://openlibrary.org/subjects/literature.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //Function for populating screen with book list
                    displayResources(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}


function searchScienceBooks () {
    var apiUrl = "https://openlibrary.org/subjects/science.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //Function for populating screen with book list
                    displayResources(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}


function searchHistoryBooks () {
    var apiUrl = "https://openlibrary.org/subjects/history.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //Function for populating screen with book list
                    displayResources(data);
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
function displayResources(data) {
    var resourcesContainerEl = document.createElement('div');
    var resourcesHeaderEl = document.createElement('h3');
    var bookListEl = document.createElement('ul');
    
    resourcesHeaderEl.textContent = 'Recommended Books:';;

    resourcesContainerEl.classList = 'resources-container';
    resourcesHeaderEl.classList = 'resources-header';
    bookListEl.classList = 'book-list-ul';


    var bookArray = [0,1,2,3,4,5,6,7,8,9,10,11];
    for (var i = 0; i < bookArray.length; i++) {
        var bookListItemEl = document.createElement('li');
        bookListItemEl.textContent = data.works[i].title;
        bookListItemEl.classList = 'book-list-item';
        bookListEl.appendChild(bookListItemEl);
    }

    resourcesHeaderEl.appendChild(bookListEl);
    resourcesContainerEl.appendChild(resourcesHeaderEl);
    topicContainer.appendChild(resourcesContainerEl);
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


