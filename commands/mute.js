const { MessageEmbed } = require("discord.js");
const ms = require("ms")
module.exports = {
    name: "mute",
    description: "Mutes a user for a specific time",
    usage: "<user> <time s/m/h>",
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
      if (message.member.hasPermission('KICK_MEMBERS'))
      {
      
      
      var role = message.guild.roles.cache.find(r => r.name === "Muted")
        if(!role) return message.channel.send("You dont have a muterole set for this guild. Type `;;createmuterole` to create one :)")
        const muteRoleId = role.id
        
        
        let muteRole;
    
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) 
          return message.channel.send('Please mention a user or provide a valid user ID');
        if (member === message.member)
          return message.channel.send('You cannot mute yourself');
        if (member === message.guild.me) return message.channel.send(message, 0, 'You cannot mute me');
        if (member.roles.highest.position >= message.member.roles.highest.position)
          return message.channel.send('You cannot mute someone with an equal or higher role');
        if (!args[1])
          return message.channel.send('Please enter a length of time of 14 days or less (1s/m/h/d)');
        let time = ms(args[1]);
        if (!time || time > 1209600000) // Cap at 14 days, larger than 24.8 days causes integer overflow
          return message.channel.send('Please enter a length of time of 14 days or less (1s/m/h/d)');
    
        let reason = args.slice(2).join(' ');
        if (!reason) reason = '`None Provided`';
        if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';
    
        if (member.roles.cache.has(role))
          return message.channel.send('Provided member is already muted');
    
        // Mute member
        try {
          await member.roles.add(role);
        } catch (err) {
          console.log(err)
          return message.channel.send('An error occurred', err.message);
        }
        message.guild.channels.cache.forEach(ch => ch.updateOverwrite(role, {SEND_MESSAGES: false, ADD_REACTIONS: false}))
      
        const muteEmbed = new MessageEmbed()
          .setTitle('Mute Member')
          .setDescription(`${member} has now been muted for **${ms(time, { long: true })}**.`)
          .addField('Moderator', message.member, true)
          .addField('Member', member, true)
          .addField('Time', `\`${ms(time)}\``, true)
          .addField('Reason', reason)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(muteEmbed);
    
        // Unmute member
        if (!member.roles.cache.has(role))
          return;
        member.timeout = message.client.setTimeout(async () => {
          
            await member.roles.remove(role)
            
        }, time);
      }else{
        message.channel.send("Normies cant use this command lmao")
      }
    }
}