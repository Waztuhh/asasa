const { MessageEmbed, Client, Message } = require("discord.js");
const Discord = require('discord.js');
const disbut = require("discord-buttons");
const client = global.client;
const { star, kirmiziok } = require("../../ayarlar/emojiler.json")

module.exports = {
  conf: {
    aliases: ["help"],
    name: "help",
    help: "help",
    owner: true
  },
 
    run: async (client, message, args, durum, kanal) => {
 
   
 let helping = new disbut.MessageMenuOption()
 .setLabel("Tüm Komutlar")
 .setDescription("Tüm komutlar listesin görmek için tıkla!")
 .setValue("help")

 let helpp = new disbut.MessageMenu();
 helpp.setID("help");
 helpp.setPlaceholder(`Yardım menüsü görmek için tıkla!`)
 helpp.addOptions(helping);

  
 message.channel.send(`${kirmiziok} \`${message.guild.name}\`, Komut yardımı almak için aşağıdaki menüyü kullan!`, helpp);

    },
  };

    client.on("clickMenu", async (menu) => {

      if (menu.values[0] === "help") {
       await menu.reply.think(true);
       await menu.reply.edit(`
\`\`\`
.kpanel
.kısayollar
.yönetim (resim) , (banner) , ()
.taglı-alım (aç/kapat)
.invites
.topinvite
.allmute
.allunmute
.ban
.banliste
.yasaklıtag (ekle/sil) (tag) / (say/liste)
.cezapuan
.cezasorgu
.forceban
.jail
.mute
.sicil
.temp-jail
.topceza
.unban
.unjail
.unmute
.unvmute
.uyarı
.vmute
.Bağlantı-Kes
.isim (üye) (isim) (yaş)
.isimler [kullanıcı]
.kayitsiz
.teyitler
.kayıt (üye) (isim) (yaş)
.para
.coinflip
.daily
.slot
.hesapoluştur
.market
.afk
.avatar
.banner
.git
.kart
.link
.kullanıcıbilgi
.stat
.topstat
.zengin
.çek
.dc
.musician
.sorunçözme
.streamer
.tasarımcı
.vip
.vk
.cezapuansil
.isimsil
.sicilsil
.sıfırla
.coin (ekle/sil/gönder) (kullanıcı) (sayı)
.görev
.tagaldır (kullanıcı)
.topcoin
.yetki-aldır (kullanıcı)
.control
.ekip
.ekip-all
.kilit
.rolbilgi
.sil
.kontrol
.tagsay
.toplantı
.ysay
.yetkim
.senkronize (user) (kullanıcı) / (role) (rol)
.toplutaşı
.rollog
.rolver
.say
.nerede
.seslisay
.snipe
\`\`\`
`)
        };

    });
      
