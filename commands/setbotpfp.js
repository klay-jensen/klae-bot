const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "setbotpfp",
    description: "Change bot's pfp (owner only command)",
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
      if (message.author.id != "752371687365804096")
    return message.channel.send("This is an owner-only command, get the fuck off nigg. <:really:826309212669345793>");
      const errEmbed = new MessageEmbed()
      .setTitle ("Err, u suck")
      .setDescription("Imagine setting the pfp to **nothing** <:pogged:796229059704127519>")
      const fastEmbed = new MessageEmbed()
      .setTitle("Too fast!")
      .setDescription("Slow down bud, you are changoing your bot's pfp too fast")
      .setFooter("smh, nice pfp tho")
      image = message.attachments.first().url;
      if(!image) return (errEmbed);
      client.user.setAvatar(image).catch(() => message.channel.send(fastEmbed));
      const embed = new MessageEmbed()
      .setTitle("pfp change successfull")
      .setDescription("pog pfp changed!")
      .setColor("RANDOM")
      message.channel.send(embed)
    }
}