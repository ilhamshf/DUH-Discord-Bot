const Command = require("../../structures/Command.js");

class WeebGreetings extends Command {
  constructor(...args) {
    super(...args, {
      description: "Enable/Disable Weeb style welcome/leave messages.",
      usage: "weebgreetings <enable|disable> <channel>",
      userPermissions: ["MANAGE_GUILD"],
      guildOnly: true
    });
  }

  async run(msg, [action]) {
    if (!action) return msg.send("Duh! Specify either `enable #channel` or `disable`");

    if (action === "disable") {
      await msg.guild.update({ weebGreetings: null });
      return msg.send("Berhasil disabled weeb greetings.");
    }

    if (action === "enable") {
      if (!msg.mentions.channels.size) return msg.send("Duh! Specify the channel you want to enable it on.");
      const channel = msg.mentions.channels.first();
      await msg.guild.update({ weebGreetings: channel.id });
      return msg.send(`Berhasil enabled weeb greetings for the channel ${channel}`);
    }

    return msg.send("Duh! Invalid action either specify `enable #channel` or `disable`");
  }
}

module.exports = WeebGreetings;
