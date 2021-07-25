const { MessageEmbed } = require("discord.js");
const fetch = require('superagent');
module.exports = {
  name: "Dog",
  description: "Sends you a cute image of a dog",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["doggo"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    fetch.get("https://some-random-api.ml/img/dog").then(x =>{
            
            const catEmbed = new MessageEmbed()
            .setTitle(":dog:  Woof! :dog:")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
}
}