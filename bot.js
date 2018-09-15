const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[══════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[══════════════]╝')
  console.log('')
  console.log('╔[═══════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[╚═══════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '490130223610986497'; // <=============== ايدي السيرفر حقك
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});

client.on('message',async msg => {
    if(msg.channel.type === "dm") return;
 if(msg.author.bot) return;
 var p = "f!";
 if(msg.content.startsWith(p + "setstats")) {
 if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
 if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
 var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
          var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
               var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                  var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
      al.setParent(kk);
      alp.setParent(kk);
      alph.setParent(kk);
      
    al.overwritePermissions(msg.guild.id, {
     CONNECT: false,
     SPEAK: false
   });
    alp.overwritePermissions(msg.guild.id, {
     CONNECT: false,
     SPEAK: false
   });
    alph.overwritePermissions(msg.guild.id, {
     CONNECT: false,
     SPEAK: false
   });
 setInterval(() => {
     var currentTime = new Date(),
hours = currentTime.getHours() + 2,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
    al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
     alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
       alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
},1000);
                  })
   
               })
          })
 })
          
 }

});

client.on('message',async msg => {
    var p = "!";
    if(msg.content.startsWith(p + "user")) {
    if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
    if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
    msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
      time.overwritePermissions(msg.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
    setInterval(() => {
        var currentTime = new Date(),
  Year = currentTime.getFullYear(),
  Month = currentTime.getMonth() + 1,
  Dat = currentTime.getDate()
        time.setName(`Members : ◤ → ${client.users.size} ← ◢`);
   },1000);
    });
    }
   
  });


  client.on('message', message => {
    if (message.author.bot) return;
    var prefix ="f!"
     if (message.content === prefix + "help-admin") {
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
     message.channel.send('**تم ارسال رسالة في الخاص**');




 message.author.sendMessage(`
 **
[❖═════اومر ادمن═══════❖]

❖ f!kick <mention > ➾  kickلي اعطاء شخص

❖ f!ban <mention> ➾ لي اعطاء شخص بان

❖ f!tempmute <mention> ➾ لي اعطاء ميوت لي شخص

❖ $bc <message>  ➾ لي ارسال رسالة لي كل الاعضاء

[❖═════اومر ادمن═══════❖]
**
`);

    }
});
  
client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('f!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });
  
  var prefix = "$";
  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
   message.delete(); 
  };     
  });
  
  
  client.on('ready', () => {
     console.log(`----------------`);
        console.log(`Desert Bot- Script By : i1Suhaib`);
          console.log(`----------------`);
        console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
      console.log(`----------------`);
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`$bc `,"http://twitch.tv/S-F")
  client.user.setStatus("dnd")
  });

client.login ("NDg1MDg2Mzk3NDUyMjU1MjQy.Dn1h2g.bG-q-8Zm5CB0jG3_3bf0utMKUjc");
