const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "servermute",
    description: "Mutes a user server wide",
    usage: ";;servermute <@user> <true/false>",
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

      let person = message.guild.member(message.mentions.users.first());
      if(!message.mentions.users.first()) return message.channel.send(":x: | Nah, you cant mute nobody. Use `;;help servermute` to know how to use this command 🤦‍♀️")
      if (args[1]==="true"){
      
    
        const nom = message.mentions.users.first().id
        const embed3 = new MessageEmbed()
   .setDescription(`:x: **|** <@${message.author.id}>, I dont have enough permissions to do this!`)
   .setColor("#990000")
      if (!message.guild.me.hasPermission(["MANAGE_SERVER"]))
    
      return message.channel.send(
       embed3
      );
      const embed4 = new MessageEmbed()
   .setDescription(`:x: **|** <@${message.author.id}>, You dont have enough permissions to do this!`)
   .setColor("#990000")
   const embed2 = new MessageEmbed()
   .setDescription(`:white_check_mark: **|** <@${nom}> has been muted.`)
   .setColor("#00ff00")
      if (!message.channel.permissionsFor(message.member).has(['MOVE_MEMBERS']))
      return message.channel.send(
        embed4
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Please Mention User That You Want To mute in Voice Channel!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`<@${nom}>Is Not In Any Voice Channel!`);

    person.voice.setMute(true);
    
    message.channel.send(embed2)
      

      }
    else if (args[1] === "false"){
      
    
      const nom = message.mentions.users.first().id
      if (!message.guild.me.hasPermission(["MANAGE_SERVER"]))
      return message.channel.send(
        "I Don't Have Proper Permissions To Use This Command!"
      );
      if (!message.channel.permissionsFor(message.member).has(['MOVE_MEMBERS']))
      return message.channel.send(
        "You Don't Have Proper Permissions To Use This Command!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Please Mention User That You Want To unmute from Voice Channel!`
      );

    let { channel } = message.mentions.members.first().voice;
   const embed1 = new MessageEmbed()
   .setDescription(`:white_check_mark: **|** <@${nom}> has been unmuted.`)
   .setColor("#00ff00")
    if (!channel)
      return message.channel.send(embed1);

    person.voice.setMute(false);
    
    message.channel.send(embed1)
      
    }
    }
}