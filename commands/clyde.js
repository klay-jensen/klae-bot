const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
  name: "changemymind",
  description: `Clyde sends the message :)
  `,
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
       if(!args[0]) return message.channel.send("Enter a message that clyde's gonna say `;;clyde <text>`")
        const img = await Canvas.clyde(args.join(" "))

        message.channel.send(
            new MessageAttachment(img, "clyde.png")
        )
    }
}