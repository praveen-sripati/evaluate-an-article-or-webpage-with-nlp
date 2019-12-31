

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const urlCheck = Client.checkURL(formText)

    if(urlCheck) {
        console.log("::: Form Submitted :::")

        fetch("http://localhost:8081/test", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: formText})
        })
        .then( res => res.json())
        .then(function(data) {
            console.log('response found')
            console.log(data);
            updateUI(data);
        })
    } else {
        console.log('Please enter a valid url');
        alert('Please enter a valid URL');
    }
}

function updateUI(data) {
    (data.title !== '' ? document.getElementById('title').innerHTML = data.title : document.getElementById('title').innerHTML = "Not Available");
    (data.author !== '' ? document.getElementById('author').innerHTML = data.author : document.getElementById('author').innerHTML = "Not Available");
    if (data.image !== '') {
        const image = document.getElementById('image');
        const imageContainer = document.querySelector('.image-container');
        imageContainer.setAttribute('style', 'display:flex; flex-flow: column nowrap');
        document.getElementById('not-available').innerHTML = "";
        image.setAttribute('src', data.image);
        image.setAttribute('width','330px');
    } else {
        const image = document.getElementById('image');
        const imageContainer = document.querySelector('.image-container');
        imageContainer.setAttribute('style', 'display:flex; flex-flow: row nowrap;');
        if (image.hasAttribute('src') && image.hasAttribute('width')) {
            image.removeAttribute('src');
            image.removeAttribute('width');
        }
        document.getElementById('not-available').innerHTML = "Not Available";
    }
    (data.article !== '' ? document.getElementById('article').innerHTML = data.article : document.getElementById('article').innerHTML = "Not Available");
    (data.videos.length !== 0 ? document.getElementById('videos').innerHTML = data.videos : document.getElementById('videos').innerHTML = "Not Available");
    (data.publishDate !== '' ? document.getElementById('publishDate').innerHTML = data.publishDate : document.getElementById('publishDate').innerHTML = "Not Available");
}

export { handleSubmit }
