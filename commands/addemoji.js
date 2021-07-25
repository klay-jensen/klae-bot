const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addemoji",
  description: "Adds the given emoji to the server",
  usage: "[emoji/link]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["steal"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    const errembed = new MessageEmbed()
          .setTitle("Error")
          .setDescription(`Oops an error occured! Please check if you used the command correctly. Possible Reasons:\n\n• Correct Usage: >addemoji (emoji name) (link)\n• File cannot be larger than 256.0 kb.\n• Invalid image`)
          .setColor("RED")
    if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply("I am missing the `MANAGE_EMOJIS` permission!")
    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("You are missing the `MANAGE_EMOJIS` permission!")
 const url = args[1];
 const name = args[0]
        if (!name) return message.reply("Usage: `>addemoji <name> <image or gif url>`")
        if (name.length < 2 || name.length > 32) return message.reply(`\`\`\`Invalid Form Body
name: Must be between 2 and 32 in length.\`\`\``)
        if (!url) return message.reply("Usage: `>addemoji <name> <image or gif url>`")

        message.guild.emojis.create(url, name).catch(error => { message.reply("Failed to add emoji because the emoji limit for the server has been reached", error); });
if (error.code !== 30008){
         let embed = new MessageEmbed()
         .setTitle("Emoji Added")
         .setDescription(`Added \`${name}\` as an emoji!`)
         .setColor("#4169e1")
         .setThumbnail(url)
         .setFooter(" ")
          message.channel.send(embed)
          }

  }
}