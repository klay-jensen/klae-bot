const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
  name: "wasted",
  description: "Retrievs the canvas of the user being wasted",
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

        const avatar = user.displayAvatarURL({ format: "png" })

        const img = await Canvas.wasted(avatar)

        message.channel.send(
            new MessageAttachment(img, "wasted.png")
        )
    }
}