const { MessageEmbed } = require("discord.js");
const fetch = require('superagent');
module.exports = {
    name: "dogfact",
    description: "Returns factz on doggo's",
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
      const fetch = require('node-fetch')

fetch('https://some-random-api.ml/facts/dog')
    .then(res => res.json())
    .then(json => {
        
        const faxEmbed = new MessageEmbed()
        .setTitle("Dog fact?")
        .setDescription("`"+json.fact+"`")
        .setColor("RANDOM")
        .setFooter("")
        
        message.channel.send(faxEmbed);
    });
    }
}