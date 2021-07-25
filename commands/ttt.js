const { MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow } = require('discord-buttons')
const { TicTacToe } = require('weky')

module.exports = {
    name: "ttt",
    description: "Play tictactoe with your friends (if you have any)",
    usage: "<@user>",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["tictactoe"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3  
     */
    run: async (client, message, args, { GuildDB }) => {
   
    const opponent = message.mentions.users.first();
if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
   const game = new TicTacToe({
    message: message,
    opponent: opponent, //opponent
    xColor: 'red', //x's color
    oColor: 'blurple', //zero's color
    xEmoji: '❌',  //the x emoji
    oEmoji: '0️⃣' ,//the zero emoji
})
game.start()

    }
}