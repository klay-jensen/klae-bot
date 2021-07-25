const { MessageEmbed } = require("discord.js");
const { Calculator } = require('weky')
const { MessageButton, MessageActionRow } = require('discord-buttons');
var randomWords = require('random-words');
module.exports = {
  name: "shuffleguess",
  description: "Play the shuffle game",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["sg"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    const word = randomWords();

const { ShuffleGuess } = require('weky');
const game = new ShuffleGuess({
              message: message,
              word: word, //or a simple word
              winMessage: "GG you won!", //message sent when user's message matches with the word
              colorReshuffleButton: 'green', //color of the reshuffle button (regen)
              messageReshuffleButton: 'reshuffle', //text of the reshuffle button (regen)
              colorCancelButton: 'red', //color of the cancel button (exit, quit, stop)
              messageCancelButton: 'cancel', //text of the cancel button
              client: client
});
game.start();

  }
}