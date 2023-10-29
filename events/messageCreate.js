const { Client, Message } = require("discord.js");

/**
 * Runs when a message is sent in discord
 * @param {Client} client The Discord Bot Client
 * @param {Message} message The Message
 */
exports.run = async (client, message) => {
    if (message.author.bot) return;

    const { prefix } = client.config;

    if (!message.content.startsWith(prefix)) return;

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0].slice(prefix.length).toLowerCase();
    const args = messageArray.slice(1);
    const command =
        client.commands.get(cmd) ||
        client.commands.find((c) => c.aliases.includes(cmd));
    
    if (!command) return;
    
    try {
        await command.run(client, message, args);
    } catch (error) {
        console.log(error);
    }
}
