const { CommandInteraction, InteractionType, Client } = require('discord.js');

/**
 * Runs when an interaction is requested
 * @param {Client} client The Discord Bot Client
 * @param {CommandInteraction} interaction The Interaction
 */
exports.run = async (client, interaction) => {
    if (interaction.type != InteractionType.ApplicationCommand) return;

	const slashCommand = client.slashCommands.get(interaction.commandName);

    if (!slashCommand) return client.slashCommands.delete(interaction.commandName);

    const { config } = client;

    try {
        await slashCommand.run(client, interaction, config);
    } catch (error) {
            console.log(error);
    }
};