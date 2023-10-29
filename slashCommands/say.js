const { ApplicationCommandType, ApplicationCommandOptionType, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
	name: 'say',
	description: "Make me say something.",
	type: ApplicationCommandType.ChatInput,
    default_member_permissions: "ManageMessages",
    options: [
        {
            name: "text",
            description: "What do you want me to say?",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    /**
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Object} config 
     */
	run: async (client, interaction, config) => {
        var text = interaction.options.getString("text");
        await interaction.channel.send({ content: text });
        interaction.reply({ content: `Successfully said \`${text}\``, ephemeral: true });
	}
};