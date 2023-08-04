const conf = require("../ayarlar/sunucuayarlar.json")
const { green } = require("../ayarlar/emojiler.json");

module.exports = async (message) => {
  if (message.content.toLowerCase() === "tag" || message.content.toLowerCase() === "!tag" || message.content.toLowerCase() === ".tag") {
    message.react(green);
    message.lineReply(conf.tag);
  }
};
module.exports.conf = {
  name: "message"
};