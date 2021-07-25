const { MessageEmbed } = require("discord.js");
const Memer = require("random-jokes-api");
module.exports = {
    name: "rad",
    description: "Rolls a die for you die 🎲",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["rolladie"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
      
        const memberTarget = message.author;
        const options = [
            `<@${memberTarget.id}> you rolled **1** \n\n<:pepeok:815779836340600832>`,
            `<@${memberTarget.id}> you rolled **2** \n\n<:pepeok:815779836340600832>`,
            `<@${memberTarget.id}> you rolled **3** \n\n<:pepeok:815779836340600832>`,
            `<@${memberTarget.id}> you rolled **4** \n\n<:pepeok:815779836340600832>`,
            `<@${memberTarget.id}> you rolled **5** \n\n<:pepeok:815779836340600832>`,
            `<@${memberTarget.id}> you rolled **6** \n\n<:pepeok:815779836340600832>`,
            `<@${memberTarget.id}> your die flew outside the board <:kek:811105176198971403>`
            
            

            ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send("Rolling the die... :game_die: ").then(m =>{
       
        const radEmbed = new MessageEmbed()
        .setTitle('You rolled...')
        .setColor('RANDOM')
        .setDescription(`\n${option}`);
        setTimeout(function(){
        m.edit(radEmbed) }, 2000)
        
        
    });
    }
}