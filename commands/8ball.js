const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  description: "Get a random yes/no for a question.",
  usage: "[question]",
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
    
    var list = [
    'It is certain',
    'Maybe No?',
    'No You!',
    'What Do You Think?',
    'Srsly?',
    'Nah',
    'Hmmmmmmmmmmmm?',
    'Nup',
    'Do You Think Im Stupid?',
    'noooooooooooo it is not',
    'i cant',
    'Come Ask Later Plz Im Tired',
    'Come Ask Later',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now', 
    'Concentrate and ask again',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
    ];
//The randomizer    Math.floor = rounds to the nearest integers     Math.random = Generates random number between a number between 0 and 1      list.length = Grabs the length of the list 
var rand = Math.floor(Math.random() * list.length);

//Send's a reply to the user who wrote the message
const embed = new MessageEmbed()
.setTitle(args.join(" "))
.setDescription(list[rand])
.setColor("RANDOM")

message.channel.send(embed)
  }
}