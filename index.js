const Discord = require("discord.js");
const fs = require("fs");
const { brotliCompress } = require("zlib");
const bot = new Discord.Client();
const prefix = '%'

//en ligne
bot.on('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});



//status
bot.on('ready', () => {
  const statuses = [
      'sur .gg/3MqbbbXD3R',
      'en developpement',
      '🔁',
  ]
  let i = 0
  setInterval(() => {
  bot.user.setActivity(statuses[i], {type: 'STREAMING', url: 'https://twitch.tv/the_bisounours_'})
  i = ++i % statuses.length
  }, 1e4)
})




//suggestion
bot.on("message", async message =>{

  if(message.author.bot) return;
  if(message.channel.id === '841373310923178034'){
      message.delete();
      const newEmbed = new Discord.RichEmbed()
      .setDescription(`${message.content}`)
      .setColor('#d32256')
      .setFooter(`suggestion par ${message.author.tag}, merci à toi`)
      message.channel.send(newEmbed)
    }
});



//say
bot.on("message", async message => {
  
  if(message.content.startsWith("%say")){
    let msg = message.content.slice(4)
    if(!msg) return message.reply("Veuillez entrez un message")

    let embed = new Discord.RichEmbed()
    .setDescription(msg)
    .setColor('#E388FF')
    message.channel.send(embed)
    message.delete()

  
  }
})



//clear all
bot.on('message', message => {
  if (message.content === '%clearall') {
    if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ereur !")})
        }
  }
});

bot.on('message', message => {
  if(message.content.includes('salut')) 
  message.react('👋')
  
})

bot.on('message', message => {
  if(message.content.includes('bonjour')) 
  message.react('👋')
  
})


bot.on('message', message => {
  if(message.content.includes('bonsoir')) 
  message.react('👋')
  
})

bot.on('message', message => {
  if(message.content.includes('wesh')) 
  message.react('👋')
  
})


bot.login(process.env.TOKEN)