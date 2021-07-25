const { MessageEmbed, MessageReaction } = require("discord.js");

module.exports = {
  name: "prefix",
  description: "Check the bot's prefix",
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
    let embed = new MessageEmbed()
      .setAuthor(
        "Dashboard ",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `You can access the dashboard by clicking [here](https://Marshmello-music.klayjensen.repl.co)`);
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
        "Guild Prefix",
        client.user.displayAvatarURL()
      )
      .setColor("RANDOM")
      .setDescription(
        "[ "+GuildDB.prefix+" ]\n\nTo access the dashboard click [here](https://Marshmello-music.klayjensen.repl.co)");
    interaction.send(embed);
  },
  },
};
