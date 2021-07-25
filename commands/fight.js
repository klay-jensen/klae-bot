const { MessageEmbed } = require("discord.js");
const { fight } = require('weky')

module.exports = {
  name: "fight",
  description: "Fight a user of your choice",
  usage: "<@user>",
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
     const oppenent = message.mentions.users.first();
    if (!oppenent) return message.channel.send(`Please mention who you want to fight`);
const { fight } = require('weky')
const x = new fight({
    client: client,
    message: message,
    acceptMessage: 'Click to fight with <@' + message.author + '>',
    challenger: message.author,
    opponent: message.mentions.users.first(),
    hitButtonText: 'HIT',
    hitButtonColor: 'red',
    healButtonText: 'HEAL',
    healButtonColor:  'green',
    cancelButtonText: 'CANCEL',
    cancelButtonColor: 'blurple',
})
x.start()

  }
}