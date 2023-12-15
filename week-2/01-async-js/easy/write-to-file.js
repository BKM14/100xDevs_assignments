const fs = require('fs');
fs.writeFile('hello.txt', 'hello', (err) => {
    if(err) {
        throw err;
    }
    console.log("Write successful");
})

let a = 0;
for (let i = 0; i < 100; i++) {
    a++;
}
console.log(a);