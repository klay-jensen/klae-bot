const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "To know about the bot and commands",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["8b"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );

    let Embed = new MessageEmbed()
      .setAuthor(`Commands of ${client.user.username}`, client.config.IconURL)
      .setThumbnail("https://i.imgur.com/ULFOFEL.png")
      .setURL("https://discord-musicbot-3.klayjensen.repl.co")
      .setColor("RANDOM")
      .setTitle(
        `To get info of each command type ${
          GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
        }help [Command]`
      ).setDescription("Thanks for using KlayBot!\nyou can view a category's cogs and commands using `;;help <category>`")
      
            .addFields(
                { name: ':frame_photo: | Image', value: '`;;help Image`\nGenerate images and memes!',inline: true },
                //{ name: '\u200B', value: '\u200B' },
                { name: ':partying_face: | Fun', value: '`;;help Fun`\nSolo and group fun!', inline: true },
                // { name: '‍', value: '‍', inline: true },
                { name: ':hammer: | Moderation', value: '`;;help Moderation`\nPowerful moderation tools.', inline: true },
                { name: ':tools: | Utility', value: '`;;help Utility`\nChat utility commands', inline: true },
                // { name: '‍', value: '‍', inline: true },
                { name: ':dog: Animals', value: '`;;help animals`\nAwww animal pics', inline: true },
                { name: ':musical_note: Music', value: '`;;help music`\nBetter-than-groovy music bot.', inline: true },
                { name: ':game_die: Games', value: '`;;help games`\nDope to games to play with the bot & your friends (sed u have none)', inline: true },
                
                )
                .setFooter('Type ;;help <category> for more info on a category.');
    if (!args[0]) message.channel.send(Embed);
    else if (args[0] === 'animals' || args[0] === 'animal') {
            const imageEmbed = new  MessageEmbed()
		.setTitle("Animals Help")
		.setURL("https://discord.com/api/oauth2/authorize?client_id=838762939296382996&permissions=4294442871&redirect_uri=http%3A%2F%2Fdiscord-musicbot-3.klayjensen.repl.co%2Fapi%2Fcallback&scope=bot%20applications.commands")
		.setDescription("`bird, cat, dog, fox, koala, panda, redpanda, pandafact, dogfact, koalafact, catfact. Foxfact, birdfact`")
		.setFooter("Awwww animal images fo you | Use prefix ;;help <command_name> for more info")
		.setColor("RANDOM");

        message.channel.send(imageEmbed)
    }
    else if (args[0] === 'fun'){
            const funEmbed = new MessageEmbed()
            .setTitle("Fun Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=838762939296382996&permissions=4294442871&redirect_uri=http%3A%2F%2Fdiscord-musicbot-3.klayjensen.repl.co%2Fapi%2Fcallback&scope=bot%20applications.commands")
            .setDescription("`8ball, advice, antijoke, ascii, bon, caps, chuck, cuddle, emojify, foodporn,  , gayrate, , hack, hug,  joke, kill, kiss, meme, noobrate, pat, perform, pokemon, pp, pun, punch, quotes, rad, roast, rps, say, ship, showerthoughts, simprate, slap, spam, spoiler,  uselessweb, waifu, wiki, wink, moot, gunify, clap, sudo, flip.`")
            .setFooter("Fake commands look real, but are fake | Use prefix ;;help <command_name> for more info")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }
        else if (args[0] === 'moderation'){
            const funEmbed = new MessageEmbed()
            .setTitle("Moderation Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=838762939296382996&permissions=4294442871&redirect_uri=http%3A%2F%2Fdiscord-musicbot-3.klayjensen.repl.co%2Fapi%2Fcallback&scope=bot%20applications.commands")
            .setDescription("`ban, unban, softban,  createmuterole, addemoji, mute,  kick, voicekick, servermute,  lock, unlock, lockdown on/off, maintenance on/off, nuke, setnick, nickme, slowmode,  warn, purge, addrole, removerole, rolememberinfo, channelinfo, serverinfo`")
            .setFooter("Powerful moderation tools | Use prefix ;;help <command_name> for more info")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }
        else if (args[0] === 'utility'){
            const funEmbed = new MessageEmbed()
            .setTitle("Utility Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=838762939296382996&permissions=4294442871&redirect_uri=http%3A%2F%2Fdiscord-musicbot-3.klayjensen.repl.co%2Fapi%2Fcallback&scope=bot%20applications.commands")
            .setDescription("`animesearch, Avatar, botinfo, calculate, calculator, covid, help,  invite,  mcserver, ping,  poll, roleinfo,   sysinfo, weather, whois, remind, color, translate, urbandictionary, choose, music.`")
            .setFooter("Nice to have utility commands | Use prefix ;;help <command_name> for more info")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }
        else if (args[0] === 'image' || args[0] === 'images'){
            const funEmbed = new MessageEmbed()
            .setTitle("Image Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=838762939296382996&permissions=4294442871&redirect_uri=http%3A%2F%2Fdiscord-musicbot-3.klayjensen.repl.co%2Fapi%2Fcallback&scope=bot%20applications.commands")
            .setDescription("`gay, glass, hornycard, jail, simpcard, spank, trash, trigger, tweet, wasted, blur, bed, beautiful, affect, changemymind, clyde, delete, facepalm, grayscale, hitler, invert, jail, jokeoverhead, kiss, ohno, opinion, phub, rip, shit, slap, spank, trash, creatememe, memetemplates, nsfw.`")
            .setFooter("OP image manipulation commands | Use prefix ;;help <command_name> for more info")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }
        else if (args[0] === 'games' || args[0] === 'Games'){
            const funEmbed = new MessageEmbed()
            .setTitle("Games Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=838762939296382996&permissions=4294442871&redirect_uri=http%3A%2F%2Fdiscord-musicbot-3.klayjensen.repl.co%2Fapi%2Fcallback&scope=bot%20applications.commands")
            .setDescription("`truth, dare, fight, wouldyourather,reactioncheck, flames,akinator(aki), ttt (tictactoe), fasttype, chaoswords, shuffleguess.`")
            .setFooter("Fun games to play with your friends! | Use prefix ;;help <command_name> for more info")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }else if (args[0] === 'MUSIC' || args[0] === 'music'){
            const funEmbed = new MessageEmbed()
            .setTitle("Music Help")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=838762939296382996&permissions=4294442871&redirect_uri=http%3A%2F%2Fdiscord-musicbot-3.klayjensen.repl.co%2Fapi%2Fcallback&scope=bot%20applications.commands")
            .setDescription("`bassboost , grab,   leave, loop,  lyrics, nowplaying, pause,   play,  queue,  remove,  resume, search, seek,  shuffle,   skip,  skipto, volume.`")
            .setFooter("Amazing music commands! | Use prefix ;;help <command_name> for more info")
            .setColor("RANDOM")

            message.channel.send(funEmbed)
        }
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendError(message.channel, "Unable to find that command");

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.config.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .addField(
          "Permissions",
          "__Member:__ " +
            cmd.permissions.member.join(", ") +
            "\n__Bot:__ " +
            cmd.permissions.channel.join(", "),
          true
        )
        .setFooter(
          "Created by Klay Jensen#3637"
        );

      message.channel.send(embed);
      message.channel.send(`${Commands.join(" ")}`)
    }
  },

SlashCommand: {
    options: [
      {
        name: "command",
        description: "Command help",
        value: "command",
        type: 3,
        required: false,
        options: [],

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
          `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
      );
  
      let Embed = new MessageEmbed()
        .setTitle(`Commands of ${client.user.username}`, client.config.IconURL)
        .setURL("https://discord-musicbot-3.klayjensen.repl.co")
        .setColor("RANDOM")
        .setFooter(
          `To get info of each command type ${
            GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
          }help [Command] | Have a nice day!`
        ).setDescription("Thanks for using KlayBot!\nyou can view a category's cogs and commands using `;;help Category.`")
        .addFields(
                { name: ':frame_photo: | Image', value: '`;;help Image`\nGenerate images and memes!',inline: true },
                //{ name: '\u200B', value: '\u200B' },
                { name: ':partying_face: | Fun', value: '`;;help Fun`\nSolo and group fun!', inline: true },
        
                { name: '‍', value: '‍', inline: true },
                { name: ':hammer: | Moderation', value: '`;;help Moderation`\nPowerful moderation tools.', inline: true },
                { name: ':tools: | Utility', value: '`;;help Utility`\nChat utility commands', inline: true },
                { name: '‍', value: '‍', inline: true },
                { name: ':dog: Animals', value: '`;;help animals`\nAwww animal pics', inline: true },
                { name: ':musical_note: Music', value: '`;;helpmusc`\nBetter-than-groovy music bot.', inline: true },
                
                
                )
      if (!args[0]) interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0]) ||
          client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
        if (!cmd)
          return client.sendError(interaction, "Unable to find that command");
  
        let embed = new MessageEmbed()
          .setAuthor(`Command: ${cmd.name}`, client.config.IconURL)
          .setDescription(cmd.description)
          .setColor("GREEN")
          //.addField("Name", cmd.name, true)
          .addField("Aliases", cmd.aliases.join(", "), true)
          .addField(
            "Usage",
            `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
          )
          .addField(
            "Permissions",
            "Member: " +
              cmd.permissions.member.join(", ") +
              "\nBot: " +
              cmd.permissions.channel.join(", "),
            true
          )
          .setFooter(
            `Prefix - ${
              GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
            }`
          );
  
        interaction.send(embed);
      }
  }},
],
}};
