const { REST, PermissionsBitField, Routes } = require("discord.js");
const fs = require("fs");
const config = require("../config.json");
const { join } = require("path");
const { client_id, guild_id, token } = config;

const rest = new REST({ version: '10' }).setToken(token);

module.exports = (client) => {
    if (!client_id || isNaN(client_id))
        return console.log("Your config does not have the bot's CLIENT ID so slash commands will not be registered.");

    const slashCommands = [];

    const files = fs.readdirSync(join(__dirname, "..", "slashCommands")).filter(file => file.endsWith('.js'));

    for (const file of files) {
            const slashCommand = require(`../slashCommands/${file}`);
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

    (async () => {
            try {
                await rest.put(
                    guild_id ?
                    Routes.applicationGuildCommands(client_id, guild_id) :
                    Routes.applicationCommands(client_id), 
                    { body: slashCommands }
                );
            } catch (error) {
                console.log(error);
            }
    })();
}