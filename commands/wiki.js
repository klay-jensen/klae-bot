const { MessageEmbed , MessageAttachment} = require("discord.js");
const fetch = require('node-fetch')
module.exports = {
    name: "wikipedia",
    description: "Get wikipedia results for the given search terms",
    usage: "<arguement>",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["wikipedia"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3  
     */
    run: async (client, message, args, { GuildDB }) => {
      const wiki = args.join(' ')
 if(!wiki) return message.reply('How can u search nothing dumbass!') // If Nothing Is Searched
 const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}` // From Here BOT Will Search For It

 
 response = await fetch(url).then(res => res.json())

 try {
 if(response.type === 'disambiguation') { // If Their Are Many Results With Same Seached Topic
 const embed = new MessageEmbed()
 .setColor('RANDOM')
 .setTitle(response.title)
 .setURL(response.content_urls.desktop.page)
 .setDescription([`
 ${response.extract}
 Many responses lmao, be specific next time. [Link](${response.content_urls.desktop.page}).`]) // If Their Are Many Results With Same Seached Topic
 message.channel.send(embed)
 }
 else { // If Only One Result
 const embed = new MessageEmbed()
 .setColor('RANDOM')
 .setTitle(response.title)
 .setThumbnail(response.thumbnail.source)
 .setURL(response.content_urls.desktop.page)
 .setDescription(response.extract)
 message.channel.send(embed)
 }
 }
 catch {
 return message.reply('Searched query not available. Skiddadle there.') // If Searched Query Is Not Available
 }
    }
};