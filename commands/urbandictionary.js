const { MessageEmbed } = require("discord.js");
const urban = require('relevant-urban');
const Discord = require("discord.js")
module.exports = {
    name: "urbandictionary",
    description: "Serach for a wrod on urbandictionary",
    usage: "<word>",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["ub"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3  
     */
    run: async (client, message, args, { GuildDB }) => {
       if(!args[0])
        return message.channel.send("Please Enter Something To Search");

        let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
        try {
            let res = await urban(args.join(' '))
                if (!res) return message.channel.send("No results found for this topic, sorry!");
                let { word, urbanURL, definition, example, thumbsUp, thumbsDown, author } = res;

                let embed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(`Word - ${word}`)
                    .setThumbnail(image)
                    .setDescription(`**Defintion:**\n*${definition || "No definition"}*\n\n**Example:**\n*${example || "No Example"}*`)
                    .addField('**Rating:**', `**\`Upvotes: ${thumbsUp} | Downvotes: ${thumbsDown}\`**`)
                    .addField("**Link**",  `[link to ${word}](${urbanURL})`)
                    .addField("**Author:**", `${author || "unknown"}`)
                    .setTimestamp()

                message.channel.send(embed)
            
        } catch (e) {
            console.log(e)
            return message.channel.send("looks like i've broken! Try again")
        }
    }
}