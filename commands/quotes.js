const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
    name: "quotes",
    description: "Returns you a very inspirational quote",
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
      let quotes = Memer.quotes()
        
        const jokembed = new MessageEmbed()
        .setTitle(`Let me ENLIGHTEN you.`)
        .setDescription("`"+quotes+"`")
        .setColor("RANDOM")
        .setFooter("Feel enlightend?", "https://cdn.discordapp.com/emojis/822388354174812170.png?v=1")

       message.channel.send(jokembed)
    }
}