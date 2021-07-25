const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { FastType } = require('weky');
const { MessageButton, MessageActionRow } = require('discord-buttons');
var randomWords = require('random-words');
const word = randomWords();
module.exports = {
  name: "fasttype",
  description: `Test your typing speed. gg`,
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["ft"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      const game = new FastType({
    message: message,
    winMessage: "GG you won!", //message sent when user types perfectly
    sentence: word, //sentence-to-be-typed
    loseMessage: 'Lost ;(', //message sent when user misspell it
    time: 50000, //time that user has in ms
    startMessage: 'Good Luck!' //message sent when user starts playing
});
game.start();

    }
}