const Discord = require('discord.js');
const API = require('anime-images-api')
const images_api = new API() 



module.exports = {
    name: "kill",
    description: "Kill a user lmao",
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
if (!member)return message.channel.send("Sucide is never an option :) DM Klay Jensen#3637 for help!")
if (args[2]){
        images_api.sfw.kill().then(res => {
        const Wink = new Discord.MessageEmbed()
        .setTitle ("Brutal")
        .setImage(res.image)
        .setFooter(message.mentions.users.first().username+" kills "+message.mentions.users.second().username+". F")
        .setColor("RANDOM")
        message.channel.send(Wink)
        })
}else{
images_api.sfw.kill().then(res => {
const Wink = new Discord.MessageEmbed()
.setTitle ("Brutal")
.setImage(res.image)
.setFooter(message.author.username+" kills "+message.mentions.users.first().username+". F")
.setColor("RANDOM")
message.channel.send(Wink)
})

    
    

        
}
   }
}
