const { MessageEmbed } = require("discord.js");
const ms = require("ms")
module.exports = {
    name: "noobrate",
    description: "Tells how noob is a person?",
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
      
        const member = message.mentions.members.first();
        const memberTarget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
        const options = [
            `<@${memberTarget.id}> is **1%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **2%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **3%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **4%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **5%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **6%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **7%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **8%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **9%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **10%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **11%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **12%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **13%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **14%** 🅽🅾🅾🅱 `, 
            `<@${memberTarget.id}> is **15%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **16%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **17%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **18%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **19%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **20%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **21%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **22%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **23%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **24%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **25%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **26%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **27%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **28%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **29%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **30%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **31%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **32%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **33%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **34%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **35%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **36%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **37%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **38%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **39%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **40%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **41%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **42%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **43%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **44%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **45%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **46%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **47%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **48%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **49%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **50%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **51%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **52%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **53%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **54%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **55%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **56%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **57%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **58%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **59%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **60%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **61%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **62%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **63%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **64%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **65%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **66%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **67%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **68%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **69%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **70%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **71%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **72%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **73%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **74%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **75%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **76%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **77%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **78%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **79%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **80%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **81%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **82%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **83%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **84%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **85%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **86%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **87%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **88%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **89%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **90%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **91%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **92%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **93%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **94%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **95%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **96%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **97%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **98%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **99%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **100%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **101%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **6969%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **420%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **1000%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is **1001%** 🅽🅾🅾🅱 `,
            `<@${memberTarget.id}> is not a 🅽🅾🅾🅱 <:pepeok:815779836340600832>`

            ]
        
        const option = options[Math.floor(Math.random() * options.length)]
        const noobEmbed = new MessageEmbed()
        .setTitle('Ｎｏｏｂ  r8 machine')
        .setColor('RANDOM')
        .setDescription(`\n${option}`);
        message.channel.send(noobEmbed);
    }
}