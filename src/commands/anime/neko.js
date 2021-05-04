const Command = require("../../structures/Command.js");
const fetch = require("node-fetch");


class Neko extends Command {
  constructor(...args) {
    super(...args, {
      description: "Get a random Neko.",
      cooldown: 3,
      cost: 5
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/neko")
      .then((res) => res.json());

    const embed = this.client.embed()
      .setTitle("Neko")
      .setImage(url)
      .setFooter(`Diminta oleh: ${msg.author.tag} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }));

    return msg.send({ embed });
  }
}

module.exports = Neko;
