const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require ("discord.js")
const fetch = require('superagent');
module.exports = {
  name: "gunify",
  description: "Adds gun emoji after evrry word",
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
    if (!args[0])
            return message.channel.send(
                `:gun: **|** :gun: How :gun: can :gun: I :gun: gunify :gun: that :gun: message? :gun:`
            );

        const text = args.join(' :gun: ');

        if(text.includes('@')) return message.lineReply(`:gun: No :gun:`)
        
        if(text.length > 100) return message.channel.send(`:gun: **|** :gun: That's :gun: over :gun: the :gun: limit! :gun:`)

        message.channel.send(`:gun: ${text} :gun:`)
  }
}