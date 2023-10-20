const dogImage = document.getElementById('dogImage');
const newDogButton = document.getElementById('newDogButton');

function fetchRandomDog() {
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;
            dogImage.src = imageUrl;
        })
        .catch(error => console.error('Error fetching random dog:', error));
}

newDogButton.addEventListener('click', fetchRandomDog);
fetchRandomDog(); 