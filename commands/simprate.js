const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require("discord.js")
module.exports = {
    name: "simprate",
    description: "Check how much of a simp is a person",
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
            `<@${memberTarget.id}> is **1%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **2%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **3%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **4%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **5%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **6%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **7%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **8%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **9%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **10%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **11%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **12%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **13%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **14%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **15%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **16%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **17%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **18%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **19%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **20%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **21%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **22%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **23%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **24%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **25%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **26%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **27%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **28%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **29%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **30%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **31%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **32%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **33%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **34%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **35%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **36%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **37%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **38%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **39%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **40%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **41%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **42%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **43%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **44%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **45%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **46%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **47%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **48%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **49%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **50%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **51%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **52%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **53%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **54%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **55%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **56%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **57%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **58%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **59%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **60%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **61%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **62%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **63%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **64%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **65%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **66%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **67%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **68%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **69%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **70%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **71%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **72%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **73%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **74%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **75%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **76%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **77%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **78%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **79%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **80%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **81%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **82%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **83%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **84%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **85%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **86%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **87%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **88%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **89%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **90%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **91%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **92%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **93%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **94%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **95%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **96%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **97%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **98%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **99%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **100%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **101%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **6969%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **420%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **1000%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is **1001%** simp <:kek:811105176198971403>`,
            `<@${memberTarget.id}> is not a simp <:pepeok:815779836340600832>`

            ]
        
        const option = options[Math.floor(Math.random() * options.length)]
        const simpEmbed = new MessageEmbed()
        .setTitle('simp r8 machine')
        .setColor('RANDOM')
        .setDescription(`\n${option}`);
        message.channel.send(simpEmbed);
    }
}