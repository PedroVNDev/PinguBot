const { listaImagenes } = require("../enlaces/imagenesArk")

var aleatorio;

module.exports = {
    name: 'foto',
    description: 'Muestra una foto de listaImagenes aleatoria',
    execute(message, args){
        message.channel.send({
            content: 'Imágen Numero ' + (aleatorio = Math.floor(Math.random() * listaImagenes.length)) + ' de ' + (listaImagenes.length) + ' Fotos Almacenadas', 
            files: [listaImagenes[aleatorio]]
          })
    }
}

