const { MessageEmbed } = require("discord.js");
const math = require('mathjs');
module.exports = {
  name: "caps",
  description: "FUN: Random caps for the given arguement",
  usage: "<args>",
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
    if (!args[0]) return message.reply("Please also provide text to randomize");

        //Text needs to be in a const here
        const str = args.join(" ");

        //Gets the randomized text and sends it
        const randified = randify(str);
        message.channel.send(randified);

        //Randomizes the text
        function randify(string) {
            const arr = string.toLowerCase().split("");
            arr.forEach((e, i, a) => (Math.random() > .4) ? a[i] = e.toUpperCase() : e);
            return arr.join("");
        };
  }
}