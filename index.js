
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
            
        case "applyformod":
            member.guild.channels.get.('435782266795589642').send('**' + memeber.user.username + '**, has applied for mod!');
                bot.fetchUser(id)
                    .then(user => {user.send("*Your appilication is in queue... We'll responsed to you quickly as possible. Thank you!*")})
        
                                                            
            break;

        default:
            message.channel.sendMessage("Error 1 : Invalid Command");

        
    }
});


bot.login(process.env.TOKEN);
