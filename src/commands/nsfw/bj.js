const Command = require("../../structures/Command.js");
const fetch = require("node-fetch");


class BJ extends Command {
  constructor(...args) {
    super(...args, {
      description: "Hentai Blowjob",
      cooldown: 5,
      cost: 15,
      nsfw: true,
      aliases: ["blowjob"]
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/bj")
      .then((res) => res.json());

    const embed = this.client.embed()
      .setTitle("Hentai Blowjob")
      .setImage(url)
      .setFooter(`Diminta oleh: ${msg.author.tag} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }));

    return msg.send({ embed });
  }
}

module.exports = BJ;
