const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date(); // Date object: Enables basic storage and retrieval of dates and times
    const seconds = now.getSeconds(); //Gets the seconds of a Date object, using local time.
    const secondsDegrees = ((seconds / 60) * 360) + 90; // convert second to degree, ex. 100% = 360. divide seconds by 60 to get percentage and then multiply to 360 to get degrees
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hours = now.getTime();
    const hoursDegrees = ((minutes / 12) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // handler: setDate, timeout: 1000 (every second);