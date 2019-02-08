const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
سيرفر لكسيرويوس باستضافتكم
رتب سيلر بارخص الاسعار
نحتاج دعمكم,

                               [ https://discord.gg/X7cKTk ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('token');