const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
  name: "ohno",
  description: `Oh no! It's Stupid.`,
  usage: "<text>",
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
       if(!args[0]) return message.channel.send("Enter a something `;;ohno <text>`")
        const img = await Canvas.ohno(args.join(" "))

        message.channel.send(
            new MessageAttachment(img, "ohno.png")
        )
    }
}