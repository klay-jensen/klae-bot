const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
    name: "warn",
    description: "Warn a user",
    usage: "<@user> <reason>/none",
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
      let warnPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Please mention a valid member of this server");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No Reason Provided)";
            
            member.send(`You have been warned by <${message.author.username}> in ${message.guild.name} for : ${reason}`)
            .catch(error => message.channel.send(`Sorry <${message.author}> I couldn't n't warn because of : ${error}`));
            let warnEmbed = new MessageEmbed()
            .setTitle("**__Warn Report__**")
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Warn\``)
            .addField(`**Moderator:**`, `${message.author}`)

            message.channel.send(warnEmbed)
    }
}