const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const loadCommands = require('./utils/loadCommands');
const loadEvents = require("./utils/loadEvents");
const loadSlashCommands = require("./utils/loadSlashCommands");

client.config = config;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadEvents(client);
loadCommands(client);
loadSlashCommands(client);

client.login(config.token);