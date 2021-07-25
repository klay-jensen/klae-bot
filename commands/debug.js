const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "debug",
  description: "A Owner only command",
  usage: ";;debug",
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
    if(message.author.id != "752371687365804096")
    return message.channel.send("You dont have permission to use this command");
    message.channel.send(`:white_check_mark:  - ${client.user.username} connected in **${client.voice.connections.size}** channels !`);

    
  }
}