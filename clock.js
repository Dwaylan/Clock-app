console.log('Hello world')

// const clock = document.querySelector(.clock)

const tick = () =>{
    // Creating a new date variable for every new second
    const now = new Date();
    // Creating a variable to convert milliseconds to hours
    const hours = now.getHours()
    console.log(hours)
}
// Using the setInterval method to tick for every 1000 milliseconds or 1 second
setInterval(tick, 1000)