const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require("discord.js")
module.exports = {
    name: "simpcard",
    description: "Canvas to permit a user to be a simp",
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
      
let member = message.mentions.users.first() || message.author
let link = `https://some-random-api.ml/canvas/simpcard/?avatar=${member.displayAvatarURL({ format: 'png'})}`

let attachment = new MessageAttachment(link, 'triggered.gif');
message.channel.send(attachment);
    }
}