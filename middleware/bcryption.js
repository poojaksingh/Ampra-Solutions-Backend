let bcrypt = require('bcryptjs');

cipherText = (password) => {
    return bcrypt.hash(password, 10);
}

decipherText = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = { cipherText, decipherText }