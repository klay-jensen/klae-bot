const Discord = require('discord.js');
const API = require('anime-images-api')
const images_api = new API() 



module.exports = {
    name: "cuddle",
    description: "Cuddle with a user lmao",
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
if (!member)return message.channel.send("Dont be lonely to cuddle with yourself")
if (args[2]){
        images_api.sfw.cuddle().then(res => {
        const Wink = new Discord.MessageEmbed()
        .setTitle ("Kawaii af")
        .setImage(res.image)
        .setFooter(message.mentions.users.first().username+" cuddle with "+message.mentions.users.second().username+". Noice")
        .setColor("RANDOM")
        message.channel.send(Wink)
        })
}else{
images_api.sfw.cuddle().then(res => {
const Wink = new Discord.MessageEmbed()
.setTitle ("Kawaii af")
.setImage(res.image)
.setFooter(message.author.username+" cuddles with "+message.mentions.users.first().username+". Noice")
.setColor("RANDOM")
message.channel.send(Wink)
})

    
    

        
}
   }
}
