// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// Bot Config! #Prefix & Token
const config = require('./config.json');

// The token of your bot - https://discordapp.com/developers/applications/me
// const token = '(token)';

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
// Set Bot Status
  bot.user.setGame('Prefix: [!] help for commands');
});
