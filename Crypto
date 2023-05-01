const crypto = require('crypto');
const fs = require('fs');

function HashedPass(password) {
  const salt = crypto.randomBytes(16).toString('hex'); 
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 16, 'sha512').toString('hex'); 
  return { salt, hash };
}

function HashAndSave(password, filePath) {
  const { salt, hash } = HashedPass(password); 
  const data = JSON.stringify({ salt, hash }); 
  fs.writeFileSync(filePath, data); 
  console.log('Пароль успішно збережено у файлі ' + filePath);
}

function ComparePass(password, filePath) {
  const data = fs.readFileSync(filePath); 
  const { salt, hash } = JSON.parse(data); 
  const inputHash = crypto.pbkdf2Sync(password, salt, 10000, 16, 'sha512').toString('hex');
  const result = inputHash === hash;
  console.log(result  ? `'Паролі співпадають ${String.fromCodePoint(0x1F60F)}'` : `'Паролі не співпадають${String.fromCodePoint(0x1F612)}'`);
  return result;
}



// Отримання параметрів з командного рядка
const args = process.argv.slice(2); 
const command = args[0]; 

if (command === 'hash') {
  const password = args[1]; 
  const filePath = args[2]; 
  try {
    HashAndSave(password, filePath); 
  } catch (error) {
  console.error('Сталася помилка: ', error);
  } 
  }else if (command === 'compare') {
  const password = args[1];
  const filePath = args[2]; 
  try {
  ComparePass(password, filePath); 
  } catch (error) {
  console.error('Сталася помилка: ', error);
  }
  } else {
  console.log('Невідома команда');
  }

 HashAndSave('123', "./password.txt")
 ComparePass('123', "./password.txt")
