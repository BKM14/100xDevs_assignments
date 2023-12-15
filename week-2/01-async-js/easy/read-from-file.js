const fs = require('fs');
fs.readFile('3-read-from-file.md', 'utf-8', (err, data) => {
    console.log(data);
})

let a = 0;
for (let i = 0; i < 100000000; i++) {
    a++;
}
console.log(a);