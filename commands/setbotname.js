const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "setbotname",
    description: "Change the name of the bot (Onwer only command)",
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
      const newName = message.content.split(' ');

    if (!message.author.id === "752371687365804096"){
        return message.channel.send("YOnly owner of the bot can use this commnand");
    }
    
    try{
        client.user.setUsername(newName[1])
            .then(user => message.channel.send(`My new username is **${user.username}**`))
            .catch(console.error);
    }
    catch(error){
        message.channel.send("I could not set my new username :sob:");
    }
    }
}