const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dashboard",
  description: "Access the dashboard using this!",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["dash"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Dashboard ",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `You can access the dashboard by clicking [here](https://Marshmello-music.klayjensen.repl.co)`);
    message.channel.send(embed);
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
    let embed = new MessageEmbed()
      .setAuthor(
        "Dashboard ",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `You can log into the dashboard by clicking [here](https://Marshmello-music.klayjensen.repl.co)`);
    interaction.send(embed);
  },
  },
};
