const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const {MessageButton} = require('discord-buttons')

module.exports = {
  name: "choose",
  description: `Choose ig?`,
  usage: "[ channel mention | channel name | ID] (optional)",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: [],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      if(!args[1]) return message.channel.send(
            new MessageEmbed()
            .setDescription(`**You must enter a list of objects for me to choose from!**`)
            .setColor('RED')
        );

        const list = [];
        
        for(let i in args) {
            list.push(args[i])
        }

        const chosen = list[Math.floor(Math.random() * list.length)];

        const chosenEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Out of \`${list}\` I chose \`${chosen}\`.`)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        
        const toChoseAgain = new MessageButton()
        .setStyle('red')
        .setLabel('Press to Choose Again')
        .setID('chooseAgain')

        const msg = await message.channel.send({
            embed: chosenEmbed,
        })

        msg.edit({
            embed: chosenEmbed,
            button: toChoseAgain,
        })

        client.on('clickButton', button => {
            if(button.id === 'chooseAgain') {
                button.defer()
                const listAgain = list[Math.floor(Math.random() * list.length)];

                const chosenAgain = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`Out of \`${list}\` I chose \`${listAgain}\`.`)
                .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                msg.edit({
                    embed: chosenAgain,
                    button: toChoseAgain
                })
            }
        })
    }
}