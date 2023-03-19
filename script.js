let animal_choose = document.querySelector("select"); // Retrieval of the animal chosen by the user
console.log(animal_choose.value)
// Initialization of a variable "choise" intended to recover the chosen animal
let choise = ''

// Event on click (when the user presses the button)
btn.onclick = (event) => {
    animal_choose.addEventListener('change',function (){
        choise=animal_choose.value
        console.log(choise);
    })

    // Change content of the button to "AN OTHER ?"
    const txtBtn = document.getElementById("btnTxt")
    txtBtn.innerHTML = "AN OTHER ?"

    // Make the show button and its contents disappear until the button is pressed
    const showImg = document.getElementById("dl")
    showImg.style=""
    const content = document.getElementById("content")
    content.style=""

    // In case the chosen option is "Shibes" :
    if (animal_choose.value==="Shibes"){
        
        // Call the fetchPhotos function, which returns a fetch(url) **
        fetchPhotos()
        .then((response) =>{
            console.log('httpResponse: ', response)
            return response.json()
        })
        .then((animalPict) => {
            console.log(animalPict)
            const image = animalPict[0]
            console.log(image)
            // Insert the image link in the src of the image whose id is "picture"
            document.getElementById("picture").src=image;
            document.getElementById("dl").href=image
        })
        // Catch the error if there is one, and display it in the console
        .catch(err => console.log(err));
        
        // **
        function fetchPhotos() {
            // This url correspond of Shibes' pictures
            return fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
        }
    }

    // In case the chosen option is "Cats" :
    else if (animal_choose.value==="Cats"){

        // Call the fetchPhotos function, which returns a fetch(url) **
        fetchPhotos()
        .then((response) =>{
            console.log('httpResponse: ', response)
            return response.json()
        })
        .then((animalPict) => {
            console.log(animalPict)
            const image = animalPict[0]
            console.log(image)
            // Insert the image link in the src of the image whose id is "picture"
            document.getElementById("picture").src=image;
            document.getElementById("dl").href=image
        })
        // Catch the error if there is one, and display it in the console
        .catch(err => console.log(err));

        // **
        function fetchPhotos() {
            // This url correspond of Cats' pictures
            return fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
        }
    } 

    // In case the chosen option is "Birds" :
    else if (animal_choose.value==="Birds"){

        // Call the fetchPhotos function, which returns a fetch(url) **
        fetchPhotos()
        .then((response) =>{
            console.log('httpResponse: ', response)
            return response.json()
        })
        .then((animalPict) => {
            console.log(animalPict)
            const image = animalPict[0]
            console.log(image)
            // Insert the image link in the src of the image whose id is "picture"
            document.getElementById("picture").src=image;
            document.getElementById("dl").href=image
        })
        // Catch the error if there is one, and display it in the console
        .catch(err => console.log(err));

        // **
        function fetchPhotos() {
            // This url correspond of Birds' pictures
            return fetch('http://shibe.online/api/birds?count=1&urls=true&httpsUrls=false')
        }
    }

}











