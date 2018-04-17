
const Discord = require("discord.js");
const PREFIX = ">>"

var fortunes = [
    "Yes",
    "No",
    "Maybe",
]

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Konpa is on the go!");
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
            
        case "test":
            userID = message.author.id = "274567702755147776"
            args = message.content.split(" ")
            message.userID.send( "%s" %(" ".join(args)));
            break;

        default:
            message.channel.sendMessage("Error 1 : Invalid Command");

        
    }
});


bot.login(process.env.TOKEN);
