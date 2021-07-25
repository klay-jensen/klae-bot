const { MessageEmbed } = require("discord.js");
const hmtai = require("hmtai");
module.exports = {
    name: "nuke",
    description: "Destroy the entire channel and remake it",
    usage: "<#channel>",
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
      if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR")) {
            message.channel.send('missing permissions')
        }

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send('**This Channel has Been Nuked!** https://imgur.com/LIyGeCR')
        })
        message.channel.delete()
    }
}