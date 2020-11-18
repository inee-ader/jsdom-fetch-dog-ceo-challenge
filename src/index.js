console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const imgPlace = document.querySelector('#dog-image-container')
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const liPlace = document.querySelector('#dog-breeds')
    const menu = document.querySelector('#breed-dropdown')
    // const option = document.querySelectorAll('option')
    

    fetch(imgUrl) 
        .then(function(response) {
            return response.json()
            // console.log(json)
        })
        .then(function(json) {
            // console.log(json.message[0])
            for(let img of json['message']) {
                let pic = document.createElement('img')
                pic.setAttribute('src', img) 
                imgPlace.appendChild(pic)
            }
        })
    
    fetch(breedUrl)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            breeds = json.message
            // console.log(json.message)
            for(let breed in json['message']) {
                let li = document.createElement('li')
                li.innerText = breed
                li.addEventListener('click', function(e) {
                    console.log(e)
                    e.target.style.color = 'red'
                })
                liPlace.appendChild(li)
            }
    })
    menu.addEventListener('change', function(e) {
        // add check to make sure this doesn't fire unless breed list is populated
        const dogBreeds = liPlace.querySelectorAll('li')

            breed.charAt(0) === e.target.value
            console.log(breed)
            console.log(e.target.value)
        })
        
    })

    




})