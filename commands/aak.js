module.exports = {
    name: 'aak',
    description: "muestra un mensaje al decir aak",
    execute(message, args){
        message.channel.send('Dijiste aak ' + '<:rage:913942957294506036>');
    }
}