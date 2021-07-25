const { MessageEmbed } = require("discord.js");
const fetch = require('superagent');
module.exports = {
    name: "redpanda",
    description: "Sends you the picture of a redpanda",
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
      fetch.get("https://some-random-api.ml/img/red_panda").then(x =>{
            const catEmbed = new MessageEmbed()
            .setTitle(" Cute enough?  <:pepe_kawaii:828163618729361430> ")
            .setColor("RANDOM")
            .setImage(x.body.link);
            message.channel.send(catEmbed)

        })
    }
}