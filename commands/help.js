const Discord = require('discord.js');
client = new Discord.Client();

exports.run = async (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
        .setTitle("Help"),
        .setDescription(`**say** - Make me say something \n**help** - Send this message`)
    message.channel.send(Embed)
}

module.exports.config = {
    name: "help",
    aliases: []
}