const Discord = require("discord.js");
const conf = require("../../ayarlar/sunucuayarlar.json");
const { Yousefnitro, Yousefnetflix, Yousefspotify, Yousefexxen, Yousefblutv} = require("../../ayarlar/emojiler.json")

module.exports = {
  conf: {
    aliases: [],
    name: "ecrolalma",
    owner: true,
  },

  run: async (client, message, args) => {
    client.api.channels(message.channel.id).messages.post({ data: {"content":`Merhaba **Yousef tester** üyeleri,\nÇekiliş katılımcısı alarak ${Yousefnitro} , ${Yousefspotify} , ${Yousefnetflix} , ${Yousefexxen} , ${Yousefblutv} gibi çeşitli ödüllerin sahibi olabilirsiniz.\nEtkinlik katılımcısı alarak çeşitli etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz.\n\n__Aşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!__`,"components":[{"type":1,"components":[

        {"type":2,"style":3,"custom_id":"buttoncekilis","label":"🎁 Çekiliş Katılımcısı"},
        {"type":2,"style":4,"custom_id":"buttonetkinlik","label":"🎉 Etkinlik Katılımcısı"}
        
        ]}]} })
  },
};

  
