const { MessageEmbed } = require("discord.js");
const covid = require('novelcovid')
module.exports = {
  name: "covid",
  description: "Gives you current covid stats.",
  usage: "<all> or <country name>",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["coronavirus","covid19"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (message.content === ";;covid all"){
        
        const covidStats = await covid.all()
        covid.all().then(console.log)
        
        return message.channel.send(new MessageEmbed()
            .setTitle('GLOBAL COVID-19 STATISTICS 🌍 ')
            .setDescription("Disclaimer: The actual count may differ from whats show here.")
            .setColor("RANDOM")
            .setFooter(`Stay home. Stay safe.`)
            .addFields(
                { name: ` Cases`, value: covidStats.cases.toLocaleString(), inline: true},
                { name: ` Cases Today`, value: covidStats.todayCases.toLocaleString(), inline: true},
                { name: ` Deaths`, value: covidStats.deaths.toLocaleString(), inline: true},
                { name: ` Deaths Today`, value: covidStats.todayDeaths.toLocaleString(), inline: true},
                { name: ` Recovered`, value: covidStats.recovered.toLocaleString(), inline: true},
                { name: ` Recovered Today`, value: covidStats.todayRecovered.toLocaleString(), inline: true},
                { name: ` Active Cases`, value: covidStats.active.toLocaleString(), inline: true},
                { name: ` In Critical Condition`, value: covidStats.critical.toLocaleString(), inline: true},
                { name: ` Tested`, value: covidStats.tests.toLocaleString(), inline: true}
            )
        )
    }else{
        const prefix = ";;";
        const countrycovid = message.content.slice(8).split(' ')
        const covidStats = await covid.countries({country: countrycovid})

        return message.channel.send(new MessageEmbed()
            .setTitle('COVID-19 STATS for **'+countrycovid+"** 👨‍⚕️🩺")
            .setDescription("Disclaimer: The actual count may differ from whats show here.")
            .setColor("RANDOM")
            .setFooter(`Stay home. Stay safe.`)
            .addFields(
                { name: ` Cases`, value: covidStats.cases.toLocaleString(), inline: true},
                { name: ` Cases Today`, value: covidStats.todayCases.toLocaleString(), inline: true},
                { name: ` Deaths`, value: covidStats.deaths.toLocaleString(), inline: true},
                { name: ` Deaths Today`, value: covidStats.todayDeaths.toLocaleString(), inline: true},
                { name: ` Recovered`, value: covidStats.recovered.toLocaleString(), inline: true},
                { name: ` Recovered Today`, value: covidStats.todayRecovered.toLocaleString(), inline: true},
                { name: ` Active Cases`, value: covidStats.active.toLocaleString(), inline: true},
                { name: ` In Critical Condition`, value: covidStats.critical.toLocaleString(), inline: true},
                { name: ` Tested`, value: covidStats.tests.toLocaleString(), inline: true}
            )
        )

    }
  }
}