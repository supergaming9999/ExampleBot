const { EmbedBuilder, Client, Message } = require('discord.js');

module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Sends a list of all commands and their descriptions",
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const helpEmbed = new EmbedBuilder()
            .setTitle("Help")
            .setDescription(client.commands.map(cmd => `**${cmd.name}**${cmd.aliases.length ? `(${cmd.aliases.join(', ')})` : ''} - ${cmd.description}`));

        message.reply({ embeds: [helpEmbed] });
    }
}