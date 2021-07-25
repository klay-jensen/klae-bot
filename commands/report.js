const { MessageEmbed } = require("discord.js");


  module.exports = {
    name: "report",
    description: `REPORT A BUG`,
    usage: "Even idk honestly",
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
     // Useless try and catch incoming: 
      try {
        message.reply("Aight, check DMs!");
      } catch (error) {
          console.log(error)
      }
      
      // Questions, use whatever you want
      const questions = [
        'Welcome! Thanks for spotting a bug and taking the time to report it, to proceed - type anything here!',
        'Can you explain the Bug? As detailed as possible!',
        'Oh, alright! Thanks for reporting the Bug - I would send this to the Devs. Type anything to proceed',
        "Successfully reported this Bug to my developers, thanks so much Sir!"
    ];

    let collectCounter = 0;
    let endCounter = 0;

    const filter = m => m.author.id === message.author.id;
    const appStart = await message.author.send(questions[collectCounter++]);
    const channel = appStart.channel;

    const collector = channel.createMessageCollector(filter);

    collector.on('collect', () => {
        if (collectCounter < questions.length) {
            channel.send(questions[collectCounter++]);
        } else {
            channel.send(`Thanks For Your Feedback`);
            collector.stop('fulfilled');
        }
    });
    const appChannel = client.users.cache.get('834036408204132352'); // Channel of the Devs (Report channel)
    collector.on('end', (collected, reason) => {
        if (reason === 'fulfilled') {
            let index = 1;
            const mapped = collected
                .map(msg => {
                    return `**${index++})** | ${questions[endCounter++]}\n-> ${
                        msg.content
                    }`;
                })
                .join('\n\n');
            
                const embed999 = new MessageEmbed().setAuthor(
                    message.author.tag,
                    message.author.displayAvatarURL({ dynamic: true })
                ).setTitle`New Bug Reported`
                    .setDescription(mapped)
                    .setColor(client.color)
                    .setTimestamp()
            
                message.channel.send(embed999)
            
        }
    });
  }
  }