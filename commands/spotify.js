const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require("discord.js")
module.exports = {
    name: "spotify",
    description: "Spotify stats ig",
    usage: "<@mention>",
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
    
        let user = message.mentions.users.first() || message.author;

        if(user.presence.activity !== null && user.presence.activity.type === 2 && user.presence.activity.name === 'Spotify' && user.presence.activity.assets !== null) {

            let trackIMG = `https://i.scdn.co/image/${user.presence.activity.assets.largeImage.slice(8)}`;
            let trackURL = `https://open.spotify.com/track/${user.presence.activity.syncID}`;
            let trackName = user.presence.activity.details;
            let trackAuthor = user.presence.activity.state;
            let trackAlbum = user.presence.activity.assets.largeText;

            const embed = new MessageEmbed()
                .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/653135129870336031.png?v=1')
                .setColor("GREEN")
                .setThumbnail(trackIMG)
                .addField('Song Name', trackName, true)
                .addField('Album', trackAlbum, true)
                .addField('Author', trackAuthor, false)
                .addField('Listen to Track', `${trackURL}`, false)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()

            message.channel.send(embed);
        } else {
            message.channel.send('**This user isn\'t listening to Spotify!**');
        }
    }
}