
const Discord = require("discord.js");

const TOKEN = "NDM0NzkzNDI3NTI4MzE4OTg2.DbPztA.bLzIGJK2vaed-YS9UDhjHq0GHu0"
const PREFIX = ">>"

var fortunes = [
    "Yes",
    "No",
    "Maybe",
]

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});


bot.on("message",function(message)  {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {

        case "info":
            var embed = new Discord.RichEmbed()
                .addField("Info", "Konpa Bot is an assistant bot that can be used in various positions, ex : Applications, Commands, Info, History, etc.")
                .setColor("00bdff")
                .setThumbnail(bot.user.avatarURL)
                .setFooter("Created by Versaucey")
            message.channel.sendEmbed(embed);
            break;

        default:
            message.channel.sendMessage("Error 1 : Invalid Command");

        
    }
});


bot.login(process.env.TOKEN;
