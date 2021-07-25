const { MessageEmbed } = require("discord.js");
const fetch = require('superagent');
const math = require('mathjs');
module.exports = {
  name: "cat",
  description: "sends you a kawaii cat image",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["catto"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    fetch.get("https://some-random-api.ml/img/cat").then(x =>{
            const catEmbed = new MessageEmbed()
            .setTitle(":cat: Meow! :cat: ")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
  }
}
