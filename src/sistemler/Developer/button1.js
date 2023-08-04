const Discord = require("discord.js");

module.exports = {
  conf: {
    aliases: [],
    name: "button1",
    owner: true,
  },

  run: async (client, message, args) => {
     client.api.channels(message.channel.id).messages.post({ data: {"content":`Merhaba, \`${message.guild.name}\` sunucusu içerisi yapmak istediğiniz işlem veya ulaşmak istediğiniz bilgi için gerekli butonlara tıklamanız yeterli olucaktır!\n\n**I:** Sunucuya giriş yaptığınız tarihi öğrenin.\n**II:** Sunucu üzerinde bulunan rollerinizi öğrenin.\n**III:** Hesabınızın açılış tarihini öğrenin.\n\n**IV:** Davet bilgilerinizi öğrenin.\n**V:** Tekrardan kayıt olun.\n**VI:** Sunucumuzun anlık aktif sesini öğrenin.\n\n**VII:** Sunucuda eskiden kayıt olduğunuzdaki isim bilgilerinizi görüntüleyin \n**VIII:** Sunucu içerisindeki toplam atınız mesaj sayılarını gösterir.\n**IX:** Sunucu ses kanallarında toplam geçirdiğiniz süreyi öğrenin.\n`,
"components":[{
"type":1,"components":[
                         {"type":2,"style":3,"custom_id":"I","label":"I"},
                         {"type":2,"style":3,"custom_id":"II","label":"II"},
                         {"type":2,"style":3,"custom_id":"III","label":"III"}
       ]}, {  "type":1,"components":[
                         {"type":2,"style":3,"custom_id":"IV","label":"IV"},
                         {"type":2,"style":3,"custom_id":"V","label":"V"},
                         {"type":2,"style":3,"custom_id":"VI","label":"VI"}
       ]}, {  "type":1,"components":[
                         {"type":2,"style":3,"custom_id":"VII","label":"VII"},
                         {"type":2,"style":3,"custom_id":"VIII","label":"VIII"},
                         {"type":2,"style":3,"custom_id":"IX","label":"IX"}
        ]},



]}

 })
  },
};
///"style":1 mavi
///"style":2 gri
///"style":3 yesil
///"style":4 kırmızı
