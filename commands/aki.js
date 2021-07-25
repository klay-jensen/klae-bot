const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const akinator = require("discord.js-akinator");
module.exports = {
  name: "aki",
  description: `Play the famous akinator game, with the akinator API`,
  usage: ";;aki",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["akinator"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      akinator(message);
    }
}