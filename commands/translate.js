const {Client, Message, MessageEmbed } = require ('discord.js');
const translate = require('@iamtraction/google-translate')

module.exports = {
    name: "translate",  
    description: "Translate to different languages\n Use https://developers.google.com/admin-sdk/directory/v1/languages for reference to the language codes :)",
    usage: "<lang_code> <text>",

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
       try {
      const query = args.slice(1).join(" ");
    if (!query) return message.reply("Please type a text to translate.\n Click [here](https://developers.google.com/admin-sdk/directory/v1/languages) to get the language codes.")
const arg = args[0]

    const translated = await translate(query, {to: `${arg}`});
    const embed = new MessageEmbed()
    .setTitle("Translated Successfully.")
    .addField("Your Query", `\`\`\`fix\n${query}\`\`\``)
    .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
    .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
    .setColor("#d4c5a2")
    message.channel.send(embed)

    } catch (error) {
      return message.channel.send("Your question is invalid! You need to use the command like this: `>translate <language> <text>\n Click [here](https://developers.google.com/admin-sdk/directory/v1/languages) to get the language codes.`")
      .then(() => console.log(error));
    }
    }
};