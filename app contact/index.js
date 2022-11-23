const { argv } = require("yargs");
const yargs = require("yargs");
const yargsParser = require("yargs-parser");
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'menambah contact',
    builder: {
        nama: {
            describe: 'masukkan nama lengkap',
            demmandOption: true,
            type: 'string',
        },
        email: {
            describe: 'masukkan email',
            demmandOption: false,
            type: 'string',
        },
        nohp: {
            describe: 'masukkan nohp',
            demmandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpan( argv.nama, argv.email, argv.nohp );
    },
}).demandCommand();

yargs.command({
    command: 'list',
    describe: 'menampilkan contact',
    handler() {
        contacts.listcontact();
    },
});

yargs.command({
    command: 'detail',
    describe: 'menampilkan detail contact',
    builder: {
        nama: {
            describe: 'masukkan nama lengkap',
            demmandOption: true,
            type: 'string',
        },
    },
    handler() {
        contacts.detailcontact(argv.nama);
    },
});

yargs.command({
    command: 'hapus',
    describe: 'menghapus contact contact',
    builder: {
        nama: {
            describe: 'masukkan nama lengkap',
            demmandOption: true,
            type: 'string',
        },
    },
    handler() {
        contacts.hapuscontact(argv.nama);
    },
});

yargs.parse();