const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();
const { DiscordTogether } = require('discord-together');
const Discord = require("discord.js")
client.snipes = new Discord.Collection();
const Chatbot  =  require("discord-chatbot");
const RPC = require('discord-rpc'); // npm i discord-rpc
const rpc = new RPC.Client({transport: 'ipc'});
let snipe = new Discord.Collection();
const chatbot  =  new  Chatbot({name: "Klay", gender: "Female"});
client.snipes = new Discord.Collection();
require('discord-buttons')(client);
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
 client.on("messageDelete", async (message) => {
 snipe.set(message.channel.id, {
 content: message.content,
 author: message.author,
 });
 });

 rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Hello there!', // Large text which is under the client name
        state: 'How you doin?', // Small text under the large text
        startTimestamp: new Date(), // starts new time stamp | you can add hourse to start from!
        largeImageKey: 'LARGE-KEY', // Images keys can get from https://discord.com/developers/applications > Your client > Rich Presence > Art Assets > upload ur image and the name is: 'LARGE-KEY'!
        largeImageText: 'Text 3', // text shows when you aim on the large image
        smallImageKey: 'SMALL-KEY', // Images keys can get from https://discord.com/developers/applications > Your client > Rich Presence > Art Assets > upload ur image and the name is_ 'SMALL-KEY'!
        smallImageText: 'Text 4', // text shows when you aim on the small image
        buttons: [{label : 'button1', url : 'URL here'},{label : 'button2', url : 'URL 2 HERE'}] // you con delete the buttons 
    });

    console.log('RPC online');
});

rpc.login({
    clientId: '838762939296382996' // create client from https://discord.com/developers/applications then go to General Information and copy the APPLICATION ID! NOTE: Don't add bot to the application! 
});
client.on("message", async (message) => {

     if (message.content===`;snipe`) {
      if (message.member.hasPermission("MANAGE_SERVER") == "false")
      return;
  const msg = snipe.get(message.channel.id);
 if (!msg) return message.channel.send(":x: | Theres Nothing To Snipe");
 const embed = new Discord.MessageEmbed()
 .setTitle("Last Deleted Message")
 .setColor("RANDOM")
 .setTimestamp()
 .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
 .addFields(
 { name: "Sender", value: msg.author.username },
 { name: "Content", value: msg.content }
 );
 message.channel.send(embed);
     }
 
  // let GuildDB = await client.GetGuild(message.guild.id)
  // if (message.channel.id === GuildDB.chatbot || "840152907583979530")
  

// chatbot.chat("Hello").then(message.channel.send).catch(e => console.log(e));

//   if (message.author.bot) return;
//   let msg = message.content;

//   let emojis = msg.match(/(?<=:)([^:\s]+)(?=:)/g)
//   if (!emojis) return;
//   emojis.forEach(m => {
   
    
//     let emoji = client.emojis.cache.find(x => x.name === m)
//     if (!emoji) return;
//     let temp = emoji.toString()
//     if (new RegExp(temp, "g").test(msg)) msg = msg.replace(new RegExp(temp, "g"), emoji.toString())
//     else msg = msg.replace(new RegExp(":" + m + ":", "g"), emoji.toString());
//   })

//   if (msg === message.content) return;

//   let webhook = await message.channel.fetchWebhooks();
//   let number = randomNumber(1, 2);
//   webhook = webhook.find(x => x.name === "NQN" + number);

//   if (!webhook) {
//     webhook = await message.channel.createWebhook(`NQN` + number, {
//       avatar: client.user.displayAvatarURL({ dynamic: true })
//     });
//   }

//   await webhook.edit({
//     name: message.member.nickname ? message.member.nickname : message.author.username,
//     avatar: message.author.displayAvatarURL({ dynamic: true })
//   })

//   message.delete().catch(err => { })
//   webhook.send(msg).catch(err => { })

//   await webhook.edit({
//     name: `NQN` + number,
//     avatar: client.user.displayAvatarURL({ dynamic: true })
//   })
 })


client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
  
let GuildDB = await client.GetGuild(message.guild.id)
     if (message.content===`${GuildDB.prefix}start youtube`) {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
     }
      if (message.content === `${GuildDB.prefix}start poker`) {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
      }
       if (message.content === `${GuildDB.prefix}start betrayal`) {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
       }
        if (message.content === `${GuildDB.prefix}start fishing`) {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
      }
      if (message.content === `${GuildDB.prefix}start chess`) {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
      }
});


client.build();


module.exports = client//;-;

