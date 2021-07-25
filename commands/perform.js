const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");
const pickup = [
  "Well, here I am. What are your other two wishes?",
  "Hey, my name's Microsft. Can I crash at your place tonight?",
  "Are you French? Because Eiffel for you.",
  "Do you like raisins? How do you feel about a date?",
  "There is something wrong with my cell phone. It doesn't have your number in it.",
  "If I could rearrange the alphabet, I’d put ‘U’ and ‘I’ together.",
  "Aside from being sexy, what do you do for a living?",
  "I must be a snowflake, because I've fallen for you.",
  "Are you from Tennessee? Because you're the only 10 I see!",
  "If you were a Transformer… you’d be Optimus Fine.",
  "Are you a parking ticket? Because you’ve got FINE written all over you.",
  "I wish I were cross-eyed so I can see you twice.",
  "I must be in a museum, because you truly are a work of art.",
  "Do you believe in love at first sight—or should I walk by again?",
  "I'm no photographer, but I can picture us together.",
  "Feel my shirt. Know what it’s made of? Boyfriend material.",
  "Are you related to Jean-Claude Van Damme? Because Jean-Claude Van Damme you’re sexy!",
  "If you were a chicken, you’d be impeccable.",
  "Did your license get suspended for driving all these guys crazy?",
  "I’m learning about important dates in history. Wanna be one of them?",
  "Baby, if you were words on a page, you’d be fine print.",
  "Did you just come out of the oven? Because you’re hot.",
  "It’s a good thing I have my library card because I am totally checking you out.",
  "I was blinded by your beauty; I’m going to need your name and phone number for insurance purposes.",
  "I was wondering if you had an extra heart. Because mine was just stolen.",
  "Is your name Google? Because you have everything I’ve been searching for.",
  "Are you a bank loan? Because you got my interest.",
  "Are you a time traveler? Cause I see you in my future!",
  "Can I follow you where you’re going right now? Because my parents always told me to follow my dreams.",
  "Is this the Hogwarts Express? Because it feels like you and I are headed somewhere magical.",
  "Life without you is like a broken pencil…pointless.",
  "Something’s wrong with my eyes because I can’t take them off you.",
  "My love for you is like diarrhea, I just can't hold it in.",
  "Somebody better call God, because he’s missing an angel.",
  "We’re not socks, but I think we’d make a great pair.",
  "You must be tired because you've been running through my mind all night.",
  "Do you have a map? I keep getting lost in your eyes.",
  "Do you have a BandAid? I just scraped my knee falling for you.",
  "Do you like Star Wars? Because Yoda only one for me!",
  "Do you like Star Wars? Because Yoda only one for me!",
  "Did the sun come out or did you just smile at me?",
  "Do you know CPR? Because you are taking my breath away!",
  "You’re so beautiful that you made me forget my pickup line."

];
const position = [
          "doggystyle",
          "69 (sixty nine)",
          "reverse cowgirl",
          "corkscrew",
          "pretzel dip",
          "G - whiz",
          "cowgirl's helper",
          "wheelbarrow",
          "leap frog",
          "stand and deliver",
          "magic mountain",
          "cowboy",
          "ballet dancer",
          "golden arch",
          "reverse scoop"
        ];
module.exports = {
    name: "perform",
    description: "Perform few acts with @user",
    usage: "<flirt>/<gift>/<date>/<bangbang>",
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
      
      const mention = message.mentions.users.first()
      if (!mention) return message.channel.send('You can not perform "stuff" alone')
      if (mention.bot === true) return message.channel.send("Imagine doing **stuff** with a non-human <:pogged:796229059704127519>")
      const member = message.mentions.users.first().id
      if (args[0] === "date"){
           message.channel.send("😍 <@"+message.author.id+"> took <@"+member+"> on a nice date :)")
      }else if(args[0] === "dinner"){
        const embed = new MessageEmbed()
        .setTitle("Performed: dinner with "+mention.username)
        .setDescription("🍜 <@"+message.author.id+"> takes <@"+member+"> on a fancy dinner <:pogged:796229059704127519>")
        .setColor("RANDOM");
        message.channel.send(embed)
      }else if(args[0] === "gift"){
        const embed = new MessageEmbed()
        .setTitle("Perform: gift to "+mention.username)
        .setDescription("🎁 <@"+message.author.id+"> gifts <@"+member+"> **"+args.slice(2).join(" ")+"** 🎁")
        .setColor("RANDOM");
        message.channel.send(embed)

      }else if(args[0] === "flirt"){
        const randomMessage = pickup[Math.floor(Math.random() * pickup.length)];
        const embed = new MessageEmbed()
        .setTitle("Perform: flirt with "+mention.username)
        .setDescription("<@"+message.author.id+"> trys to flirt with <@"+member+">\n **"+randomMessage+"**")
        .setColor("RANDOM");
        message.channel.send(embed)
      }else if(args[0] === "bangbang"){
        const randomMessage = position[Math.floor(Math.random() * position.length)];
        const sexembed = new MessageEmbed()
        .setTitle("Performed: bang bang with "+mention.username)
        .setDescription("<@"+message.author.id+"> bangs <@"+member+"> in:\n**"+randomMessage+"**  👌👈 <:pogged:796229059704127519>")
        .setColor("RANDOM");
        message.channel.send(sexembed)
      }
    }
}