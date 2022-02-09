fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let dogData = data;

        dogImg = document.createElement('img')
        dogImg.setAttribute('src', `${dogData.message}`)

        const dogWrapper = document.querySelector('#dogWrapper');
        dogWrapper.append(dogImg);
    })
