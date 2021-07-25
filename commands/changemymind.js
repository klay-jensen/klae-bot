const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
  name: "changemymind",
  description: `Change my mind (taken from jgoralcz/image-microservice)`,
  usage: "<text>",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["cmm"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
       if(!args[0]) return message.channel.send("Enter a message `;;changemymind <text>`")
        const img = await Canvas.changemymind(args.join(" "))

        message.channel.send(
            new MessageAttachment(img, "changemymind.png")
        )
    }
}