const fs = require('fs');

module.exports = (client) => {
    fs.readdir('commands/', (err, files) => {

        if (err) console.log(err);
    
        const commandFiles = files.filter(name => name.split('.').pop() === 'js');
        if (commandFiles.length <= 0) {
            return console.log('Bot Couldn\'t Find Commands in commands Folder.');
        }
    
        commandFiles.forEach((file) => {
            const command = require(`../commands/${file}`);
            client.commands.set(command.name, command);
        });
    });
}