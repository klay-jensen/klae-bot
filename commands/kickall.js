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



if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(" You cant, no perms :(");
if(message.guild.id != "721024331752276020") return message.channel.send("This command is only made for the server **FrontRow Gaming**");
const embed = new MessageEmbed()
.setTitle(":wilted_rose: | Success!")
.setDescription("**Successfully kicked all members from the server except\n<@&864723251230146591>** and people with admin perms lol")
.setFooter("Powered by klaybot.xyz")
.setColor("RANDOM")
.setThumbnail("https://media.tenor.com/images/e4b140b4735bc82fdfc3021ea3200914/tenor.gif")
const embed2 = new MessageEmbed()
.setTitle("You were kicked from "+message.guild.name)
.setDescription("The server is valid for only one session! Thanks for joining :) Check out our app for more information on the upcoming sessions.")
.setColor("RED")
.setFooter("Powered by klaybot.xyz")
.setThumbnail(message.guild.iconURL())
message.guild.members.cache.forEach(member => {
     if((member.user.bot) || (member.roles.cache.has("864723251230146591")))  return;

    member.send(embed2).then(()=>member.kick()).catch(error =>
    message.reply(`Sorry couldn't kick <@${member.id}>.`))
       
    })
  message.channel.send(embed)
  client.users.fetch('487904509670337509', false).then((user) => {
 user.send();
});
  }
}