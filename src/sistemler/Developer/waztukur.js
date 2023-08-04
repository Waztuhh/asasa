const serverSettings = require('../../ayarlar/sunucuayarlar.json')
const settings = require('../../ayarlar/botayarlar.json')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const { MessageEmbed, Message } = require('discord.js')
module.exports = {
  conf: {
    aliases: ["klautkur", "klaut"],
    name: "klautkur",
    owner: true,
  },

  run: async (client, message, args, embed, prefix) => {

    var Klaut1 = new MessageButton()
    .setID("Klaut1")
    .setLabel('Emoji Kurulumu')
    .setStyle('3')
    
    var Klaut2 = new MessageButton()
    .setID("Klaut2")
    .setLabel('Log Kurulumu')
    .setStyle('3')

    const row1 = new MessageActionRow()
    .addComponent(Klaut1)
    .addComponent(Klaut2)

    let Klautu = new MessageEmbed()
    .setDescription('Altdaki butonlara basarak kurulumları tamamla!')
    .setAuthor(message.member.displayName, message.member.user.displayAvatarURL({ dynamic: true}))
    .setColor('RANDOM')

    let msg = await message.channel.send({ components: [row1], embed: Klautu})
    
    var filter = (button) => button.clicker.user.id === message.author.id;
 
    let collector = await msg.createButtonCollector(filter, { time: 60000 })

    collector.on("collect", async (button) => {
      if(button.id == 'Klaut1'){
        await button.reply.defer()
        const emojis = [
            { name: "star", url: "https://cdn.discordapp.com/emojis/899680497427431424.gif?size=44" },
            { name: "rewards", url: "https://cdn.discordapp.com/emojis/899680521951514734.gif?size=44" },
            { name: "revusome", url: "https://cdn.discordapp.com/emojis/901441419363889172.png?size=96" },
            { name: "miniicon", url: "https://cdn.discordapp.com/emojis/899339236724068372.png?size=44" },
            { name: "red", url: "https://cdn.discordapp.com/attachments/827439712834158622/827439875170500629/red.gif" },
            { name: "green", url: "https://cdn.discordapp.com/attachments/827439712834158622/827439878664486913/green.gif" },
            { name: "staff", url: "https://cdn.discordapp.com/emojis/899680505119780895.gif?size=44" },
            { name: "Muhabbet", url: "https://cdn.discordapp.com/emojis/899339317896429641.gif?size=44" },
            { name: "galp", url: "https://cdn.discordapp.com/emojis/899680513806184570.gif?size=44" },
            { name: "kirmiziok", url: "https://cdn.discordapp.com/emojis/901441275381817426.gif?size=44" },
            { name: "Revuu", url: "https://cdn.discordapp.com/emojis/901441322152493066.gif?size=44" },
            { name: "Mute", url: "https://cdn.discordapp.com/emojis/901441287469809706.png?size=44" },
            { name: "Cezaa", url: "https://cdn.discordapp.com/emojis/901441311050178591.png?size=44" },
            { name: "Jail", url: "https://cdn.discordapp.com/emojis/903566151727087686.png?size=96" },
            { name: "Book", url: "https://cdn.discordapp.com/emojis/903564842978402304.png?size=96" },
            { name: "Kilit", url: "https://cdn.discordapp.com/emojis/903564832387760128.png?size=96" },
            { name: "Mute2", url: "https://cdn.discordapp.com/emojis/899339342986739802.png?size=96" },
            { name: "Unmute", url: "https://cdn.discordapp.com/emojis/899339351283105812.png?size=96" },
            { name: "fill", url: "https://cdn.discordapp.com/emojis/899339288636956752.gif?size=44" },
            { name: "empty", url: "https://cdn.discordapp.com/emojis/899340041229307966.png?size=44" },
            { name: "fillStart", url: "https://cdn.discordapp.com/emojis/899339278000222249.gif?size=44" },
            { name: "emptyEnd", url: "https://cdn.discordapp.com/emojis/899340050226118737.png?size=44" },
            { name: "fillEnd", url: "https://cdn.discordapp.com/emojis/862062197776580618.gif?size=96" },
            { name: "xp", url: "https://cdn.discordapp.com/emojis/838468875825446922.gif?v=1" },
            { name: "gulucuk", url: "https://cdn.discordapp.com/emojis/838469248602865735.png?v=1" },
            { name: "mesaj2", url: "https://cdn.discordapp.com/emojis/838468915814334464.gif?v=1" },
            { name: "altin", url: "https://cdn.discordapp.com/emojis/836694825243508756.gif?v=1" },
            { name: "altin2", url: "https://cdn.discordapp.com/emojis/836694821128372224.gif?v=1" },
            { name: "voice", url: "https://cdn.discordapp.com/emojis/841076020399308831.png?v=1" },
            { name: "channel", url: "https://cdn.discordapp.com/emojis/841076020399308831.png?v=1" },
            { name : "Yousefspotify", url: "https://cdn.discordapp.com/emojis/899337292840312912.png?size=44"},
            { name : "Yousefnetflix", url: "https://cdn.discordapp.com/emojis/899337280790077491.png?size=44"},
            { name : "Yousefexxen", url: "https://cdn.discordapp.com/emojis/900396713116835900.png?size=44"},
            { name : "Yousefblutv", url: "https://cdn.discordapp.com/emojis/900396707362246666.png?size=44"},
            { name : "Yousefnitro", url: "https://cdn.discordapp.com/emojis/899337278047006831.png?size=44"},
            { name : "slotgif", url: "https://cdn.discordapp.com/emojis/931686726567612426.gif?v=1"},
            { name : "slotpatlican", url: "https://cdn.discordapp.com/emojis/931686717902192660.png?size=44"},
            { name : "slotkiraz", url: "https://cdn.discordapp.com/emojis/931686708037185546.png?size=44"},
            { name : "slotkalp", url: "https://cdn.discordapp.com/emojis/931686698138603610.png?size=44"}
        ]
        emojis.forEach(async (x) => {
            message.channel.send(`Emojiler Kuruldu Klaut Bey!`);
          });
    }

      if(button.id == 'Klaut2'){
        await button.reply.defer()
        const parent = await message.guild.channels.create('Klaut Log', { type: 'category' });
        await message.guild.channels.create('ses-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('tag-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('yasakli-tag-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('ranked-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('rol-tag', { type: 'text', parent: parent.id });
        await message.guild.channels.create('mazaretli-tag', { type: 'text', parent: parent.id });
        await message.guild.channels.create('mesaj-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('davet-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('komut-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('ban-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('cezai-işlem-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('market-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('mute-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('jail-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('vmute-log', { type: 'text', parent: parent.id });
        await message.guild.channels.create('yetki-log', { type: 'text', parent: parent.id });
        message.channel.send(`Loglar Kuruldu Klaut Bey!`)
      }
    })
}}