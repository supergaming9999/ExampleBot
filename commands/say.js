module.exports = {
  name: "say",
  aliases: ["s"],
  description: "Make me say something!",
  run: async (client, message, args) => {
    if (!args.length || !args[0]) return message.reply('Give me something to say!');
    message.channel.send(args.join(" ")).then(() => message.delete().catch(console.error));
  }
}