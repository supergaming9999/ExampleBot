exports.run = async (client, message, args) => {
  if (!args[0]) return message.reply('Give me something to say!');;
    message.channel.send(args.join(" "));

    message.delete();
	
}

module.exports.config = {
    name: "say",
    aliases: []
}