const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
    name: "showerthoughts",
    description: "Returns a random showerthought",
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
      let thought = Memer.showerThought()
        const jokembed = new MessageEmbed()
        .setTitle("Random shower thought?")
        .setDescription("`"+thought+"`")
        .setColor("RANDOM")
        .setFooter("Hmmmmmmmmmmmmm", "https://cdn.discordapp.com/emojis/826384303293857832.png?v=1")

        message.channel.send(jokembed)
    }
}