// This form contains the code for the contact form

let form = document.getElementById('contactForm')
let submitButton = document.getElementById('contactFormButton')
let formName = document.getElementById("name")
let formEmail = document.getElementById("email")
let formBusinessName = document.getElementById("businessName")
let formService = document.getElementById("Service")
let formMessage = document.getElementById("messageBody")
let loader = document.getElementById("loader")

let loaderFinished = document.getElementById("loaderFinished")

const showLoader = () => {
    loader.style.display = "block"
}

const hideLoader = () => {
    loader.style.display = "none"
}

// This can be removed, only for when no API/file is connected to the form
const showMessage = () => {
    loaderFinished.style.display = "block"
    loader.style.display = "none"
    setTimeout(() => {
        loaderFinished.style.display = "none"
        clearForm(formName,formEmail,formBusinessName,formService,formMessage)
    }, 3000);
}

const clearForm = (a, b, c, d, e) => {
    a.value = ""
    b.value = ""
    c.value = ""
    d.value = ""
    e.value = ""
}

// Add the url or php file as a parameter below as well as within the submitHandler function when you are connecting the api
const sendMessage = () => {
    setTimeout(() => {
        showMessage()
    }, 3000)

    // This does nothing but make it look nice when viewing without an api, so delete or comment this when you are setting it up



    ////////////////////////////////////////////////////////
    // The asyncronous code for sending the message is below
    // I recommend also sending a key, or something along with this for security reasons

    // let rawRequestData = [formName.value, formEmail.value, formBusinesName.value, formService.value, formMessage.value]
    // let requestData = JSON.stringify(rawRequestData)
    // var xhttp = new XMLHttpRequest()
    // xhttp.open("POST", url, true)
    // xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    // xhttp.send(requestData)
    // xhttp.onload = function () {
    // 
    //     // You can add more functions here when the request is completed
    //     if(xhttp.status !== 200 || xhttp.status !== 201){
    //         console.log("There was an error sending the message. Please check your api call.")
    //     }
    //     else {
    //         hideLoader()
    //         clearForm(formName,formEmail,formBusinessName,formService,formMessage)
    //         console.log("Message successfully sent!")
    //     }
    // }
}

function submitHandler(e) {
    e.preventDefault()
    showLoader()
    sendMessage()
}