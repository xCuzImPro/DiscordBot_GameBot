// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// Bot Config! #Prefix & Token
const config = require('./config.json');

// The token of your bot - https://discordapp.com/developers/applications/me
// const token = '(token)';

// Uses token from config file to login
bot.login(config.token);
// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
// Set Bot Status
  bot.user.setGame('Prefix: [!] help for commands');
});
// Placeholder message command
const command = {
  'ping' : (msg) => {
    msg.channel.send("Pong!");
  }
}
bot.on('message', (msg) => {
  // Handling message
  if (!msg.content.startsWith(config.prefix)) return;
  if (command.hasOwnProperty(msg.content.split(config.prefix).slice(1)[0])) command[msg.content.split(config.prefix).slice(1)[0]](msg);
});
