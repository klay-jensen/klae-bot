const { MessageEmbed } = require("discord.js");
const ms = require("ms")
module.exports = {
    name: "remind",
    description: "reminds you about something",
    usage: "<what?> <time>",
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
      let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`**Yo, reminder without any time? Enter the time lmao**`)

        const wrongtime = new MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`**Sorry I only do d, m, h, or s.**`)

        const reminderembed = new MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`**So reminder for nothing? Enter a reason, smh.**`)

        if (!args[0]) return message.channel.send(notime)
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.channel.send(wrongtime)
        if (!reminder) return message.channel.send(reminderembed)

        const remindertime = new MessageEmbed()
        .setColor('#33F304')
        .setDescription(`\**Your reminder will go off in ${time}**`)
        .setFooter("It will be in your DM's smh")

        message.channel.send(remindertime)

        const reminderdm = new MessageEmbed()
        .setColor('#7289DA')
        .setTitle('**REMINDER**')
        .setDescription(`**It has been ${time} here is your reminder:** ${reminder}`)  

        setTimeout(async function () {
           try{

            await user.send(reminderdm)
           }catch(err){

           } 
           
        }, ms(time));
    }
}