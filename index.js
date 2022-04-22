const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const { loadCommands } = require('./utils/loadCommands');
const { loadEvents } = require("./utils/loadEvents");

client.config = config;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadEvents(client);
loadCommands(client);

client.login(config.token);
