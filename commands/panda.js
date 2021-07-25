const { MessageEmbed } = require("discord.js");
const fetch = require('superagent');
module.exports = {
    name: "panda",
    description: "Sends you a picture of a panda :)",
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
      fetch.get("https://some-random-api.ml/img/panda").then(x =>{
            const catEmbed = new MessageEmbed()
            .setTitle(":panda_face:  Hello there!  :panda_face: ")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
    }
}