const { MessageEmbed } = require("discord.js");
const { Calculator } = require('weky')
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
  name: "calculator",
  description: "Full calculator with a nice UI",
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
    await Calculator(message)
  }
}