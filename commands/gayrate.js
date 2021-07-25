const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require ("discord.js")

module.exports = {
  name: "gayrate",
  description: "Returns how gay is a user?",
  usage: "<user>/none",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["howgay"],
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
            `<@${memberTarget.id}> is **1%** gay `,
            `<@${memberTarget.id}> is **2%** gay `,
            `<@${memberTarget.id}> is **3%** gay `,
            `<@${memberTarget.id}> is **4%** gay `,
            `<@${memberTarget.id}> is **5%** gay `,
            `<@${memberTarget.id}> is **6%** gay `,
            `<@${memberTarget.id}> is **7%** gay `,
            `<@${memberTarget.id}> is **8%** gay `,
            `<@${memberTarget.id}> is **9%** gay `,
            `<@${memberTarget.id}> is **10%** gay `,
            `<@${memberTarget.id}> is **11%** gay `,
            `<@${memberTarget.id}> is **12%** gay `,
            `<@${memberTarget.id}> is **13%** gay `,
            `<@${memberTarget.id}> is **14%** gay `, 
            `<@${memberTarget.id}> is **15%** gay `,
            `<@${memberTarget.id}> is **16%** gay `,
            `<@${memberTarget.id}> is **17%** gay `,
            `<@${memberTarget.id}> is **18%** gay `,
            `<@${memberTarget.id}> is **19%** gay `,
            `<@${memberTarget.id}> is **20%** gay `,
            `<@${memberTarget.id}> is **21%** gay `,
            `<@${memberTarget.id}> is **22%** gay `,
            `<@${memberTarget.id}> is **23%** gay `,
            `<@${memberTarget.id}> is **24%** gay `,
            `<@${memberTarget.id}> is **25%** gay `,
            `<@${memberTarget.id}> is **26%** gay `,
            `<@${memberTarget.id}> is **27%** gay `,
            `<@${memberTarget.id}> is **28%** gay `,
            `<@${memberTarget.id}> is **29%** gay `,
            `<@${memberTarget.id}> is **30%** gay `,
            `<@${memberTarget.id}> is **31%** gay `,
            `<@${memberTarget.id}> is **32%** gay `,
            `<@${memberTarget.id}> is **33%** gay `,
            `<@${memberTarget.id}> is **34%** gay `,
            `<@${memberTarget.id}> is **35%** gay `,
            `<@${memberTarget.id}> is **36%** gay `,
            `<@${memberTarget.id}> is **37%** gay `,
            `<@${memberTarget.id}> is **38%** gay `,
            `<@${memberTarget.id}> is **39%** gay `,
            `<@${memberTarget.id}> is **40%** gay `,
            `<@${memberTarget.id}> is **41%** gay `,
            `<@${memberTarget.id}> is **42%** gay `,
            `<@${memberTarget.id}> is **43%** gay `,
            `<@${memberTarget.id}> is **44%** gay `,
            `<@${memberTarget.id}> is **45%** gay `,
            `<@${memberTarget.id}> is **46%** gay `,
            `<@${memberTarget.id}> is **47%** gay `,
            `<@${memberTarget.id}> is **48%** gay `,
            `<@${memberTarget.id}> is **49%** gay `,
            `<@${memberTarget.id}> is **50%** gay `,
            `<@${memberTarget.id}> is **51%** gay `,
            `<@${memberTarget.id}> is **52%** gay `,
            `<@${memberTarget.id}> is **53%** gay `,
            `<@${memberTarget.id}> is **54%** gay `,
            `<@${memberTarget.id}> is **55%** gay `,
            `<@${memberTarget.id}> is **56%** gay `,
            `<@${memberTarget.id}> is **57%** gay `,
            `<@${memberTarget.id}> is **58%** gay `,
            `<@${memberTarget.id}> is **59%** gay `,
            `<@${memberTarget.id}> is **60%** gay `,
            `<@${memberTarget.id}> is **61%** gay `,
            `<@${memberTarget.id}> is **62%** gay `,
            `<@${memberTarget.id}> is **63%** gay `,
            `<@${memberTarget.id}> is **64%** gay `,
            `<@${memberTarget.id}> is **65%** gay `,
            `<@${memberTarget.id}> is **66%** gay `,
            `<@${memberTarget.id}> is **67%** gay `,
            `<@${memberTarget.id}> is **68%** gay `,
            `<@${memberTarget.id}> is **69%** gay `,
            `<@${memberTarget.id}> is **70%** gay `,
            `<@${memberTarget.id}> is **71%** gay `,
            `<@${memberTarget.id}> is **72%** gay `,
            `<@${memberTarget.id}> is **73%** gay `,
            `<@${memberTarget.id}> is **74%** gay `,
            `<@${memberTarget.id}> is **75%** gay `,
            `<@${memberTarget.id}> is **76%** gay `,
            `<@${memberTarget.id}> is **77%** gay `,
            `<@${memberTarget.id}> is **78%** gay `,
            `<@${memberTarget.id}> is **79%** gay `,
            `<@${memberTarget.id}> is **80%** gay `,
            `<@${memberTarget.id}> is **81%** gay `,
            `<@${memberTarget.id}> is **82%** gay `,
            `<@${memberTarget.id}> is **83%** gay `,
            `<@${memberTarget.id}> is **84%** gay `,
            `<@${memberTarget.id}> is **85%** gay `,
            `<@${memberTarget.id}> is **86%** gay `,
            `<@${memberTarget.id}> is **87%** gay `,
            `<@${memberTarget.id}> is **88%** gay `,
            `<@${memberTarget.id}> is **89%** gay `,
            `<@${memberTarget.id}> is **90%** gay `,
            `<@${memberTarget.id}> is **91%** gay `,
            `<@${memberTarget.id}> is **92%** gay `,
            `<@${memberTarget.id}> is **93%** gay `,
            `<@${memberTarget.id}> is **94%** gay `,
            `<@${memberTarget.id}> is **95%** gay `,
            `<@${memberTarget.id}> is **96%** gay `,
            `<@${memberTarget.id}> is **97%** gay `,
            `<@${memberTarget.id}> is **98%** gay `,
            `<@${memberTarget.id}> is **99%** gay `,
            `<@${memberTarget.id}> is **100%** gay `,
            `<@${memberTarget.id}> is **101%** gay `,
            `<@${memberTarget.id}> is **6969%** gay `,
            `<@${memberTarget.id}> is **420%** gay `,
            `<@${memberTarget.id}> is **1000%** gay `,
            `<@${memberTarget.id}> is **1001%** gay `,
            `<@${memberTarget.id}> is not a gay <:pepeok:815779836340600832>`

            ]
        
        const option = options[Math.floor(Math.random() * options.length)]
        const gayEmbed = new MessageEmbed()
        .setTitle('gay r8 machine')
        .setColor('RANDOM')
        .setDescription(`\n${option}`);
        message.channel.send(gayEmbed);
  }
}