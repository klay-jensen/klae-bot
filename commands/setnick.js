const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "setnick",
    description: "Change a user's nickname",
    usage: "<@user> <args>",
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
      if(!message.channel.permissionsFor(message.member).has("MANAGE_NICKNAMES")) return message.channel.send("You need `MANAGE_NICKNAMES` for using this command <:kek:811105176198971403>")
      member = message.mentions.users.first()
      if (!member) return message.channel.send("Use **;;nickme** command to change your nickname <:kek:811105176198971403>");
      const doneEmbed = new MessageEmbed()
      .setTitle("Successful!")
      .setDescription("Changed the nickname of **"+member.username+"** => **"+args.slice(1).join(" ")+"**")
      .setColor("RANDOM")
      message.guild.members.cache.get(member.id).setNickname(args.slice(1).join(" ")).then(()=>message.channel.send(doneEmbed)).catch(()=> message.channel.send("I dont have enough permissions to do this <:pepecryignore:810553257352495105>"))
    }
}