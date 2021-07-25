const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "moot",
    description: "A fake mute command",
    usage: "<user>/ none",
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
const member = message.mentions.members.first() || message.author;
        const memberTarget = message.guild.members.cache.get(member.id);

    // inside a command, event listener, etc.
        const exampleEmbed = new MessageEmbed()

        .setTitle(`${memberTarget.displayName} was muted.`)
        .setColor('RANDOM')
        .setDescription(`<@${memberTarget.user.id}> was muted in ${message.guild.name}\n\nTime: 69420 years\n\nReason: gay`)
        .setThumbnail("https://cdn.discordapp.com/avatars/"+memberTarget.user.id+"/"+memberTarget.user.avatar+".jpeg")
        .setTimestamp()
        .setFooter('Totally not fake. 👀', 'https://cdn.discordapp.com/emojis/811597016387420181.png?v=1');
    
        message.channel.send(exampleEmbed);
    }
}