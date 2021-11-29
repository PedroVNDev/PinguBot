module.exports = {
    name: 'youtube',
    description: "Muestra mi canal de Youtube",
    execute(message, args){
        message.channel.send('Mi canal de youtube: https://www.youtube.com/c/PinguExtremoYoutube');
    }
}