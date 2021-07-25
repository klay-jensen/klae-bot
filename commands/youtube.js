const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
  name: "youtube",
  description: `youtube comment`,
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
        if(!args[0]) return message.reply("Enter a message that you send! `;;youtube <text>`");
        const img = await Canvas.youtube({
          username: message.author.username,
          content: args.join(" "),
          avatar: avatar

        })

        message.channel.send(
            new MessageAttachment(img, "phub.png")
        )
      }else{
        const avatar = user.displayAvatarURL({ format: "png" })
       if(!args[1]) return message.reply("Enter a message that they'll send! `;;youtube <user> <text>`")
        const img = await Canvas.youtube({
          username: message.mentions.users.first().username,
          content: args.slice(1).join(" "),
          avatar: message.mentions.users.first().displayAvatarURL({ format: "png" })

        })

        message.channel.send(
            new MessageAttachment(img, "phub.png")
        )
      }
    }
}