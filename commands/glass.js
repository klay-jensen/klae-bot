const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require ("discord.js")
const fetch = require('superagent');
module.exports = {
  name: "glass",
  description: "Returns the canvas of a user with frost on top",
  usage: "<user>/none",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["frost"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let member = message.mentions.users.first() || message.author
        
    let link = `https://some-random-api.ml/canvas/glass/?avatar=${member.displayAvatarURL({ format: 'png'})}`



// -------- Sending the image inside an embed --------
const attachment = new MessageAttachment(link, 'glass.png');
  const embed = new MessageEmbed()
    .setTitle(`What is this?`)
    .attachFiles(attachment)
    .setImage('attachment://glass.png')
    .setFooter('idk')
  message.channel.send(embed);
  }
}