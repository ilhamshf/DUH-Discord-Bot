let discord = require('discord.js');
const roleClaim = require('./role-claim')

module.exports = client => {
  console.log('Tersambung.');
  roleClaim(client)
}