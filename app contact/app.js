const fs = require('fs');

//menulis string secara sinkron
try {
    
} catch (error) {
    console.log(error)
}
fs.writeFileSync('data/hi.txt','hello guys');

fs.writeFile('data/test.txt','hello world', (error)=>{
    console.log(error)
});
const foo = fs.readFileSync('data/hi.txt');
console.log(foo.toString());

const data = fs.readFile('data/test.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });