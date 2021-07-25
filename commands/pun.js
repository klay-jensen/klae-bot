const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
    name: "pun",
    description: "Returns you a punny pun",
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
      let pun = Memer.pun()
        const punembed = new MessageEmbed()
        .setTitle("Care for a pun?")
        .setDescription("`"+pun+"`")
        .setColor("RANDOM")
        .setFooter("Very punny indeed.", "https://cdn.discordapp.com/emojis/808979966372872254.gif?v=1")

        message.channel.send(punembed)
    }
}