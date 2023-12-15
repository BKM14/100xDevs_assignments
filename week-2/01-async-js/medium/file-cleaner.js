const fs = require('fs');
fs.readFile('test.txt', 'utf-8', (err, data) => {
    let words = data.split(" ");
    let wordsFormatted = words.filter(removeSpaces);

    function removeSpaces(word) {
        if (!(word == " ")) {
            return word;
        }
    }
    let dataWrite = "";

    wordsFormatted.forEach((word) => {
        dataWrite += word;
        dataWrite += " ";
    })

    fs.writeFile("test.txt", dataWrite, (err) => {
        if (err) throw err;
        console.log("write successful");
    })
})