const { MessageEmbed } = require("discord.js");
const {MessageAttachment , MessageCollector} = require("discord.js")
module.exports = {
    name: "softbam",
    description: "Ban and unban user immediately, this works as a handy message purge for the mentioned user. All the messages in the past 7 days by the user is deleted.",
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
      const member = message.mentions.users.first()
    if (message.member.hasPermission('BAN_MEMBERS'))
            {
        if(member){
            
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban(7).then(() =>{
            let bUser = bans.find(b => b.user.id == memberTarget)
            message.guild.members.unban(bUser.user)
            message.react('820739194073776128')
            const exampleEmbed = new MessageEmbed()
	        .setTitle(`Softbanned${memberTarget.displayName} from ${message.guild.name}`)
            .setColor('RANDOM')
            .setDescription("Soft banned user <@"+ memberTarget.id +"> :hammer:\n\n Tip: In softban, the user is banned and unbanned immediately, to get rid of his/her messages.")
            .setFooter(`Action by ${message.author.id}`)
            .setThumbnail("https://cdn.discordapp.com/avatars/"+memberTarget.user.id+"/"+memberTarget.user.avatar+".jpeg")
            .setTimestamp();

            message.channel.send(exampleEmbed)}).catch(() => {
                message.react('821392999040024606')
                const errEmbed = new MessageEmbed()
	            .setTitle("ERROR")
                .setColor('RANDOM')
                .setDescription("I dont have enough permissions to do this or <@"+memberTarget.id+"> is higher than me in the `role hierarchy` :( \n\n Permissions needed: `BAN_MEMBERS`\n"+"Alternatively, put me above <@"+memberTarget.id+"> in the `role hierarchy` <:pepeok:815779836340600832>")
            
                .setTimestamp();
                message.channel.send(errEmbed)

                })

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