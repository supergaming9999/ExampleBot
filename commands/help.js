const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: "help",
    aliases: [],
    description: "Sends a list of all commands and their descriptions",
    run: async (client, message, args) => {
        var commands = client.commands.array();
        const helpEmbed = new MessageEmbed()
            .setTitle("Help")
            .setDescription(commands.map(cmd => `**${cmd.name}**${cmd.aliases.length ? `(${cmd.aliases.join(', ')})` : ''} - ${cmd.description}`));
        message.channel.send(helpEmbed);
    }
}