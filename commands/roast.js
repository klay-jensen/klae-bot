const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
    name: "roast",
    description: "Sends a roast message ",
    usage: "<user>/ none",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["burn"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
      let roast = Memer.roast()
        const member = message.mentions.users.first()
        if(!member) return message.channel.send("Atleast grow old enough to not roast yourself smh.")
        const memberTarget = message.guild.members.cache.get(member.id)
        const roastmbed = new MessageEmbed()
        .setTitle(`This is for ${memberTarget.displayName}`)
        .setDescription("`"+roast+"`")
        .setColor("RANDOM")
        .setFooter("F to pay respects.", "https://cdn.discordapp.com/emojis/810553433882886164.png?v=1")

        message.channel.send(roastmbed)
    }
}