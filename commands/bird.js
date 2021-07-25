const { MessageEmbed } = require("discord.js");
const fetch = require('superagent');
module.exports = {
  name: "bird",
  description: "Sends you the picture of a kyoot bird.",
  usage: "",
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
    fetch.get("https://some-random-api.ml/img/birb").then(x =>{
            const catEmbed = new MessageEmbed()
            .setTitle(":bird: ")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
  }
}