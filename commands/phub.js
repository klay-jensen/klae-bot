const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
  name: "phub",
  description: `Pornhub comment`,
  usage: "<@user>/ none <text>",
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
       const user = message.mentions.users.first() || message.author;
      if(!message.mentions.users.first())
      {
        const avatar = user.displayAvatarURL({ format: "png" })
        if(!args[0]) return message.reply("Enter a message that you send! `;;phub <text>`");
        const img = await Canvas.phub({
          username: message.author.username,
          message: args.join(" "),
          image: avatar

        })

        message.channel.send(
            new MessageAttachment(img, "phub.png")
        )
      }else{
        const avatar = user.displayAvatarURL({ format: "png" })
       if(!args[1]) return message.reply("Enter a message that they'll send! `;;phub <user><text>`")
        const img = await Canvas.phub({
          username: message.mentions.users.first().username,
          message: args.slice(1).join(" "),
          image: message.mentions.users.first().displayAvatarURL({ format: "png" })

        })

        message.channel.send(
            new MessageAttachment(img, "phub.png")
        )
      }
    }
}