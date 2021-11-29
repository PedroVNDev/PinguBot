const Discord = require('discord.js');
const imagenes = require('./enlaces/imagenesArk.js')


const { Client, Intents, DiscordAPIError } = require('discord.js');
const { FILE } = require('dns');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefijo = '>';

const fs = require ('fs');

let aleatorio;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log("PinguBot esta en linea");

    /*client.channels.fetch('742016339715293264')
    .then(channel => {
        channel.send("Si vuelves a poner algo asi te vas funeki Levi");

    })*/
});

client.on('message', message =>{


    var today = new Date();
    var date = (today.getMonth()+1)+'-'+ today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    const args = message.content.slice(prefijo.length).split(/ +/);
    const comando = args.shift().toLowerCase();

    console.log(dateTime + ' ' + message.author.username + ' Dice: ' + message.content + ' en el Canal ' + message.channel.name);

    if(message.content.toLowerCase().includes('aak')){
        if (message.author.username == 'PinguBot') {

        }else{
            client.commands.get('aak').execute(message);
        }
    }
    
    if(!message.content.startsWith(prefijo) || message.author.bot) return;

    if(comando === 'hola'){
        client.commands.get('hola').execute(message, args);
    }else if(comando == 'youtube'){
       client.commands.get('youtube').execute(message, args);
    }else if(comando == 'pruebarol'){
        client.commands.get('pruebarol').execute(message, args);
    }else if(comando == 'escaleradecolor'){
        client.commands.get('escaleradecolor').execute(message, args);
    }else if(comando == 'ayuda'){
        client.commands.get('ayuda').execute(message, args);
    }else if(comando == 'foto'){
        client.commands.get('foto').execute(message, args);
    }
 
    
})

client.on('ready', () => {

   client.user.setActivity("OnlyFans en Directo", {
       type: "STREAMING",
       description: "Hola",
       url: "https://www.twitch.tv/pinguextremo"
       
   }) 

});

client.login('Aqui va el token del bot');