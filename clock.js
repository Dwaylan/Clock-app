console.log('Hello world')

const clock = document.querySelector('.clock')

const tick = () =>{
    // Creating a new date variable for every new second
    const now = new Date();

    // Creating a variable to convert milliseconds to hours
    const hours = now.getHours()

    // Creating a variable to convert milliseconds to minutes
    const minutes = now.getMinutes()

    // Creating a variable to convert milliseconds to seconds
    const seconds = now.getSeconds()

    // Creating an HTML template with template literals to append the time to the DOM
    const html = `
        <span>${hours}</span> :
        <span>${minutes}</span> :
        <span>${seconds}</span>
    `
    // injecting the new html template to the DOM html
    clock.innerHTML = html
}
// Using the setInterval method to tick for every 1000 milliseconds or 1 second
setInterval(tick, 1000)