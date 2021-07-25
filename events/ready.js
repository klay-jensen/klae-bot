const Discord = require('discord.js')

module.exports = async (client) => {
  client.Ready = true;
    client.Manager.init(client.user.id);
    setInterval(async ()=>{
        
        let textList = [';;help | Shard 9', `${client.guilds.cache.size} servers`]
        var text = textList[Math.floor(Math.random() * textList.length)];
        client.user.setActivity(text , { type: 'LISTENING' })
    },5000)
    client.log("Successfully Logged in as " + client.user.tag);

  client.RegisterSlashCommands()
};
