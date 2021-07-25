const Discord = require('discord.js');
const API = require('anime-images-api')
const images_api = new API() 



module.exports = {
    name: "wink",
    description: "Wink at a user ;)",
    usage: "<@user>",
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

//Returning a resolved Promise
const member = message.mentions.users.first();
if (!member)return message.channel.send("Dont hug too tight ;)")
if (args[2]){
        images_api.sfw.wink().then(res => {
        const Wink = new Discord.MessageEmbed()
        .setTitle ("😉")
        .setImage(res.image)
        .setFooter(message.mentions.users.first().username+" winkes to "+message.mentions.users.second().username+". 😳")
        .setColor("RANDOM")
        message.channel.send(Wink)
        })
}else{
images_api.sfw.wink().then(res => {
const Wink = new Discord.MessageEmbed()
.setTitle ("😉")
.setImage(res.image)
.setFooter(message.author.username+" winks to "+message.mentions.users.first().username+" 😳")
.setColor("RANDOM")
message.channel.send(Wink)
})

    
    

        
}
   }
}
