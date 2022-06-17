let breeds = []
document.addEventListener('DOMContentLoaded', function () {

loadsPage()
loadBreed()
})

const loadsPage = () => {
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(results => {
    results.message.forEach(image => addImage(image))
})
}

const addImage = (dogUrl) => { 
    let container =document.querySelector('#image-container')
    let newImageEl = document.createElement('img')
    newImageEl.src = dogUrl
    container.appendChild(newImageEl)


}

const loadBreed = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(results => {
        breeds = Object.keys(results.message)
        updateBreedList(breeds)
        addBreedSelectListener()
    })

}

const updateBreedList = (breeds) => {
    let ul = document.querySelector('dog#breeds')
    removeChildren(ul)
    breeds.forEach(breed => addBreed(breed))
}
const removeChildren= (element) => {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  const selectBreedsStartingWith = (letter) => {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  const addBreedSelectListener= () => {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  const addBreed = (breed) => {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  const updateColor = (event) => {
    event.target.style.color = 'palevioletred';
  }