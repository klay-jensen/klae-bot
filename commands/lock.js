const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "lock",
    description: "locks the channel for @everyone",
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
      if (message.member.hasPermission('MANAGE_CHANNELS')) {
            if (!message.channel.permissionsFor(message.guild.roles.everyone).has('SEND_MESSAGES')) {
              const errorEmbed = new MessageEmbed()
                .setDescription(`❌ <#${message.channel.id}> is already locked.`)
                .setColor('RANDOM');
              message.channel.send(errorEmbed);
            }
            else{
              message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false }).then(() => {
                message.react("820739194073776128")
                const msgEmbed = new MessageEmbed()
                  .setDescription(`✅ <#${message.channel.id}> has been locked.`)
                  .setColor('RANDOM');
                message.channel.send(msgEmbed);
              });
               
            
            }
          }
          else {
            message.react("821392999040024606")
            const warningEmbed = new Discord.MessageEmbed()
              .setDescription('🔒 Sorry, you do not have sufficient permissions to do this.')
              .setColor('RANDOM');
            message.channel.send(warningEmbed);
          }
    }
}