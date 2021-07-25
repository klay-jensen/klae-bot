/**
 * 
 * @param {require("../structures/DiscordMusicBot")} client 
 * @param {require("discord.js").Message} message 
 * @returns {void} aka: nothing ;-;
 */

module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;
  let prefix = client.config.DefaultPrefix;

  let GuildDB = await client.GetGuild(message.guild.id);
  if (GuildDB && GuildDB.prefix) prefix = GuildDB.prefix;

  //Initialize GuildDB
  if (!GuildDB) {
    await client.database.guild.set(message.guild.id, {
      prefix: prefix,
      DJ: null,
    });
    GuildDB = await client.GetGuild(message.guild.id);
  }
  
if (message.content.includes("<@751054122387767317>")){
        message.react("840084005797888030")
      }
    if (message.content.includes("<@!751054122387767317>")){
       message.react("840084005797888030")
      }  
if (message.content.includes("<@752371687365804096>")){
        message.react("826887203526410240")
        message.react("810551673868386315")
        message.react("823820413644701726")
        message.react("820890739901857813")
        message.react("811105176198971403")
        message.react("826309212669345793")
        message.react("810552778132684800")
        
    }
    if (message.content.includes("<@!752371687365804096>")){
       message.react("826887203526410240")
        message.react("810551673868386315")
        message.react("823820413644701726")
        message.react("820890739901857813")
        message.react("811105176198971403")
        message.react("826309212669345793")
        message.react("810552778132684800")
    }
    if (message.content.includes("<@428017095696187404>")){
        message.react("💻")
        message.react("💾")
        message.react("📟")    
        
    }
    if (message.content.includes("<@!428017095696187404>")){
      message.react("💻")
        message.react("💾")
        message.react("📟")
    }if (message.content.includes("<@752508262733316147>")){
        message.react("823820685158907904")
         
        
    }
    if (message.content.includes("<@!752508262733316147>")){
      message.react("823820685158907904")
        
    }
  //Prefixes also have mention match
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  prefix = message.content.match(prefixMention)
    ? message.content.match(prefixMention)[0]
    : prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd =
    client.commands.get(command) ||
    client.commands.find((x) => x.aliases && x.aliases.includes(command));
//Executing the codes when we get the command or aliases
  if (cmd) {
    
    cmd.run(client, message, args, { GuildDB });
    client.CommandsRan++;
  } else return;

};
