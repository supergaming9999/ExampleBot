const fs = require('fs');

module.exports = (client) => {
    fs.readdir('events/', (err, files) => {

        if (err) console.log(err);

        const eventFiles = files.filter(name => name.split('.').pop() === 'js');
        if (eventFiles.length <= 0) {
            return console.log('Couldn\'t Find Events in events Folder.');
        }

        eventFiles.forEach((file) => {
            const event = require(`../events/${file}`);
            const name = file.split('.')[0];
            client.on(name, (...args) => event.run(client, ...args));
        });
    });
}