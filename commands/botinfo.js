const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "botinfo",
  description: "Sends you stats of the bot",
  usage: "",
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
           
if (message.member.id === "752371687365804096")
        {
message.delete()
 message.react('820739194073776128')
 message.channel.send(':white_check_mark: **Stats of KlayBot** :white_check_mark: ')
  let mcount = client.users.cache.size;
  const exampleEmbed1 = new MessageEmbed()
	.setColor('RANDOM')
	.setDescription('**Users:**`' + `${mcount}` + '`')
    message.channel.send(exampleEmbed1);
  let scount = client.guilds.cache.size;
    const exampleEmbed2 = new MessageEmbed()
	.setColor('RANDOM')
	.setDescription('**Servers:**`' + `${scount}` + '`')
    message.channel.send(exampleEmbed2);
  let tcount = message.guild.channels.cache.filter((c) => c.type === "text").size;
    
        let guilds = '';
        client.guilds.cache.forEach((guild) => {
            guilds = guilds.concat(guild).concat("\n"); // concatenate the guild and add a new line in the end.
        })
        const serverlist = new MessageEmbed()
        .setTitle(`𝘚𝘦𝘳𝘷𝘦𝘳𝘴 KlayBot 𝘪𝘴 𝘪𝘯.`)
        .setDescription(guilds) // use the general 'guilds' string.
        .setFooter(`DM #Klay Jensen#9999 to invite!`)
        .setColor('RANDOM')
        message.channel.send(serverlist)
    }
    else{
        
        const serverlist = new MessageEmbed()
        .setAuthor(`${message.author.username} you not the owner, smh. 😤`) // use the general 'guilds' string. 
        .setColor('RANDOM')
        message.channel.send(serverlist)
    }
  }
}
