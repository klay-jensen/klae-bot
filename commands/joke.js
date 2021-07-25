const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require ("discord.js")
const Memer = require("random-jokes-api");
module.exports = {
  name: "joke",
  description: "returns a random funny joke",
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
    let jokes = Memer.joke()
        const jokembed = new MessageEmbed()
        .setTitle("Joke?")
        .setDescription("`"+jokes+"`")
        .setColor("RANDOM")
        .setFooter("Imagine not laughing", "https://cdn.discordapp.com/emojis/809013068809895936.gif?v=1")

        message.channel.send(jokembed)
  }
}