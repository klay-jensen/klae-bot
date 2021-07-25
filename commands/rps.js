const { MessageEmbed } = require("discord.js");
const{ MessageButton, MessageActionRow } = require('discord-buttons')
module.exports = {
    name: "rps",
    description: "Play rock paper scissor",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["rockpaperscissor"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
      
        const opponent = message.mentions.users.first();
if(!opponent) return message.reply(`Please mention who you want to fight`);
const { RPS } = require('rayzdev')
const game = new RPS({
    message: message,
    opponent: opponent, // NOT CHANGEABLE
    challenger: message.author, // NOT CHANGEABLE
    acceptMessage: "Click to fight with <@" + message.author + '>', // message sent to see if opponent accepts
})
game.start()
    }
}
