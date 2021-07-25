const block = "⬛";
const heart = ":red_square:";//put your own block emoji if you have smth
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ship",
    description: "Check the love status bw two users",
    usage: "<@user1> <@user2>",
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
            
const user = message.mentions.users.first();
    if (!user) return message.channel.send(`Please specify a user to ship with!`)
     if(user && user.id === message.author.id) {
     return message.reply("Bruh you want to ship yourself xd")
     }
if (message.mentions.users.size < 2) {
    let loveEmbed = new MessageEmbed()
        .setColor('dd2e44')
        .setTitle('Shipping...')
        .setDescription(`Shipped ${message.author} and ${user}!`)
        .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.author.displayAvatarURL({ dynamic: false, format: "png" })}&user2=${user.displayAvatarURL({ dynamic: false, format: "png" })}`)
        .addField(`**Ship Meter**`, ship())
        
   return message.channel.send(loveEmbed)
} else if (message.mentions.users.size > 1) {
let luv = new MessageEmbed()
        .setColor('dd2e44')
        .setTitle('Shipping...')
        .setDescription(`Shipped ${message.mentions.users.first()} and ${message.mentions.users.last()}!`)
        .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.mentions.users.first().displayAvatarURL({ dynamic: false, format: "png" })}&user2=${message.mentions.users.last().displayAvatarURL({ dynamic: false, format: "png" })}`)
        .addField(`**Ship Meter**`, ship())
    message.channel.send(luv)
}
}
    }
    function ship() {
    const hearts = Math.floor(Math.random() * 110) + 0;
    const hearte = (hearts/10)
  
    const str = `${heart.repeat(hearte)}${block.repeat(11 - hearte)} ${hearts}%`;
    return str;
}