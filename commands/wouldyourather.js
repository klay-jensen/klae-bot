const { MessageEmbed } = require("discord.js");
const request = require("node-superfetch")
module.exports = {
  name: "wouldyourather",
  description: "play would you rather with your friends",
  usage: "<@user>",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["wyr"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
 if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":X_: You dont have the perms to run this command.")

        let option1
        let option2
        let URLresult

        const { text } = await request.get('http://either.io/')
        URLresult = await JSON.parse(text.match(/window.initial_question = (\{.+\})/)[1]).question

        const url = `http://either.io/${URLresult.id}/${URLresult.slug}`

        option1 = await URLresult.option_1
        option2 = await URLresult.option_2
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Would You Rather')
        .setAuthor(`For ${member.user.tag}`)
        .setURL(url)
        .setDescription(`${ option1} **or** ${ option2}?`)
        .setFooter("Imagine being truthful", "https://cdn.discordapp.com/emojis/812664644203970581.png?v=1")


          }


  }