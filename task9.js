//9
var divElement = document.getElementById('myDiv')
function getAndPrintNumAndColor() {
    var userColor = prompt('enter color')
    var num = +prompt('enter num')
    for (var i = 0; i < num; i++) {
        divElement.innerHTML += `<span>${userColor}</span>`
    }
}
// getAndPrintNumAndColor()
//10
function getTextAndTagAndBuilt() {
    var userText = prompt('enter text')
    var tagUser = prompt('enter tag')
    divElement.innerHTML += `<${tagUser}>${userText}</${tagUser}>`
}
// getTextAndTagAndBuilt()
//11
function createInputType() {
    var userInput = prompt('enter type input')
    divElement.innerHTML += `<input type=${userInput}>`
}
// createInputType()
//12
function changeTextOfClass(myClass, SOMEtext) {
    var arrayClass = divElement.getElementsByClassName(`${myClass}`)
    for (var i = 0; i < arrayClass.length; i++) {
        arrayClass[i].innerHTML = `${SOMEtext}`;
    }
}
// changeTextOfClass(`aa`,"text")
//13
function getSpanWithTextToPtag() {
    var pArray = document.getElementsByTagName("p");
    for (var i = 0; i < pArray.length; i++) {
        pArray[i].innerHTML += "<span>something</span>";
    }
}

// getSpanWithTextToPtag()
//14
function getDetailsAndPrint() {
    var userName = prompt('enter name')
    var familyname = prompt('enter familyname')
    var age = +prompt('enter age')
    if (age < 18) {
        divElement.innerHTML += `<p>${userName}</p>`
        divElement.innerHTML += `<p>${familyname}</p>`
        divElement.innerHTML += `<p>${age}</p>`
    }
    else {
        divElement.innerHTML += `<p>${userName}</p>`
        divElement.innerHTML += `<input>`
        divElement.innerHTML += `<p>${familyname}</p>`
        divElement.innerHTML += `<input>`
        divElement.innerHTML += `<p>${age}</p>`
        divElement.innerHTML += `<input>`
    }


}
// for(var i=0;i<3;i++)
// {
//     var userName=prompt('enter name')
//     document.body.innerHTML+=`<p>${userName}</p>`
// }
// getDetailsAndPrint()
//15
function makeMovieObject() {
    var movie = {}
    movie.name = prompt('name movie')
    movie.numViews = prompt('number viewers')
    movie.year = prompt('enter year')
    movie.image = prompt('enter image link')
    divElement.innerHTML += `<h1>name of movie: ${movie.name}</h1>
    <h2> numViews:${movie.numViews} </h2>
    <p> year:${movie.year}</p>
    <img src=${movie.image}>`
}
// makeMovieObject()
//16
function objectWorker() {
    var workerObject = {}
    workerObject.firstName = prompt('name')
    workerObject.lastName = prompt('lastName')
    workerObject.email = prompt('email')
    workerObject.ClassWorker = prompt('ClassWorker')
    var hisNameElement = divElement.innerHTML += `<h1>${workerObject.firstName}</h1>`
    var hislastNamElement = divElement.innerHTML += `<h2>${workerObject.lastName}</h2>`
    var hisemailElement = divElement.innerHTML += `<p>${workerObject.email}</p>`
    var hisClassWorkerElement = divElement.innerHTML += `<p>${workerObject.ClassWorker}</p>`
}

// objectWorker()

//17
function getNumCreareObject() {
    var num = prompt('num')
    var buildingObject = {}
    for (var i = 0; i < num; i++) {
        buildingObject.name = prompt('name')
        buildingObject.kablan = prompt('adress')
        buildingObject.company = prompt('numClasses')
        buildingObject.floors = prompt('workers')
        buildingObject.apartment = prompt('apartment')
        var buildingElement = divElement.innerHTML += `<h1>name: ${buildingObject.name}</h1>
        <p>kablan: ${buildingObject.kablan}</p>
        <p>company:${buildingObject.company}</p>
        <p>floors:${buildingObject.floors}</p>
        <p>apartment:${buildingObject.apartment}</p>
        `
    }
}
// getNumCreareObject()
//18
function getNumCreareObjectOfStores() {
    var num = prompt('num')
    var storesObject = {}
    for (var i = 0; i < num; i++) {
        storesObject.name = prompt('name')
        storesObject.adress = prompt('adress')
        storesObject.numClasses = prompt('numClasses')
        storesObject.numWorkers = +prompt('workers')
        if (storesObject.numWorkers > 10) {
            var buildingElement = divElement.innerHTML += `<h1>name: ${storesObject.name}</h1>
            <p>adress: ${storesObject.adress}</p>
            <p>numClasses:${storesObject.numClasses}</p>
            <p>numWorkers:${storesObject.numWorkers}</p>
            `
        }

    }
}
// getNumCreareObjectOfStores()
//19

