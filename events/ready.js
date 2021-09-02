exports.run = async (client) => {
	console.log('Ready!');
	client.user.setActivity('Games');
	console.log("My prefix is '" + client.config.token + "'");
};