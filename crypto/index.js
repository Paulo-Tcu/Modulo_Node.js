//Atividade em aula

const aes256 = require('aes256');

const senha = 'letscode2022';
const msg = 'Bora Node.js';

const msgCriptografada = aes256.encrypt(senha, msg);

console.log(msgCriptografada);

const msgDescriptigrafada = (
    aes256.decrypt(senha, 'SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA==',)
);

console.log(msgDescriptigrafada);