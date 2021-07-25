const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

  module.exports = {
    name: "removerole",
    description: `Remove a role from a member`,
    usage: "[name | nickname | mention | ID] <role>",
    permissions: {
      channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
      member: [],
    },
    aliases: ["rr"],

    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
     if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**Your Dont Have The Permissions To Remove Role From Users! - [MANAGE_ROLES]**");

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**I Dont Have The Permissions To Remove Roles From Users! - [MANAGE_ROLES]**");
        
        if (!args[0]) return message.channel.send("**Please Enter A User!**")

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.channel.send("**Couldn't Find That User**");

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("**Please Enter A Role!**");

        if (!role) return message.channel.send("**Couldn't Find That Role**");

        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Remove Role From This User! - [Higher Than Me In Role Hierachy]**')
        if (message.guild.me.roles.highest.comparePositionTo(role) < 0) return message.channel.send('**Role Is Currently Higher Than Me Therefore Cannot Remove It From The User!**')
        if (role.managed) return message.channel.send("**Cannot Remove That Role From This User!**")

        if (!rMember.roles.cache.has(role.id)) return message.channel.send("**User Doesnt Has The Role!**")
        if (rMember.roles.cache.has(role.id)) await (rMember.roles.remove(role.id));

        const sembed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(`Role has been** removed** from ${rMember.user.username}`)
        message.channel.send(sembed);
  }
  }