var mathButton= document.querySelector('.math-button');
var literatureButton= document.querySelector('.literature-button');
var scienceButton= document.querySelector('.science-button');
var historyButton = document.querySelector('.history-button');
var topicContainer = document.querySelector('.topic-container');

// Event listeners
mathButton.addEventListener('click', searchMath);
literatureButton.addEventListener('click', searchLiterature);
scienceButton.addEventListener('click', searchScience);
historyButton.addEventListener('click', searchHistory);

function searchMath () {
    var apiUrl = "https://openlibrary.org/subjects/math.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //put function for populating screen here
                    topicContainer.textContent = '';
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



function searchLiterature () {
    var apiUrl = "https://openlibrary.org/subjects/literature.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //put function for populating screen here
                    topicContainer.textContent = '';
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


function searchScience () {
    var apiUrl = "https://openlibrary.org/subjects/science.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //put function for populating screen here
                    topicContainer.textContent = '';
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


function searchHistory () {
    var apiUrl = "https://openlibrary.org/subjects/history.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //put function for populating screen here
                    topicContainer.textContent = '';
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

