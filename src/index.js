console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    let allBreeds = []
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

    const dropDown = document.getElementById('breed-dropdown')
    const dogBreedOptions = document.getElementsById('dog-breeds')
    const imgContainer = document.getElementById('dog-image-container')
    dogBreedOptions.addEventListener('click', function(event))
  })

    dropDown.addEventListener('change', (event) => {
        const selection = event.target.value
        const selectedBreeds = allBreeds.filter((breed) => breed.startWith(letter))
        dogBreedOptions.innerHTML = createDogList(selectedBreeds)
    })

  function fetchdogs(){
      fetch(imageURL, {mehtod: 'GET'})
      .then(resp => resp.json())
      .then(dogImgData) => {
          dogImgData.message.forEach(function(imgUrl) {
            imgContainer.innerHTML += '<img src="${imgUrl}">'
          })
    const dogImg = dogImgData.message.map((imgUrl) => {
        return '<img src="${imgUrl}">'
    })
      
  })

fetch(breedUrl, {method: 'GET'})
.then((resp) => resp.json())
.then{(data) => {
    allBreed.Object.keys(breedData.message)
    dogBreedUl.innerHTML = newDogList(allBreeds)
    })

function newDogList(dogBreedArray) {
    const dogLiStringArray = dogBreedArray.map(function(breed) {
        return `<li>${breed}</li>`
    })

    return dogLiStringArray.join('')
}
