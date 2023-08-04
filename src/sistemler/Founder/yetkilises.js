const conf = require("../../ayarlar/sunucuayarlar.json")
const ayar = require("../../ayarlar/botayarlar.json")
const moment = require("moment");
moment.locale("tr");
const { red } = require("../../ayarlar/emojiler.json")
let table = require("string-table");

module.exports = {
  conf: {
    aliases: ["ysay","yetkilises","sesteolmayan"],
    name: "ysay",
    help: "ysay"
  },

  run: async (client, message, args, embed, durum) => {

  if (!message.guild) return;
  if (!message.member.permissions.has(8)) return message.react(red)

    let YetkiliRol = ayar.registerPerm
    const sec = args[0]
    if (!sec) {

	  let Yousef = message.guild.members.cache.filter(member => {
			return member.roles.cache.has(YetkiliRol) && !member.voice.channel && member.presence.status !== "offline" && !member.user.bot && !ayar.owners.includes(member.user.id)
		  }).map(member => ("<@" + member.user.id + ">")).join(",");
      let SesteOlmayanYetkili = message.guild.members.cache
        .filter(member => {
          return member.roles.cache.has(YetkiliRol) && !member.voice.channel && member.presence.status !== "offline" && !member.user.bot && !ayar.owners.includes(member.user.id)
        }).size;

      let ToplamYetkili = message.guild.roles.cache.get(YetkiliRol).members.size
      let SesteOlanYetkili = message.guild.members.cache.filter(member => member.roles.cache.has(YetkiliRol) && member.voice.channel && !member.user.bot && !ayar.owners.includes(member.user.id)).size;
      let AktifYetkili = message.guild.members.cache.filter(member => member.roles.cache.has(YetkiliRol) && !member.user.bot && !ayar.owners.includes(member.user.id) && (member.presence.status !== "offline")).size;
      let OfflineYetkili = message.guild.members.cache.filter(member => member.roles.cache.has(YetkiliRol) && !member.user.bot && !ayar.owners.includes(member.user.id) && member.presence.status == "offline").size;

      let tablo = [{
        "TOPLAM": ToplamYetkili + " kişi",
        "AKTİF": AktifYetkili + " kişi",
        "ÇEVRİMDIŞI": OfflineYetkili + " kişi",
        "SESTE": SesteOlanYetkili + " kişi",
        "SESTE OLMAYAN": SesteOlmayanYetkili + " kişi"
      }]

      message.channel.send(table.create(tablo), {
        code: "md",
        split: true
      })
      message.channel.send(Yousef, {code: "md", split: { char: "," }})
    }

    
}}
