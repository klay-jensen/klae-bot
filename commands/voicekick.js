const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "voicekick",
    description: "kICK A hooman from the VC (voice chanel smh)",
    usage: "<@user>",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["vk"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
      const nom = message.mentions.users.first().id
      if (!message.guild.me.hasPermission(["MANAGE_SERVER"]))
      return message.channel.send(
        "I Don't Have Proper Permissions To Use This Command!"
      );
      if (!message.channel.permissionsFor(message.member).has(['MOVE_MEMBERS']))
      return message.channel.send(
        "You Don't Have Proper Permissions To Use This Command!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Please Mention User That You Want To Kick From Voice Channel!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`<@${nom}>Is Not In Any Voice Channel!`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`<@${nom}> Has Been Kicked From Voice Channel!`)

    }
}