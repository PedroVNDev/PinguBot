// at the top of your file
const { MessageEmbed } = require('discord.js');

let authorImage = 'https://w7.pngwing.com/pngs/824/185/png-transparent-new-penguins-bird-animals-logo-penguin-books.png'
let thumbnail = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c1a01cf-4511-4414-8fcb-f4c8da8897d7/d58h7zb-01c76185-1db7-4b9b-8c11-47ce381b5d7c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFjMWEwMWNmLTQ1MTEtNDQxNC04ZmNiLWY0YzhkYTg4OTdkN1wvZDU4aDd6Yi0wMWM3NjE4NS0xZGI3LTRiOWItOGMxMS00N2NlMzgxYjVkN2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yFi7Hs8-VpkC_ByQ7u7uetD4es0Dv_gOsnz3TMppxic'
let image = 'https://i.etsystatic.com/19011332/r/il/576bbb/2050481115/il_570xN.2050481115_3has.jpg'
let imageFooter = 'https://www.pngall.com/wp-content/uploads/2016/03/Penguin-Transparent.png'

// Inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('#FFA500')
	.setTitle('PinguBot')
	.setURL('canal de youtube')
	//.setAuthor('PinguExtremo', authorImage, 'canal de youtube')
	.setDescription('Todos los comandos de PinguBot')
	.setThumbnail(thumbnail)
	.addFields(
		{ name: '>ayuda', value: 'Comandos de PinguBot' },
		{ name: '>hola', value: 'Manda un saludo al Usuario' },
        { name: '>pruebarol', value: 'Te dice si eres Moderador o no' },
        { name: '>escaleradecolor', value: 'Muestra una escalera de Pingus de colores' },
        { name: '>youtube', value: 'Muestra mi canal de Youtube' },
        { name: '>foto', value: 'Muestra una imagen aleatoria' },
	)
	//.addField('Inline field title', 'Some value here', true)
	.setImage(image)
	.setTimestamp()
	.setFooter('By PinguExtremo#0670', imageFooter);

module.exports = {
    name: 'ayuda',
    description: "Muestra los comandos del Bot",
    execute(message, args){
        message.channel.send({ embeds: [exampleEmbed] });
    }
}
