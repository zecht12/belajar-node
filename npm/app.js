const validator = require('validator');
const chalk = require('chalk')


const { default: isEmail } = require('validator/lib/isemail');
console.log(validator.isEmail('gilangprimae13@gmail.com'));
console.log(validator.isMobilePhone('085865130221', 'id-ID'));

console.log(chalk.bgBlue.italic('Hello world!'));
const nama = 'gilang'
const logo = chalk`nama saya : {bgRed.black ${nama}}`;
console.log(logo);

