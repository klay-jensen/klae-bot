const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { ChaosWords } = require("weky")
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
  name: "chaoswords",
  description: `Shows Channel Info`,
  usage: "[ channel mention | channel name | ID] (optional)",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["chaos"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      var randomWords = require('random-words');
      const words = randomWords(2) //generating 2 words
      await new ChaosWords({
      message: message,
      maxTries: 8, //max number  of user's tries (ends when reach limit)
      charGenerated: 20, //length of sentence (small length might throw error)
      words: words, //words (array) => ['word']
      embedTitle: 'Chaos words!', //understable
      embedFooter: 'Find the words in the sentence!',
      embedColor: 'RANDOM'
  }).start()
    }
}