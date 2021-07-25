const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Send you your discord profile picture.",
  usage: "<user>",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["av"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({dynamic : true, size: 1024})


        const embed = new MessageEmbed()
        .setAuthor(`${member.tag}`, member.displayAvatarURL({dynamic : true}))
        .setTitle(`Avatar`)
        .setImage(avatar)
        .setColor("RANDOM")     

        message.channel.send(embed);
  }
}