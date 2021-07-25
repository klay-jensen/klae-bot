const { Client, Message, MessageEmbed } = require('discord.js');
const { mem, cpu } = require("node-os-utils")
let m = require('moment-duration-format'),
    os = require('os'),
    cpuStat = require('cpu-stat'),
    ms = require('ms'),
    moment = require('moment')
    const version1 = require("discord.js").version
module.exports = {
    name: "sysinfo",
    description: "Retrievs the information on the system the bot uses",
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
      cpuStat.usagePercent(async function (error, percent) {
            if (error) {
              return console.error(error)
            }
            const cores = os.cpus().length
            const cpuModel = os.cpus()[0].model
            const guilds = client.guilds.cache.size.toLocaleString()
            const users = client.users.cache.size.toLocaleString()
            const channels = client.channels.cache.size.toLocaleString()
            const usage = formatBytes(process.memoryUsage().heapUsed)
            const node = process.version
            const CPU = percent.toFixed(2)
            const { totalMemMb, usedMemMb } = await mem.info()
      let days = 0
        let week = 0
        let uptime = '';
        let totalSeconds = (client.uptime / 1000)
        let hours = Math.floor(totalSeconds / 3600)
        totalSeconds %= 3600
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = Math.floor(totalSeconds % 60)
        if (hours > 24) {
            days = days + 1
            hours = 0
        }
        if (week - 0) {
            uptime += `${week} week, `
        }
        if (minutes > 60) {
            minutes = 0;
        }
        uptime += `${days}d, ${hours}h, ${minutes}m and ${seconds}s`
      const embed = new MessageEmbed()
      .setAuthor("KlayBot")
      .setTitle("__Stats:__")
      .addFields(
                { name: ':hourglass_flowing_sand: Mem usage', value: "`"+usage+"`",inline: true },
                
                { name: '⌚ Uptime', value: "`"+uptime+"`", inline: true },
        
                { name: '‍<a:hackerman:848530840564137995> Discord.js', value: "`v"+version1+"`", inline: true },
                { name: ':space_invader: Node', value: "`"+node+"`", inline: true },
                { name: 'CPU usage', value: "`"+CPU+"`", inline: true },
                { name: '📀 Ram used:', value: "`"+usedMemMb+" Mb / "+totalMemMb+" Mb`", inline: true },
                { name: ':computer: Platform', value: "`"+process.platform+"`", inline: true },
                { name: ':robot: Arch', value:"`"+process.arch+"`" , inline: true },
                { name: ':robot: CPU', value:"```"+cpuModel+"```" },
                { name: '📡 Client Ping', value: "`"+client.ws.ping+"` ms", inline: true },
                
                { name: ':man_pouting: Dev', value: 'Klay Jensen#3637', inline: true },
                )
.setFooter("#990000")
                message.channel.send(embed)
      
    })
    function formatBytes (a, b) {
            let c = 1024;
            d = b || 2
            e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            f = Math.floor(Math.log(a) / Math.log(c));

            return parseFloat((a / Math.pow(c, f)).toFixed(d)) + "" + e[f]
        }
    }
}