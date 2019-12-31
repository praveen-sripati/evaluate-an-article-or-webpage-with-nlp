

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
        })
    } else {
        console.log('Please enter a valid url');
        alert('Please enter a valid URL');
    }

}

export { handleSubmit }
