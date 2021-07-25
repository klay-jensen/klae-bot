const { MessageEmbed } = require("discord.js");
const covid = require('novelcovid')
module.exports = {
  name: "createmuterole",
  description: "Creates a mute role for the guild",
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

      var role = message.guild.roles.cache.find(role => role.name === "Private Splash Ping");
      if(!role){
      const member = message.mentions.users.first()
    if (!message.member.hasPermission('MANAGE_ROLES')) return  message.channel.send("You need `MANAGE_ROLES` perms for using this command :)");
      
      message.guild.roles.create({ data: { name: 'Muted', permissions: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'] } }).then(()=> {message.channel.send("**Mute role created successfully named: Muted**")
      
      
   })
}else{
   message.channel.send("Mute role already exists, run this command again= gay")
}
    }
  }

