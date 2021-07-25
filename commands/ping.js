const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "ping",
    description: "Checks for the latency of the bot",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["latency"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        let days = 0
        let week = 0
        let uptime = '';
        let totalSeconds = (client.uptime / 1000)
        let hours = Math.floor(totalSeconds / 3600)
        totalSeconds %= 3600
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = Math.floor(totalSeconds % 60)
        if (hours > 24) {
            days = days + 1
            hours = 0
        }
        if (week - 0) {
            uptime += `${week} week, `
        }
        if (minutes > 60) {
            minutes = 0;
        }
        uptime += `${days}d, ${hours}h, ${minutes}m and ${seconds}s`
        const embed = new MessageEmbed()
            .addField('Client Ping', `${client.ws.ping}ms`, true)
            .addField('API Latency', `${Date.now() - message.createdTimestamp}ms`, true)
            .addField('Bot Uptime', `${uptime}!`)
            .setColor('#7884d0')
        message.channel.send(`${message.author}`, embed)
    },

  SlashCommand: {
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, interaction, args, { GuildDB }) => {
    let days = 0
        let week = 0
        let uptime = '';
        let totalSeconds = (client.uptime / 1000)
        let hours = Math.floor(totalSeconds / 3600)
        totalSeconds %= 3600
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = Math.floor(totalSeconds % 60)
        if (hours > 24) {
            days = days + 1
            hours = 0
        }
        if (week - 0) {
            uptime += `${week} week, `
        }
        if (minutes > 60) {
            minutes = 0;
        }
        uptime += `${days}d, ${hours}h, ${minutes}m and ${seconds}s`
    let embed = new MessageEmbed()
      .setAuthor(
        "Pong 🏓 ")
      .setColor("RANDOM")
      .addField('Client Ping', `${client.ws.ping}ms`, true)
      .addField('Bot Uptime', `${uptime}!`, true)
      .addField('Developer', `Klay Jensen#3637`)
            .setColor('#7884d0')
    interaction.send(embed);
  },
  },
};