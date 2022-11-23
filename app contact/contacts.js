//readline
const fs = require('fs');
const { resolve } = require('path');
const chalk = require('chalk');
const validator = require('validator');

const dirpath = './data';
if(!fs.existsSync(dirpath)){
  fs.mkdirSync(dirpath);
};

const data = './data/contact.json';
if(!fs.existsSync(data)){
  fs.writeFileSync(data, '[]', 'utf8');
};
const loadcontact = () => {
  const file = fs.readFileSync('data/contact.json', 'utf8');
  const contacts = JSON.parse(file);
  return contacts;
};

const simpan = ( nama, email, nohp ) => {
    const contact = { nama, email, nohp };
    const contacts = loadcontact();

    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat) {
      console.log(chalk.red.inverse.bold('contact sudah terdaftar, gunakan nama lain.')
      );
      return false;
    }

    if(email) {
      if(!validator.isEmail(email)) {
        console.log(chalk.red.inverse.bold('email tidak valid.')
        );
          return false;
      };
    }
    if(!validator.isMobilePhone(nohp, 'id-ID')) {
      console.log(chalk.red.inverse.bold('nohp tidak valid.')
      );
        return false;
    };

    contacts.push(contact);

    fs.writeFileSync('data/contact.json',JSON.stringify(contacts));

    console.log(chalk.green.inverse.bold('terima kasih'));
};

const listcontact = () => {
  const contacts = loadcontact();
  console.log(chalk.cyanBright.inverse.bold('ini listnya'));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.nohp}`);
  });
};

const detailcontact = (nama) => {
  const contacts = loadcontact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
  if(!contact) {
    console.log(chalk.red.inverse.bold(`${nama} nama tidak valid`));
    return false;
  }

  console.log(chalk.cyanBright.inverse.bold(contact.nama));
  console.log(chalk.cyanBright.inverse.bold(contact.nohp));
  if(contact.email) {
    console.log(contact.email);
  };
};

const hapuscontact = (nama) => {
  const contacts = loadcontact();
  const newcontact = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );
  
  if(contacts.length === newcontact.length) {
    console.log(chalk.red.inverse.bold(`${nama} nama tidak valid`));
    return false;
  }

  fs.writeFileSync('data/contact.json',JSON.stringify(newcontact));

  console.log(chalk.green.inverse.bold(`${nama} nama berhasil dihapus`));
};


module.exports = { simpan, listcontact, detailcontact, hapuscontact };
