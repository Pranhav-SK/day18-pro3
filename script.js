// script.js
window.onload = function() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random/10';

    // Function to fetch data from the API
    function fetchData() {
        return new Promise((resolve, reject) => {
            fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    // Function to display dog images on the webpage
    function displayDogImages(images) {
        const dogImagesContainer = document.getElementById('dog-images');
        images.forEach(image => {
            const imageElement = document.createElement('div');
            imageElement.classList.add('col-md-4', 'mb-3');

            const imageContent = `
                <img src="${image}" class="img-fluid" alt="Dog Image">
            `;
            imageElement.innerHTML = imageContent;
            dogImagesContainer.appendChild(imageElement);
        });
    }

    // Fetch data and display dog images on the webpage
    fetchData()
    .then(data => displayDogImages(data.message))
    .catch(error => console.error('Error fetching data:', error));
};
