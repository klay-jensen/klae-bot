const { MessageEmbed } = require("discord.js");
const emoji = require ("discord-emoji-convert")
module.exports = {
  name: "emojify",
  description: "Returns text in emojis",
  usage: "<text>",
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
    if (message.author.bot) return;
        if(!args[0]) return message.channel.send("Who can be so stpid enough to not emojify anything!");
        var args = message.content.split(" ").slice(1).join(" ")
        let emojis = emoji.convert(args)
        message.channel.send(emojis)
  }
}