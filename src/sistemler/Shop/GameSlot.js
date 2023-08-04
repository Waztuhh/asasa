const Yousef = require("../../mongoo/dolar");
let limit = new Map();
const ms = require("parse-ms");
const { rewards, slotgif, slotpatlican, slotkiraz, slotkalp } = require("../../ayarlar/emojiler.json")

module.exports = {
    conf: {
      aliases: ["s", "slot", "Slot"],
      name: "slot",
      help: "slot"
    },
  
run: async (client, message, args, embed, prefix) => {

    if (!message.guild) return;
	
		let kanallar = ["coin-komut"]
	if (!kanallar.includes(message.channel.name)) return message.lineReply(`${kanallar.map(x => `${client.channels.cache.find(chan => chan.name == x)}`)} kanallarında kullanabilirsiniz.`).then(x => x.delete({timeout: 10000}));
	

	  let data = limit.get(message.author.id) || {dailyCoinTime: 0};
    let timeout = 1000*8
    let gunluk = data.dailyCoinTime
    if (gunluk !== null && timeout - (Date.now() - gunluk) > 0) {
        let time = ms(timeout - (Date.now() - gunluk));
        message.lineReply(`:stopwatch: **|** Hata! **${message.author.username}** Bu komutu ${time.seconds} saniye sonra kullanabilirsin.`)
	} else {
	limit.set(message.author.id, {dailyCoinTime: Date.now()})
	setTimeout(() => {
		limit.delete(message.author.id)
	}, 1000*8)

    const slot = [slotkalp, slotkiraz, slotpatlican] 

    let sec = args[0];
    if (!sec) return message.lineReply(`:no_entry: | **${message.author.username},** Lütfen bir bahis değeri giriniz!!`)


    let Yousefslot1 = slot[Math.floor(Math.random() * slot.length)];
    let Yousefslot2 = slot[Math.floor(Math.random() * slot.length)];
    let Yousefslot3 = slot[Math.floor(Math.random() * slot.length)];


let data = await Yousef.findOne({guildID: message.guild.id, userID: message.author.id}, async(err, res) => {
    if(!res.dolar) return message.lineReply(`Hiç coinin yok!`) 
    if(res.dolar < sec) return message.lineReply(`:no_entry: | **${message.author.username}**, Yeterli miktar da paran yoktur! (Max: 50.000 Tutarında Oynayabilirsin)`) 


let slotMessage = await message.lineReply(`
\`___SLOTS___\`
  ${slotgif} ${slotgif} ${slotgif}
**\`|         |\`**
**\`|         |\`**
`)


setTimeout(() => {
if(Yousefslot1 === Yousefslot2 && Yousefslot1 === Yousefslot3 ) {

let carpma = sec * 2
data.dolar = (data.dolar + carpma)
data.save();

slotMessage.edit(`
\`___SLOTS___\`
  ${Yousefslot1} ${Yousefslot2} ${Yousefslot3}
\`|         |\`
\`|         |\`
Tebrikler **${carpma}** ${rewards} miktar para kazandın!`)

} else {

data.dolar = (data.dolar - sec)
data.save();

slotMessage.edit(`
\`___SLOTS___\`
  ${Yousefslot1} ${Yousefslot2} ${Yousefslot3}
**\`|         |\`**
**\`|         |\`**
**TÜH!** ${sec} ${rewards} Kaybettin bi dahaki sefer kazanman dileğiyle (:`)
}
}, 2500)

})
}}}
