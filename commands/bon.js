const { MessageEmbed } = require("discord.js");
const figlet = require('figlet');
module.exports = {
  name: "bon",
  description: "A fake ban command 🤣",
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
    var member = message.mentions.members.first() || message.author;
        const memberTarget = message.guild.members.cache.get(member.id);

    // inside a command, event listener, etc.
        const exampleEmbed = new MessageEmbed()

        .setTitle(`${memberTarget.displayName} was banned from this guild.`)
        .setColor('RANDOM')
        .setDescription(`<@${memberTarget.user.id}> was banned from ${message.guild.name}\n\nTime: 69 Years\n\nReason: `+args.slice(1).join(" "))
        .setThumbnail("https://cdn.discordapp.com/avatars/"+memberTarget.user.id+"/"+memberTarget.user.avatar+".jpeg")
        .setTimestamp()
        .setFooter('Totally not fake. 👀');
    
        message.channel.send(exampleEmbed);
  }
}