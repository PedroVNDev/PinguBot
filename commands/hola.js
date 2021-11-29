module.exports = {
    name: 'hola',
    description: "Esto es un mensaje de hola",
    execute(message, args){
        message.channel.send('Hola como estas ' + message.author.username);
    }
}