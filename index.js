// ServiceWorker registration

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')

        .then(registration => {
            console.log('sw registered');
            console.log(registration);
        }).catch(error => {
            console.log('sw reg fail');
            console.log(error);
        })
} else {
    //browser does not support service worker
    alert('PWA not supported')
    //do non pwa stuff here
}


fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let dogData = data;
        const mainWrapper = document.querySelector('main');

        dogImg = document.createElement('img')
        dogImg.setAttribute('src', `${dogData.message}`)

        const dogWrapper = document.querySelector('#dogWrapper');
        dogWrapper.prepend(dogImg);

        const getDogBtn = document.createElement('button')
        getDogBtn.addEventListener('click', function () {
            location.reload()
        });
        getDogBtn.innerText = "Se en anden hund"

        mainWrapper.prepend(getDogBtn);
    })
    .catch((error) => {
        const wrapper = document.querySelector('#dogWrapper')
        const dogCaption = document.createElement('figcaption')


        let offlineText = document.createElement('h2')
        offlineText.innerText = "Årh nej!! Du er offline!"

        dogCaption.append(offlineText)

        const offlineImg = document.createElement('img')
        offlineImg.setAttribute('src', './assets/images/Logo512.png')

        wrapper.append(dogCaption, offlineImg)
        // console.log(error);
    })