const {Message, MessageEmbed, MessageAttachment } = require('discord.js');
const Discord = require("discord.js")
const guildNumber = new Map();
const guildAttempts = new Map();

function guildNumberMap(message) {
    const guildId = message.guild.id;

    var number = Math.floor(Math.random() * 100) + 1;
    // If there is no command running map for the guild, create one
    if (!guildNumber.get(guildId)) {
        guildNumber.set(guildId, number);
    }
}

function guildAttemptsMap(message) {
    const guildId = message.guild.id;
    // If there is no command running map for the guild, create one
    if (!guildAttempts.get(guildId)) {
        guildAttempts.set(guildId, { attempts: 1 });
    } else {
        guildAttempts.get(guildId).attempts++;
    }
}
module.exports = {
  name: "guessthenumber",
  description: `Play the guess the number game`,
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["gtn"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
       const { member, channel, guild } = message;

        const provideaguess = new Discord.MessageEmbed()
            .setTitle("Error")
            .setColor('#F30B04')
            .setDescription(`**❌ Please provide a guess!**`)
        const embed = new MessageEmbed()
        .setTitle("Picked the number, start guessing using the prefix `-gtn`")
        .setColor("RANDOM")
        
        const pickinganumber = new Discord.MessageEmbed()
            .setTitle("Picking a number....")
            .setColor('#33F304')
            .setDescription('**Picking a number between 1 and 100**')
    
                 



        await guildNumberMap(message);
        await guildAttemptsMap(message);

        let guess = args[0];
        if (!guess && guildAttempts.get(guild.id).attempts === 1) {
            return channel.send(pickinganumber).then(pickinganumber =>{ setTimeout(function() { pickinganumber.edit(embed)}, 5000)})
        } else if (!guess) {
            return channel.send(provideaguess);
        }
        const toHighForGuess = new Discord.MessageEmbed()
            .setTitle("Nope!")
            .setDescription(`${guess} Is to high!`)
            .setColor('RED')

        const toLowForGuess = new Discord.MessageEmbed()
            .setTitle("Nope!")
            .setDescription(`${guess} Is to low!`)
            .setColor('RED')

        const invalidNumber = new Discord.MessageEmbed()
            .setTitle("Error")
            .setDescription("Invalid number please try again!")
            .setColor('RED')

        if (+guess === guildNumber.get(guild.id)) {
            let attempts = guildAttempts.get(guild.id);

            const guessedthenumber = new Discord.MessageEmbed()
                .setColor('#33F304')
                .setDescription(`✅ Perfect, <@${member.id}> the number was ${guildNumber.get(guild.id)}, it took you ${attempts.attempts} attempts!`)

            channel.send(guessedthenumber);
            guildNumber.delete(guild.id);
            guildAttempts.delete(guild.id);


            return;
        } else if (+ guess < guildNumber.get(guild.id)) {
            return message.reply(toLowForGuess);
        } else if (+guess > guildNumber.get(guild.id)) {
            return message.reply(toHighForGuess);
        } else {
            return message.reply(invalidNumber);
        }

    },
};