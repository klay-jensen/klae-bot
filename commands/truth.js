const { MessageEmbed } = require("discord.js");
const r = require('better-tord');
module.exports = {
    name: "truth",
    description: "Play truth or dare with your friends (if you have any)",
    usage: "<@user> /none",
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
      const truth = r.get_truth();
        const member = message.mentions.users.first()
        
        if(!member){
            const memberLauda = message.guild.members.cache.get(message.author.id)
            const truthEmbed = new MessageEmbed()
            .setTitle(`Truth for ${memberLauda.displayName}`)
            .setDescription("`"+truth+"`")
            .setColor("RANDOM")
            .setFooter('Be truthfull when?',`https://cdn.discordapp.com/emojis/786895209051979776.png?v=1`)
            

            message.channel.send(truthEmbed)
        }else{
            const memberTarget = message.guild.members.cache.get(member.id)
            const truth2embed = new MessageEmbed()
            .setTitle(`Truth for ${memberTarget.displayName}`)
            .setDescription("`"+truth+"`")
            .setColor("RANDOM")
            .setFooter('Be truthfull when?',`https://cdn.discordapp.com/emojis/786895209051979776.png?v=1`)
            .setTimestamp()

            message.channel.send(truth2embed)
        }
    }
}