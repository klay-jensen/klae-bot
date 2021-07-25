const { MessageEmbed } = require("discord.js");
const luhv = require('luhv');
module.exports = {
  name: "flames",
  description: "Plays the good 'ol flames game'",
  usage: "<user1> <user2>",
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
    
        luhv.flames(`${args[0]}`,`${args[1]}` , (flames) => {
            message.channel.send(`Flames result: **${flames}**`);
        
        })
  }
}