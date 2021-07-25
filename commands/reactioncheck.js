const Discord = require("discord.js");
const{ MessageButton, MessageActionRow } = require('discord-buttons')
module.exports = {
  name: "rc",
  description: "reaction check",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: [],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    const reactButton = new MessageButton()
        .setStyle('green')
        .setLabel(' ')
        .setID('reaction')

        const reactButtonDisabled = new MessageButton()
        .setStyle('red')
        .setLabel(' ')
        .setID('reactiondisabled')
        .setDisabled(true)

        let now = new Date().getTime();
        let time = 0
        let setTimer

        message.channel.send('React as soon as the button is green', reactButtonDisabled).then((m) => {
            let timer = (Math.floor(Math.random() * 6) + 1) * 2000
        
            setTimeout(function(){ 
                m.edit('React as soon as the button is green', reactButton); 
                setTimer = setInterval(function(){time = time + 1}, 1)
            }, timer)
        })

        client.on('clickButton', async (button) => { 
           const embed = new Discord.MessageEmbed()
           .setDescription("It took you `" +time / 1000+ "s` to react. gg :thumbsup:")
           .setColor("RED")
            if (button.id == "reaction") {
                clearInterval(setTimer)
                button.message.edit(embed)
            }
        })
  }
}