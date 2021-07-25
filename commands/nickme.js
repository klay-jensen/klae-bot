const { MessageEmbed } = require("discord.js");
const ms = require("ms")
module.exports = {
    name: "nickme",
    description: "Change your own nickname in the guild",
    usage: "<args>",
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
      if(!message.channel.permissionsFor(message.member).has("CHANGE_NICKNAME")){ 
      const embedErr = new MessageEmbed()
      .setDescription(":x: | You need `CHANGE_NICKNAME` for using this command <:kek:811105176198971403>")
      .setColor("RANDOM")
      message.channel.send(embedErr)
      }else{
      const embedOk = new MessageEmbed()
      .setDescription(":x: I dont have enough permissions to do this <:pepecryignore:810553257352495105>")
      .setColor("RED")
      
      const doneEmbed = new MessageEmbed()
      .setTitle("Successful!")
      .setDescription("Changed your nickname!\n **"+message.author.username+"** => **"+args.slice(0).join(" ")+"**")
      .setColor("RANDOM")
      message.guild.members.cache.get(message.author.id).setNickname(args.slice(0).join(" ")).then(()=>message.channel.send(doneEmbed)).catch(()=>
      
      message.channel.send(embedOk)
      )
      }
    }
}