const { MessageEmbed } = require("discord.js");
const weky = require('weky');
const { MessageButton, MessageActionRow } = require('discord-buttons');
var randomWords = require('random-words');
module.exports = {
  name: "flip",
  description: "flips a word by 180*",
  usage: "{args}",
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
    message.channel.send(weky.flip(args.join(" ")));
  }
}