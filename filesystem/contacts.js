//readline
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dirpath = './data';
if(!fs.existsSync(dirpath)){
  fs.mkdirSync(dirpath);
}

const data = './data/contact.json';
if(!fs.existsSync(data)){
  fs.writeFileSync(data, '[]', 'utf8');
}

const tulispertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan,(nama) =>{
      resolve(nama);
    });
  });
};

const simpan = ( nama, email, nohp ) => {
    const contact = { nama, email, nohp };
    const file = fs.readFileSync('data/contact.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('data/contact.json',JSON.stringify(contacts));
    console.log('terima kasih');
    rl.close();
}

module.exports = { tulispertanyaan, simpan };