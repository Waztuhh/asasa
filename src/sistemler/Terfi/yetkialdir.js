const coin = require("../../mongoo/coin");
const yetkis = require("../../mongoo/yetkis");
const conf = require("../../ayarlar/sunucuayarlar.json")
const settings = require("../../ayarlar/botayarlar.json")
const { red, green} = require("../../ayarlar/emojiler.json")
module.exports = {
  conf: {
    aliases: ["yetki-aldır", "yetkialdır", "yetkili"],
    name: "yetki-aldır",
    help: "yetki-aldır [kullanıcı]"
  },

  run: async (client, message, args, embed) => {
    if (!conf.staffs.some(x => message.member.roles.cache.has(x))) return message.react(red)
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) 
    {
    message.react(red)
    message.channel.send("Bir üye belirtmelisin!").then(x => x.delete({timeout: 5000})); 
    return }
    if (!member.user.username.includes(conf.tag)) 
    {
    message.react(red)
    message.channel.send("Bu üye taglı değil!").then(x => x.delete({timeout: 5000})); 
    return }
    const yetkiData  = await yetkis.findOne({ guildID: message.guild.id, userID: message.author.id });
    if (yetkiData  && yetkiData.yetkis.includes(member.user.id)) 
    {
    message.react(red)
    message.channel.send("Bu üyeye zaten daha önce yetki aldırılmış!").then(x => x.delete({timeout: 5000})); 
    return }

    const msg = await message.channel.send( `${member.toString()}, ${message.member.toString()} üyesi sana yetki vermek istiyor. Kabul ediyor musun?`);
    msg.react("<a:green:899337284481077298>");
    msg.react("<a:red:899337291582046228>");

    msg.awaitReactions((reaction, user) => ["green", "red"].includes(reaction.emoji.name) && user.id === member.user.id, {
      max: 1,
      time: 30000,
      errors: ['time']
    }).then(async collected => {
      const reaction = collected.first();
      if (reaction.emoji.name === 'green') {
        await coin.findOneAndUpdate({ guildID: member.guild.id, userID: message.author.id }, { $inc: { coin: settings.yetkiCoin } }, { upsert: true });       
        msg.edit(`${member.toString()} üyesine başarıyla yetki aldırıldı! ${green}`).then(x => x.delete({timeout: 5000}))
        await yetkis.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $push: { yetkis: member.user.id } }, { upsert: true });
       client.channels.cache.get(conf.yetkiLog).wsend(`${message.author} \`(${message.author.id}\` kişisi ${member} \`(${member.id})\` kişisini yetkiye aldı! ${green}`)
        member.roles.add(conf.yetkiRolleri)
      } else {
        msg.edit(`${member.toString()} üyesi, yetki aldırma teklifini reddetti! ${red}`).then(x => x.delete({timeout: 5000}))
      }
    }).catch(() => msg.edit(`${red} Yetki aldırma işlemi iptal edildi!`))
  }
}
