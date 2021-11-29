modId = '742489081174425602'

module.exports = {
    name: 'pruebarol',
    description: "Te dice si tienes permisos o no",
    execute(message, args){
        
        if(message.member.roles.cache.has('742489081174425602')){
            message.channel.send('Eres un moderador')
        }else{
            message.channel.send('No eres moderador')
        }

    }
}