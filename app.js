const fs = require('fs');
const path = require('path');

fs.readFile('text.txt', 'utf-8', (err, data) => {
    console.log(data);
})
console.log('-------------')
let text = fs.readFileSync('text2.txt', 'utf-8');
console.log(text);

fs.readdir('lala', (err,data) => {
    console.log(data);
    data.forEach(file => {
        console.log(file+'\t\t'+path.extname(file)+'\t\t'+fs.statSync('lala/'+file).size+'B');
    });
});

fs.writeFile('wrtext.txt', 'Текст для записи', (err) => {
    if (err) console.log(err);
});

fs.writeFile('lala/wrtext.txt', 'Текст для записи', (err) => {
    if (err) console.log(err);
});