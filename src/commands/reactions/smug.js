const Command = require("../../structures/Command.js");
const fetch = require("node-fetch");


class Smug extends Command {
  constructor(...args) {
    super(...args, {
      description: "Someone feels a bit smug",
      cooldown: 3,
      cost: 5
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/smug")
      .then((res) => res.json());

    const embed = this.client.embed()
      .setTitle("Smug")
      .setImage(url)
      .setFooter(`Diminta oleh: ${msg.author.tag} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }));

    return msg.send({ embed });
  }
}

module.exports = Smug;
