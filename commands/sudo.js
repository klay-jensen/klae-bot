const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { sudo } = require('weky');
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
  name: "sudo",
  description: `Send a message pretending to be someone else`,
  usage: "<@user>",
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
    
      const user = message.mentions.members.first();
      if(!user) return message.channel.send("You gae")
      if (user.id === "752371687365804096") return message.channel.send("Nu!  you gae")
const msg = args.slice(1).join(" ");
const xd = new sudo({
    message: message,
    text: msg,
    member: user,
});
xd.start();
message.delete()
    }
}