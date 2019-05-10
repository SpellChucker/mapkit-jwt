const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = '<Apple_Private_Key_File>';
const teamId = '<Apple_Team_Id>';
const keyId = '<Apple_Key_Id>';

// 1 year expiration
var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 365);
console.log(Math.floor(expireDate));

var privateKeyData = fs.readFileSync(privateKey);

var token = jwt.sign({ iss: teamId, iat: Math.floor(Date.now() / 1000) - 30, exp: Math.floor(expireDate) }, privateKeyData, { algorithm: 'ES256', header: { alg: 'ES256', kid: keyId, typ: 'JWT' } });

console.log(token);
