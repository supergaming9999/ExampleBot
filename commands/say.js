const { Client, Message } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ["s"],
  description: "Make me say something!",
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  run: async (client, message, args) => {
    if (!args.length) return message.reply('Give me something to say!');
    message.channel.send({ content: args.join(" ") }).then(() => message.delete().catch(console.error));
  }
}