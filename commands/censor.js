const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "censor",
    description: "Say something, the bot will say that in the given channel (censored)",
    usage: "<args> <#channel>/none",
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
      
      let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send("||"+msg+"||")
        } else {
            msg = args.join(" ");
            message.channel.send("||"+msg+"||")
        }
    }
}
