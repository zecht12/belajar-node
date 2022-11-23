const { tulispertanyaan, simpan } = require('./contacts.js');

const main = async () => {
  const nama = await tulispertanyaan('masukkan nama anda :');
  const email = await tulispertanyaan('masukkan email anda :');
  const nohp = await tulispertanyaan('masukkan nohp anda :');

  simpan( nama, email, nohp );

};

main();
