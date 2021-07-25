const { MessageEmbed } = require("discord.js");
const r = require('better-tord');
module.exports = {
  name: "dare",
  description: "play truth or dare with your friends",
  usage: "<user>",
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
    const dare = r.get_dare();
        const member = message.mentions.users.first()
        
        if(!member){
            const memberLauda = message.guild.members.cache.get(message.author.id)
            const truthEmbed = new MessageEmbed()
            .setTitle(`Truth for ${memberLauda.displayName}`)
            .setDescription("`"+dare+"`")
            .setColor("RANDOM")
            .setFooter('Be truthfull when?',`https://cdn.discordapp.com/emojis/786895209051979776.png?v=1`)
            

            message.channel.send(truthEmbed)
        }else{
            const memberTarget = message.guild.members.cache.get(member.id)
            const truth2embed = new MessageEmbed()
            .setTitle(`Truth for ${memberTarget.displayName}`)
            .setDescription("`"+dare+"`")
            .setColor("RANDOM")
            .setFooter('Be truthfull when?',`https://cdn.discordapp.com/emojis/786895209051979776.png?v=1`)
            .setTimestamp()

            message.channel.send(truth2embed)
        }

  }
}