const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
    name: "waifu",
    description: "Waifu rate a user",
    usage: "<@user>/none",
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
            `<@${memberTarget.id}> is **1%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **2%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **3%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **4%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **5%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **6%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **7%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **8%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **9%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **10%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **11%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **12%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **13%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **14%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **15%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **16%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **17%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **18%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **19%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **20%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **21%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **22%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **23%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **24%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **25%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **26%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **27%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **28%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **29%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **30%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **31%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **32%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **33%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **34%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **35%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **36%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **37%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **38%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **39%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **40%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **41%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **42%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **43%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **44%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **45%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **46%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **47%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **48%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **49%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **50%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **51%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **52%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **53%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **54%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **55%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **56%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **57%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **58%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **59%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **60%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **61%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **62%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **63%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **64%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **65%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **66%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **67%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **68%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **69%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **70%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **71%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **72%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **73%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **74%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **75%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **76%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **77%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **78%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **79%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **80%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **81%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **82%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **83%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **84%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **85%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **86%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **87%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **88%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **89%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **90%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **91%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **92%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **93%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **94%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **95%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **96%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **97%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **98%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **99%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **100%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **101%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **6969%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **420%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **1000%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is **1001%** waifu <:waifu:822850936389107713>`,
            `<@${memberTarget.id}> is not at all waifu <:pepeok:815779836340600832>`

            ]
        
        const option = options[Math.floor(Math.random() * options.length)]
        const waifuEmbed = new MessageEmbed()
        .setTitle('waifu r8 machine')
        .setColor('RANDOM')
        .setDescription(`\n${option}`);
        message.channel.send(waifuEmbed);
    }
}