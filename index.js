const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const { loadCommands } = require('./utils/loadCommands');


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadCommands(client);

client.on('message', async (message) => {
    if (message.author.bot) return;

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);
    
    const prefix = config.prefix;

    if (!message.content.startsWith(prefix)) return;
    const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    commandfile.run(client, message, args);
})

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Games');
});

client.login(config.token);
