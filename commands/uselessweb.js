const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
    name: "uselessweb",
    description: "Literally sends you a website that useless",
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
      let web = Memer.uselessweb()
        
        

        
       message.channel.send("Here you go...")
       message.channel.send(web)
    }
}