const { MessageEmbed } = require("discord.js");
const snekfetch = require('snekfetch');
module.exports = {
  name: "foodporn",
  description: "Sends you mouthwatering food pictures 🤤",
  usage: "<user1> <user2>",
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
    try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/FoodPorn.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setURL(allowed[randomnumber].data.url)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("👍" + allowed[randomnumber].data.ups + "    ✒" + allowed[randomnumber].data.num_comments)
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
  }
}