const { MessageEmbed } = require("discord.js");
const util = require('minecraft-server-util');
module.exports = {
    name: "mcserver",
    description: "Get stats about a minecraft jave/bedrock server",
    usage: "<IP> <port>",
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
       if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Description', value: response.description},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version},
                {name: 'Ping', value: response.roundTripLatency},
            )
            .setFooter('Mc server util by KlayBot');
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
          const offlineEmbed = new MessageEmbed()
          .setTitle("The IP: "+args[0]+" is currently offline :red_circle:")
          .setDescription("Try again later or contact `the admins` to start the server :)")
          .setColor("RANDOM")
            message.channel.send(offlineEmbed);
            throw error;
        })
    }
}