const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require("discord.js")
const ms = require("ms")
module.exports = {
    name: "slowmode",
    description: "Add slowmode to the channel used in (Max 6hrs)",
    usage: "<time s/m/h> or none",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["sm"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3  
     */
    run: async (client, message, args, { GuildDB }) => {
      const lauda = new MessageEmbed()
      .setTitle("User permission error")
      .setDescription(":x: | You dont have the permission `MANAGE_CHANNELS` to use this command.")
      .setColor("RANDOM")
      const nosmEmbed = new MessageEmbed()
        .setTitle('Slowmode has been removed!')
        .setColor("RANDOM")
        if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(lauda)
        if(!args[0] || args[0] === "0" || args[0] === "off" || args[0] === "OFF"){
            message.channel.setRateLimitPerUser(0);
            return message.channel.send(nosmEmbed)
             
        }
        const raw = args [0];
        const milliseconds = ms(raw);
        const err1Embed = new MessageEmbed()

        .setTitle("Don't try to break me, enter a valid number next time 😑")
        .setColor("RANDOM")
        if(isNaN(milliseconds)) return message.reply(err1Embed);
        
        
        
        
        const err2Embed = new MessageEmbed()
        .setTitle("Slowmode cant be under 1 second. Try again.")
        .setColor("RANDOM")
        const err3Embed = new MessageEmbed()
        .setTitle("Slowmode can't be more than 6 hours :( ")
        const smEmbed = new MessageEmbed()
        .setTitle(`The slowmode for this channel has been set to ${ms(milliseconds, {long: true})}`)
        .setColor("RANDOM")

        
        if(milliseconds < 1000) return message.reply(err2Embed);
        if(milliseconds > 21600000) return message.reply(err3Embed);

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        message.channel.send(
            smEmbed
            
        )

    }
}