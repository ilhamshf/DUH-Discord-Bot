const Command = require("../../structures/Command.js");


class Support extends Command {
  constructor(...args) {
    super(...args, {
      description: (msg) => msg.tr("COMMAND_SUPPORT_DESCRIPTION")
    });
  }

  async run(msg) {
    return msg.send(this.client.embed(this.client.user)
      .setTitle(msg.tr("COMMAND_SUPPORT_TITLE"))
      .setDescription("Jika membutuhkan fitur lainnya untuk digunakan silahkan dm `ilhamshf#8364`\nDan jika ingin menggunakan fitur beta silahkan request pada server discord yang telah disediakan\n\n[Join Komunitas DUH](https://discord.gg/C7kgHCRYMW)"));
  }
}

module.exports = Support;
