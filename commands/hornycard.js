const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require ("discord.js")

module.exports = {
  name: "hornycard",
  description: "Returns a canvas of mentioned user with permission to be horny",
  usage: "<user>/ none",
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
let link = `https://some-random-api.ml/canvas/horny/?avatar=${member.displayAvatarURL({ format: 'png'})}`
let memberid = member.id

const hEmbed = new MessageEmbed()
.setImage(link, 'hornycard.gif')
.setFooter(`${member.tag} is permitted to be horny.`)
.setColor("RANDOM")
message.channel.send(hEmbed);
message.channel.send(`<@`+memberid+`> good going 👍`)
  }
}