const { REST } = require("discord.js");
const fs = require("fs");

const rest = new REST({ version: '10' }).setToken(TOKEN);

module.exports = (client) => {
    const { CLIENT_ID, GUILD_ID } = client.config;
    if (!CLIENT_ID || isNaN(CLIENT_ID))
        return console.log("Your config does not have the bot's CLIENT ID so slash commands will not be registered.");

    const slashCommands = [];

    fs.readdirSync(join(__dirname, "..", "slashCommands/")).forEach(async dir => {
        const files = fs.readdirSync(join(__dirname, "..", "slashCommands", dir)).filter(file => file.endsWith('.js'));

        for (const file of files) {
                const slashCommand = require(`../slashCommands/${dir}/${file}`);
                slashCommands.push({
                    name: slashCommand.name,
                    description: slashCommand.description,
                    type: slashCommand.type,
                    options: slashCommand.options ? slashCommand.options : null,
                    default_member_permissions: slashCommand.default_member_permissions ? PermissionsBitField.resolve(slashCommand.default_member_permissions).toString() : null
                });
            
                if (slashCommand.name) {
                    client.slashCommands.set(slashCommand.name, slashCommand);
                }
        }
        
    });

    (async () => {
            try {
                await rest.put(
                    GUILD_ID ?
                    Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID) :
                    Routes.applicationCommands(CLIENT_ID), 
                    { body: slashCommands }
                );
            } catch (error) {
                console.log(error);
            }
    })();
}