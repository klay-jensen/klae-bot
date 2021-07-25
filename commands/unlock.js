const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "unlock",
    description: "Unlock a locked channel",
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
            if (message.channel.permissionsFor(message.guild.roles.everyone).has('SEND_MESSAGES')) {
              const errorEmbed = new MessageEmbed()
                .setDescription(`❌ <#${message.channel.id}> is already unlocked.`)
                .setColor('RANDOM');
              message.channel.send(errorEmbed);
            }
            else{
              message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true }).then(() => {
                const msgEmbed = new MessageEmbed()
                  .setDescription(`✅ <#${message.channel.id}> has been unlocked.`)
                  .setColor('RANDOM');
                message.channel.send(msgEmbed)
              }).catch(()=>{
                message.react("821392999040024606")
                });
        }
          }
          else {
            const warningEmbed = new MessageEmbed()
              .setDescription('🔒 Sorry, you do not have sufficient permissions to do this.')
              .setColor('RANDOM')
              .setFooter('F in chat.')
            message.channel.send(warningEmbed);
          }
    }
}