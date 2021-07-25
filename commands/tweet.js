const { MessageEmbed, MessageAttachment} = require("discord.js");
const Meme = require("memer-api")
const memer = new Meme();
const { tictactoe } = require('reconlx')
module.exports = {
    name: "tweet",
    description: "Retrieve canvas of a message sent as a tweet",
    usage: "<message>",
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
      const user1 = message.member;
        const user2 = message.mentions.members.first()
        if(!user2){

        const avatar = user1.user.displayAvatarURL({ dynamic: true })

        const text = args.join(' ');

        if (!text) return message.reply(`Please provide a text.`);

        const username = user1.user.username;

        memer.tweet(avatar, username, text).then(image => {
            const attachment = new MessageAttachment(image, "tweet.png")
            message.channel.send(attachment)
        })
        }else{
          const avatar = user2.user.displayAvatarURL({ dynamic: true })

        const text = args.slice(1).join(' ');

        if (!text) return message.reply(`Please provide a text.`);

        const username = user2.user.username;

        memer.tweet(avatar, username, text).then(image => {
            const attachment = new MessageAttachment(image, "tweet.png")
            message.channel.send(attachment)
        })

        }
    }
}