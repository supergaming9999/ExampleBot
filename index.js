const config = require("./config.json");
const { GatewayIntentBits, Collection, Client, Partials } = require('discord.js');
const loadCommands = require('./utils/loadCommands');
const loadEvents = require("./utils/loadEvents");
const loadSlashCommands = require("./utils/loadSlashCommands");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});
client.config = config;
client.commands = new Collection();
client.slashCommands = new Collection();

loadEvents(client);
loadCommands(client);
loadSlashCommands(client);

client.login(config.token);