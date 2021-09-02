const fs = require('fs');

function loadEvents(client) {
    fs.readdir('events/', (err, files) => {

        if (err) console.log(err);

        const jsfile = files.filter(f => f.split('.').pop() === 'js');
        if (jsfile.length <= 0) {
            return console.log('Couldn\'t Find Events in events Folder.');
        }

        jsfile.forEach((f, i) => {
            const pull = require(`../events/${f}`);
            const name = f.split('.')[0];
            client.on(name, (...args) => pull.run(client, ...args));
        });
    });
}

module.exports = {
    loadEvents
}