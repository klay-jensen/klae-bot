const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Ban a user or bot from the guild",
  usage: "<user> or <ID>",
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
      const member = message.mentions.users.first()
    if (message.member.hasPermission('BAN_MEMBERS'))
            {
        if(member){
            
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban().then(() =>{
            message.react('820739194073776128')
            const exampleEmbed = new MessageEmbed()
	        .setTitle(`${memberTarget.displayName} was banned from ${message.guild.name}`)
            .setColor('RANDOM')
            .setDescription("Banned user <@"+ memberTarget.id +"> <:pepeok:815779836340600832>")
            .setFooter(`Action by ${message.author.id}`)
            .setThumbnail("https://cdn.discordapp.com/avatars/"+memberTarget.user.id+"/"+memberTarget.user.avatar+".jpeg")
            .setTimestamp();

            message.channel.send(exampleEmbed)
            const kickEmbed = new MessageEmbed()
	        .setTitle("You were banned")
            .setColor('RANDOM')
            .setDescription(`Sadly, you were banned from ${message.guild.name}\n\nYou can ask the Admins/ Mods to unban you to join again.`)
            
            .setImage('https://cdn.discordapp.com/attachments/783338766743109659/823099196033990716/tenor.png')
            .setTimestamp();

            member.send(kickEmbed)
            member.send("<:pepeok:815779836340600832>")
            }).catch(() => {
                message.react('821392999040024606')
                const errEmbed = new MessageEmbed()
	            .setTitle("ERROR")
                .setColor('RANDOM')
                .setDescription("I dont have enough permissions to do this or <@"+memberTarget.id+"> is higher than me in the `role hierarchy` :( \n\n Permissions needed: `BAN_MEMBERS`\n"+"Alternatively, put me above <@"+memberTarget.id+"> in the `role hierarchy` <:pepeok:815779836340600832>")
            
                .setTimestamp();
                message.channel.send(errEmbed)

                });
            
            

        } else {
            message.react('821392999040024606')
            const exampleEmbed = new MessageEmbed()
	        .setTitle('Oops')
            .setColor('RANDOM')
	        .setDescription('Dont try to break me, try mentioning the person to be banned next time smh. :person_facepalming:');

            message.channel.send(exampleEmbed);
        }



    }
    else{
        message.react('821392999040024606')
        const exampleEmbed = new MessageEmbed()
	        .setTitle('Oops')
	        .setDescription('You dont have the permission `BAN_MEMBERS` :man_facepalming:');

            message.channel.send(exampleEmbed);
    }
  }
}