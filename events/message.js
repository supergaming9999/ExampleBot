exports.run = async (client, message) => {
    if (message.author.bot) return;

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    const prefix = client.config.token;

    if (!message.content.startsWith(prefix)) return;
    const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    commandfile.run(client, message, args);
}