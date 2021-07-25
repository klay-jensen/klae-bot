const { MessageEmbed } = require("discord.js");
const {MessageAttachment} = require ("discord.js")
const fetch = require('superagent');
module.exports = {
  name: "hack",
  description: "fake hacks a person",
  usage: "<user>",
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
    const member = message.mentions.users.first()
        if(!member) return message.channel.send("Imagine hacking noone, smh.");
    const user = message.author
    message.channel.send("Hacking...").then((message) => {
      const cords = ["90.0000° N, 135.0000° W", "90.0000° S, 45.0000° E"];
      message.edit("Still Hacking....");
      message.edit("Close to Completion");
      message.edit("Hacked!! Location: ``90.0000° S, 45.0000° E``");
      message.channel.send("Finding Passwords...").then((message) => {
        message.edit("Finding Logging Info..");
        message.edit("Still Finding.....");
        message.edit("They have VPN");
        message.edit(
          "FOUND! ``Login : skibop124@gmail.com, Password : IamSuperCool!``")
        message.channel.send("Finding Credit Info...").then((message) => {
            message.edit("Finding....");
            message.edit("Breaking Firewall...");
            message.edit("Creditnal Hacking Process Failed! We may be caught!");
            message.delete();
        })
        message.channel.send("Almost finishing...").then((message) => {
            message.edit("[▖] Finding discord login... (2fa bypassed)`");
            message.edit(
              "**Successfull**, details sent to you in DM's"
            );
            message.channel.send("Almost finishing...").then((message) => {
                message.edit("[▖] Finding discord login... (2fa bypassed)`");
                message.edit(
                  "**Successfull**, details sent to you in DM's"
                );
                message.channel.send("Last step...").then((message) => {
                    message.edit("▝] Fetching DM's with closest friends (They have no friends)").then(()=>{setTimeout(function(){message.edit(
                        "Oof sed life, sent you bot users info in DM's <:wheeze:835083916054495263>"
                      )}, 3000)})

                    
                  }).then(()=>{setTimeout(function(){ message.channel.send("*Completed the totally realistic hack*")
                user.send("Assume i told you all the details :rofl:")
                }, 26500)})
                
               
              });
          });
    });
    
    });
  }
}