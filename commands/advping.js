const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
    name: "advping",
    description: "Checks for the latency of the bot",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["advlatency"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        let circles = {
      green: "🟢",
      yellow: "🟡",
      red: "🔴"
  }

  const msg = await message.channel.send(new Discord.MessageEmbed()
  .setColor("RED") //you can change this
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .addField("Websocket", 
      `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
  ))

  let ping = msg.createdTimestamp - message.createdTimestamp;

  msg.edit(
      new Discord.MessageEmbed()
      .setColor()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .addField("Websocket", 
      `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
  )
      .addField("RoundTrip",
      `${ping <= 200 ? circles.green : ping <= 400 ? circles.yellow : circles.red} ${ping} ms `
      )
  )

  }
};