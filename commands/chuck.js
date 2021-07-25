const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");

module.exports = {
  name: "chuck",
  description: "Shows you how witty chuck norris is...",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["chucknorris"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let chuck = Memer.chuckNorris()
        
        
        const jokembed = new MessageEmbed()
        .setTitle(`Just Chuck Norris things...`)
        .setDescription("`"+chuck+"`")
        .setColor("RANDOM")
        .setFooter("Lmao", "https://cdn.discordapp.com/emojis/796229059704127519.png?v=1")

       message.channel.send(jokembed)
  }
}