let count = 0;

function increaseCount() {
    count++;
    console.log(count);
}

setInterval(increaseCount, 1000);