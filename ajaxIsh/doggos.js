const doggos = document.querySelector(".doggos");
const dogBreedsUrl = "https://dog.ceo/api/breeds/list/all"

function addNewDog() {

    let selectElement = document.querySelector(".select-breed")
    let selectedBreed = selectElement.value
    const dogUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`

    const promise = fetch(dogUrl)
    promise.then(function(response) {
        const processingPromise = response.json()
        return processingPromise
    }).then(function(processedResponse) {
        const img = document.createElement("img")
        img.src = processedResponse.message
        img.alt = "Random dog"
        doggos.append(img)
    })
    
}

function fetchBreeds() {
    const promise = fetch(dogBreedsUrl)

    promise.then(function(resp) {
        const processingPromise = resp.json()
        return processingPromise
    }).then(function(processedPromise) {
        const allBreeds = Object.keys(processedPromise.message)
        const select = document.createElement("select")
        select.className = "select-breed"
        doggos.append(select)

        allBreeds.forEach(element => {
            let option = document.createElement("option")

            option.value = element
            option.text = element
            select.appendChild(option)
        })
    })
}

fetchBreeds()

document.querySelector(".add-dog").addEventListener("click", addNewDog)