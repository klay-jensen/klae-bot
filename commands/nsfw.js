const { MessageEmbed } = require("discord.js");
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
module.exports = {
    name: "nsfw",
    description: "You notty notty",
    usage: "<ass/incest/masturbation>",
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
    if (!args[0]) return message.channel.send("We dont believe in sending nothing ;/")
    if (!message.channel.nsfw) return message.reply("MAKE THE CHANNEL NSFW FFS")
    if (args [0] == "ass")
        {
          DabiClient.nsfw.real.ass().then(json => {
    const embed = new MessageEmbed()
    .setImage(json.url);
    message.channel.send(embed);
    // outputs data with image url, possible source and other stuff
})
    
        }else if (args[0] == "thighs"){
    
    DabiClient.nsfw.real.thighs().then(json => {
    const embed = new MessageEmbed()
    .setImage(json.url);
    message.channel.send(embed);
    // outputs data with image url, possible source and other stuff
})


        }else if(args[0] == "panties"){
    DabiClient.nsfw.real.panties().then(json => {
    const embed = new MessageEmbed()
    .setImage(json.url);
    message.channel.send(embed);
    // outputs data with image url, possible source and other stuff
})
    

        }
        else if(args[0] == "random"){
    DabiClient.nsfw.real.random().then(json => {
    const embed = new MessageEmbed()
    .setImage(json.url);
    message.channel.send(embed);
    // outputs data with image url, possible source and other stuff
})
    

        }
        else if(args[0] == "hentai ass"){
    DabiClient.nsfw.hentai.ass().then(json => {
    const embed = new MessageEmbed()
    .setImage(json.url);
    message.channel.send(embed);
    // outputs data with image url, possible source and other stuff
})
    

        }
        else if(args[0] == "hentai thighs"){
    DabiClient.nsfw.hentai.thighs().then(json => {
    const embed = new MessageEmbed()
    .setImage(json.url);
    message.channel.send(embed);
    // outputs data with image url, possible source and other stuff
})
    

        }
        else if(args[0] == "hentai panties"){
    DabiClient.nsfw.hentai.panties().then(json => {
    const embed = new MessageEmbed()
    .setImage(json.url);
    message.channel.send(embed);
    // outputs data with image url, possible source and other stuff
})
    

        }
        else if(args[0] == "hentai feet"){
    DabiClient.nsfw.hentai.feet().then(json => {
    const embed = new MessageEmbed()
    .setImage(json.url);
    message.channel.send(embed);
    // outputs data with image url, possible source and other stuff
})
    

        }
  
    }
}