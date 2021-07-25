const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "viewlock",
    description: "Hides the channel from @everyone",
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
      let lockPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") ) return message.channel.send(lockPermErr);
        const lauda = message.mentions.channels.first() || message.channel;
            
                lauda.updateOverwrite(message.guild.roles.everyone, {
                 VIEW_CHANNEL: false
                })
            
            
            let lockEmbed = new MessageEmbed()
          
                .setDescription(`Viewlocked the channel <#`+lauda.id+">\n\n The channel is now not visible to @everyone. `Use ;;unviewlock` to revert the command.")
                .setColor('Random')
            return message.channel.send(lockEmbed);

         
    }
}