var mathButton= document.querySelector('.math-button');
var literatureButton= document.querySelector('.literature-button');
var scienceButton= document.querySelector('.science-button');
var historyButton = document.querySelector('.history-button');

// Event listeners
mathButton.addEventListener('click', searchMath);
literatureButton.addEventListener('click', searchLiterature);
// scienceButton.addEventListener('click', searchScience);
// historyButton.addEventListener('click', searchHistory);

function searchMath () {
    var apiUrl = "https://openlibrary.org/subjects/mathemathics.json";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    //put function for populating screen here
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
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
            });
}
