const Command = require("../../structures/Command.js");

class Invite extends Command {
  constructor(...args) {
    super(...args, {
      description: "Invite me to your server!",
      aliases: ["inv"]
    });
  }

  async run(msg, args) { // eslint-disable-line no-unused-vars
    const { link } = this.client.utils;

    return msg.send(this.client.embed(this.client.user)
      .setTitle("Undang DUH Bot Ke Server Anda")
      .setDescription([
        "Kamu dapat mengundang DUH Bot dengan menggunakan link berikut:",
        link("Link Invite DUH Bot", "https://discordapp.com/oauth2/authorize?client_id=794077887556222996&permissions=2016537702&scope=bot"),
        link("Join Komunitas DUH", "https://discord.gg/C7kgHCRYMW")
      ].join("\n")));
  }
}

module.exports = Invite;

