const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
  name: "opinion",
  description: `Opinion`,
  usage: "<@user> <text>",
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
         if(!args[0]) return message.channel.send("Enter a message `;;opinion <text>`")
         const avatar = user.displayAvatarURL({ format: "png" })

        const img = await Canvas.opinion(avatar, args.join(" "))

        message.channel.send(
            new MessageAttachment(img, "opinion.png")
        )
       }else{
if(!args[1]) return message.channel.send("Enter a message `;;opinion <@user> <text>`")
        const avatar = user.displayAvatarURL({ format: "png" })

        const img = await Canvas.opinion(avatar, args.slice(1).join(" "))

        message.channel.send(
            new MessageAttachment(img, "opinion.png")
        )
       }
    }
}