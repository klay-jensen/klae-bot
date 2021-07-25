const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require("discord.js")
module.exports = {
    name: "status",
    description: "Check the status of the bot :)",
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
   const embedStatus = new MessageEmbed()
   .setTitle("KlayBot status 🟢")
   .setDescription(
        `You can check the current real time status of the bot\nby clicking [here](https://updown.io/kc1i)`)
   .setColor("RANDOM")
   .setThumbnail("https://marshmello-music.klayjensen.repl.co/logo.png")
   .setFooter("Powered by updown.io - KlayBot.")

   message.channel.send(embedStatus)
    }
}