const { Client, ActivityType } = require("discord.js");

/**
 * Runs when the bot is logged in and ready
 * @param {Client} client The Discord Bot Client
 */
exports.run = async (client) => {
	console.log(`${client.user.username} Ready!`);
	client.user.setActivity(`${client.config.prefix}help`, {
		type: ActivityType.Watching
	})
};