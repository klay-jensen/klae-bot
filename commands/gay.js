const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require ("discord.js")
const fetch = require('superagent');
module.exports = {
  name: "gay",
  description: "returns a canvas of the gay pride flag",
  usage: "<user>/none",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: [],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let member = message.mentions.users.first() || message.author
        
    let link = `https://some-random-api.ml/canvas/gay/?avatar=${member.displayAvatarURL({ format: 'png'})}`



// -------- Sending the image inside an embed --------
const attachment = new MessageAttachment(link, 'gay.png');
  const embed = new MessageEmbed()
    .setTitle(`Noice.`)
    .attachFiles(attachment)
    .setImage('attachment://gay.png')
    .setFooter('All lives matter.')
  message.channel.send(embed);
  }
}