const { MessageEmbed } = require("discord.js");
const fetch = require('superagent');
const Quotes = require('randomquote-api');
module.exports = {
  name: "advice",
  description: "Gives you the advice you need...",
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
    
        const Quotes = require('randomquote-api')

        // To get one random Quote you do
        
        const randomquote = Quotes.randomQuote();
        
        
        // to get Ten random quotes you do
        
        const randomTen = Quotes.randomTen()
        
        
        // to get a number amount of quotes by who said them
        
        const getbyauthor = Quotes.getbyauthor('J.R.R. Tolkien', 10)
        const quoteEmbed = new MessageEmbed()
        .setTitle("Advice.")
        .setDescription(randomquote.quote)
        .setFooter("By- "+randomquote.author)
        
        message.channel.send(quoteEmbed)
        
  }
}