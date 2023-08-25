require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "KatZ bảo gì cơ") {
    message.reply("KatZ bảo Phạm Kai mập vl");
  }
  if (message.content === "alo Kai mập") {
    const randomIndex = Math.floor(Math.random() * 3);
    const responses = [
      "Trẻ không chơi già đổ đốn",
      "Chào bạn! Mình là già dâm.",
      "Kai cào cào 90 ký",
    ];
    message.reply(responses[randomIndex]);
  }

  if (message.content === "zô") {
    const member = message.guild.members.cache.get(message.author.id);
    if (!member) {
      console.error("Không thể tìm thấy thông tin thành viên.");
      return;
    }

    if (member.voice.channel) {
      const voiceChannel = member.voice.channel;

      voiceChannel.createInvite({ unique: true }).then((invite) => {
        message.reply(
          `Anh em vào Voice ${voiceChannel.name} nhé! ${invite.url}`
        );
      });
    } else {
      message.reply("Bạn phải ở trong một kênh thoại trước.");
    }
  }
});

client.login(process.env.TOKEN);
