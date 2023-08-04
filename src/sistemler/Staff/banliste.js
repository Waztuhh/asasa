const coin = require("../../mongoo/coin");
const moment = require("moment");
const ceza = require("../../mongoo/ceza");
const cezapuan = require("../../mongoo/cezapuan")
const banLimit = new Map();
moment.locale("tr");
const conf = require("../../ayarlar/sunucuayarlar.json")
const settings = require("../../ayarlar/botayarlar.json")
const { red, green } = require("../../ayarlar/emojiler.json")
module.exports = {
  conf: {
    aliases: ["banlist","yargılist","banliste"],
    name: "banliste",
    help: "banliste"
  },

  run: async (client, message, args, embed) => {
    if (!message.member.hasPermission("BAN_MEMBERS") &&  !conf.banHammer.some(x => message.member.roles.cache.has(x))) { message.channel.send("Yeterli yetkin bulunmuyor!").then(x=>x.delete({timeout:5000}))
    message.react(red)
    return }
    const ban = await client.fetchBan(message.guild, args[0]);
    if (ban) { message.channel.send( "Bu üye zaten banlı!").then(x=>x.delete({timeout:5000}))
    message.react(red)
    return }
    message.guild.fetchBans(true).then(banned => {
    let list = banned.map(user => `ID:                | Kullanıcı Adı:\n${user.user.id} | ${user.user.tag}`).join('\n');
    message.channel.send(`${list}\n\nSunucuda toplamda ${banned.size} yasaklı kullanıcı bulunmakta.`, { code: "js", split: true })
    message.react(green)
    })
  },
};

