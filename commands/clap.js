const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require ("discord.js")
const fetch = require('superagent');
module.exports = {
  name: "clap",
  description: "Adds clap emoji after evrry word",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["clapify"],
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
                `:clap: **|** :clap: How :clap: can :clap: I :clap: gunify :clap: that :clap: message? :clap:`
            );

        const text = args.join(' :clap: ');

        if(text.includes('@')) return message.lineReply(`:clap: No :clap:`)
        
        if(text.length > 100) return message.channel.send(`:clap: **|** :clap: That's :clap: over :clap: the :clap: limit! :clap:`)

        message.channel.send(`:clap: ${text} :clap:`)
  }
}