const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kickall",
  description: "Kicks EVERYONE from the guild",
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

if (!member.hasPermission('KICK_MEMBERS')) return message.channel.send(" You cant, no perms :(");


const embed = new MessageEmbed()
.setTitle(":wilted_rose: | Success!")
.setDescription("**Successfully kicked all members from the server except <@&864723251230146591>**")
.setFooter("Powered by klaybot.xyz")
.setColor("RANDOM")
.setThumbnail("https://media.tenor.com/images/e4b140b4735bc82fdfc3021ea3200914/tenor.gif")
const embed2 = new MessageEmbed()
.setTitle("You were kicked from "+message.guild.name)
.setDescription("```Reason: This server is only for one session.```")
.setColor("RED")
.setFooter("Powered by klaybot.xyz")
.setThumbnail(message.guild.iconURL())
message.guild.members.cache.forEach(member => {
     if (member.roles.cache.has("864723251230146591"))
         return;
     if (member.user.bot) return;

     else{
       member.send(embed2).then(()=>member.kick())
       
     }
   })
  message.channel.send(embed)

  }
}