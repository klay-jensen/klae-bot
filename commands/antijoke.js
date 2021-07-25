const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
  name: "antijoke",
  description: "Send you something that definately isnt a joke",
  usage: ";;antijoke",
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
    let antijoke = Memer.antijoke()
        
        const jokembed = new MessageEmbed()
        .setTitle(`Presenting you a ANTIJOKE...`)
        .setDescription("`"+antijoke+"`")
        .setColor("RANDOM")
        .setFooter("Something that isnt a joke is a antijoke :)", "https://cdn.discordapp.com/emojis/820890739901857813.png?v=1")

       message.channel.send(jokembed)
  }
}