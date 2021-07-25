const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
  name: "pet",
  description: `Pet a user`,
  usage: "<@user>/ none",
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
      const member = message.mentions.users.first() || message.author
      message.channel.send({files: [`https://api.popcatdev.repl.co/pet?image=${member.displayAvatarURL({ dynamic: false, format: "gif" })}`]})
    }
}