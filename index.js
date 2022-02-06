const dbd = require("dbd.js")

const bot = new dbd.Bot({
  mobile: false,
  token: "TOKEN",
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>']
})

bot.onMessage({
  guildOnly: false
})

bot.status({
    text: `People Type +help`,
    type: "WATCHING",
    status: "online",
    time: 75
    })  

    bot.musicStartCommand({
      channel: "$channelID",
      code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]\\]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
      })


      bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description:⏹ There's no one playing music anymore. I'm leaving the Voice Channel!}{color:RANDOM}{delete:10s};no]`
        })

    bot.variables(require('./commands/vars.js'))

    bot.loadCommands('./commands')
