const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")


module.exports = {
    name: "pressf",
    description: "Pay respects for something",
    usage: ";;pressf <for what?>",
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
      const filter = (reaction, user) => {
	return reaction.emoji.name === 'image2' && user.id === message.author.id;
};
      if(!args[0]) return message.channel.send("Please mention what do you want to pay respects for. Usage: `;;pressf trangy squad``");
      const respectEmbed = new Discord.MessageEmbed()
      
      .setDescription(`Press F to pay respects for `+args.join(" "))
      .setColor("RANDOM")
      message.channel.send(respectEmbed).then(sentembed=> sentembed.react("844580772744396820"))
      
      const collector = message.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', (reaction, user) => {
     message.channel.send(`${user.tag} has paid their respects.`);
});
collector.on('end', collected => {
	message.channel.send(`${collected.size} people have paid their respects.`);
});

    }
}