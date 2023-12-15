function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (hours >= 12) {
        console.log(`${hours}:${minutes}:${seconds} PM`);
    } else {
        console.log(`${hours}:${minutes}:${seconds} AM`);
    }
    // console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(getCurrentTime, 1000);