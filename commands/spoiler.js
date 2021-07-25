const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require("discord.js")
module.exports = {
    name: "spoiler",
    description: "Contain a message as a spoiler",
    usage: "<args>",
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
      message.delete()
        message.channel.send("||"+args.join(" ")+"||")
    }
}