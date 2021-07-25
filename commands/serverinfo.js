const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
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
      let owner = [];
        await client.users.fetch(message.guild.ownerID).then(o => owner.push(o.tag))
        try {
            let embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Server Info")
                .setThumbnail(message.guild.iconURL())
                .setAuthor(`${message.guild.name} Info`, message.guild.iconURL())
                .addField("**Guild Name**", `${message.guild.name}`, true)
                .addField("**Guild Owner**", `${owner}`, true)
                .addField("**ID**", `${message.guild.id}`)
                .addField("**Created At**", `${message.guild.createdAt}`)
                .addField("**Text Channels**", `${message.guild.channels.cache.filter(r => r.type === "text").size}`)
                .addField("**Voice Channels**", `${message.guild.channels.cache.filter(c => c.type === "voice").size}`)
                .addField("**Members**", `${message.guild.memberCount}`, true)
                .addField("**Roles**", `${message.guild.roles.cache.size}`, true)
            message.channel.send(embed);
        }
        catch {
            return message.channel.send('Something Went Wrong!')
        }
    }
}