const conf = require("../../ayarlar/sunucuayarlar.json")
const { kirmiziok, red } = require("../../ayarlar/emojiler.json")
module.exports = {
  conf: {
    aliases: ["say"],
    name: "say",
    help: "say"
  },

  run: async (client, message, args, embed) => {
    if(!conf.teyitciRolleri.some(oku => message.member.roles.cache.has(oku)) && !conf.sahipRolu.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
      message.react(red)
      return
    }
    let Tag = conf.tag 
    var TotalMember = message.guild.memberCount
           let tag = await message.guild.members.cache.filter(member => member.user.username.includes(Tag)).size;
           let sesli = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b);
           message.channel.send(embed
               .setColor('RANDOM')
               .setDescription(`
${kirmiziok} Şu anda toplam **${sesli}** kişi seslide.
${kirmiziok} Sunucuda **${message.guild.memberCount}** adet üye var (**${message.guild.members.cache.filter(member => member.presence.status !== "offline").size}** Aktif)
${kirmiziok} Toplamda **${tag}** kişi tagımızı alarak bizi desteklemiş.
${kirmiziok} Toplamda **${message.guild.premiumSubscriptionCount}** adet boost basılmış! ve Sunucu **${message.guild.premiumTier}** seviye`)
 )
 
   },
 };
