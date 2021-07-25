const {  MessageEmbed, MessageAttachment, Discord} = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
    name: "slap",
    description: "Slap a user",
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
      
      const user1 = message.author
      const user2 = message.mentions.users.first()
      if(!user2){
          mem1 = client.user;
          mem2 = message.author;
          
        const img1 = mem1.displayAvatarURL({ format: "png" })
        const img2 = mem2.displayAvatarURL({ format: "png" }) 
        
        
        const img = await Canvas.slap(img1, img2)

        message.channel.send(
            new MessageAttachment(img, "slap.png")
        )
        }
        else{
        const img1 = user1.displayAvatarURL({ format: "png" })
        const img2 = user2.displayAvatarURL({ format: "png" }) 
        
        
        const img = await Canvas.slap(img1, img2)

        message.channel.send(
            new MessageAttachment(img, "slap.png")
        )
        }


        
    }
}