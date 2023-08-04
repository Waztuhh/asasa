const moment = require("moment");
require("moment-duration-format");
const messageGuild = require("../../mongoo/messageGuild");
const messageGuildChannel = require("../../mongoo/messageGuildChannel");
const voiceGuild = require("../../mongoo/voiceGuild");
const voiceGuildChannel = require("../../mongoo/voiceGuildChannel");
const messageUser = require("../../mongoo/messageUser");
const voiceUser = require("../../mongoo/voiceUser");
const { MessageEmbed } = require("discord.js");
const { MessageButton,MessageActionRow } = require('discord-buttons');
module.exports = {
    conf: {
      aliases: ["topstat","ts","top"],
      name: "topstat",
      help: "topstat"
    },
  
run: async (client, message, args, embed, prefix) => {
    const messageChannelData = await messageGuildChannel.find({ guildID: message.guild.id }).sort({ channelData: -1 });
    const voiceChannelData = await voiceGuildChannel.find({ guildID: message.guild.id }).sort({ channelData: -1 });
    const messageUsersData = await messageUser.find({ guildID: message.guild.id }).sort({ topStat: -1 });
    const voiceUsersData = await voiceUser.find({ guildID: message.guild.id }).sort({ topStat: -1 });
    const messageGuildData = await messageGuild.findOne({ guildID: message.guild.id });
    const voiceGuildData = await voiceGuild.findOne({ guildID: message.guild.id });
    const messageChannels = messageChannelData.splice(0, 15).map((x, index) => `\`${index+1}.\` <#${x.channelID}>: \`${Number(x.channelData).toLocaleString()} mesaj\``).join(`\n`);
    const voiceChannels = voiceChannelData.splice(0, 15).map((x, index) => `\`${index+1}.\` <#${x.channelID}>: \`${moment.duration(x.channelData).format("H [saat], m [dakika]")}\``).join(`\n`);
    const messageUsers = messageUsersData.splice(0, 10).map((x, index) => `\`${index+1}.\` <@${x.userID}>: \`${Number(x.topStat).toLocaleString()} mesaj\``).join(`\n`);
    const voiceUsers = voiceUsersData.splice(0, 10).map((x, index) => `\`${index+1}.\` <@${x.userID}>: \`${moment.duration(x.topStat).format("H [saat], m [dakika]")}\``).join(`\n`);
   
    var sescat = new MessageButton()
    .setID("ses")
    .setLabel("Ses Detayları")
    .setStyle("gray")

    var mescat = new MessageButton()
    .setID("mes")
    .setLabel("Mesaj Detayları")
    .setStyle("gray")

    var main = new MessageButton()
    .setID("main")
    .setLabel("Ana Sayfa")
    .setStyle("gray")

    const row = new MessageActionRow()
    .addComponent(main)
    .addComponent(sescat)
    .addComponent(mescat);
   
   
     embed.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
     .setDescription(`
${message.guild.name} sunucusunun toplam ses ve chat bilgileri gösterilmektedir.
    `)
    .addField(`**Genel ses sıralaması**(\`Toplam ${moment.duration(voiceGuildData ? voiceGuildData.topStat : 0).format("H [saat], m [dakika]")}\`)`,`${voiceUsers.length > 0 ? voiceUsers : "Veri Bulunmuyor."}`,true)
    .addField(`**Genel chat sıralaması**(\`Toplam ${Number(messageGuildData ? messageGuildData.topStat : 0).toLocaleString()} mesaj\`)`,`${messageUsers.length > 0 ? messageUsers : "Veri Bulunmuyor."}`,true)
    let msg = await message.channel.send({ buttons : [main, sescat, mescat], embed: embed})
    var filter = (button) => button.clicker.user.id === message.author.id;
     
let collector = await msg.createButtonCollector(filter, { time: 9999999 })
collector.on("collect", async (button) => {
if(button.id === "ses") {
await button.reply.defer()
const embeds = new MessageEmbed()
.setDescription(`
${voiceChannels.length > 0 ? voiceChannels : "Veri Bulunmuyor."}`).setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
msg.edit({
embed: embeds,
components : row
})}
if(button.id === "mes") {
await button.reply.defer()
const embeds = new MessageEmbed()
.setDescription(`
${messageChannels.length > 0 ? messageChannels : "Veri Bulunmuyor."}
`).setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
msg.edit({
embed: embeds,
components : row
})}
if(button.id === "main") {
await button.reply.defer()
msg.edit({
embed: embed,
components : row
})}
})
},
  };
  
  