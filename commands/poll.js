const { MessageEmbed } = require("discord.js");
var Pokedex = require("pokedex-promise-v2"),
pokedex = new Pokedex();

module.exports = {
    name: "poll",
    description: "Generate a poll with 👍, 👎 or 🤷‍♀️",
    usage: "<question>",
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
      if (message.member.hasPermission('ADMINISTRATOR')){
            if(!args[0]){
             message.channel.send("So poll on nothing?")
            }else{
       
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(0).join(' ');

        let embedPoll = new MessageEmbed()
        .setTitle(pollDescription)
        .setAuthor(`${message.author.username} asks...`, message.author.displayAvatarURL())
        .setDescription("`"+"Choose one of the options below" +"`"+" <:pepeok:815779836340600832>")
        .setColor('RANDOM')
        
        .setTimestamp()
        
        message.channel.send(embedPoll).then(m =>{
            m.react("👍")
            m.react("👎")
            m.react("🤷‍♀️")
            });
        }
    }
        
        else{
            message.react('821392999040024606')
            const serverlist = new MessageEmbed()
            .setAuthor(`${message.author.username} you dont have enough permissions 🙄.`) // use the general 'guilds' string. 
            .setColor('RANDOM')
            message.channel.send(serverlist)

        }
    }
}