const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require("discord.js")
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
    name: "sus",
    description: "Stupid AF",
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
      const butn = new MessageButton()
            .setLabel(`SUS!?`)
            .setStyle('gray')
            .setID('amogus');

        let msg = await message.channel.send(`Sussy bruh`, {
            button: butn,
        });

        client.on('clickButton', async (button) => {
            if (button.id === 'amogus') {
                await button.reply.send(`SUS! THE IMPOSTER IS SUS!!!`)
            }
        });
    }
}