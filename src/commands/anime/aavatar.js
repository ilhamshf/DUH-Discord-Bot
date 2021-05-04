const Command = require("../../structures/Command.js");
const fetch = require("node-fetch");


class AAvatar extends Command {
  constructor(...args) {
    super(...args, {
      description: "Get an Anime Avatar.",
      extendedHelp: "The output will be NSFW only if the channel is a NSFW channel",
      cooldown: 3,
      cost: 5
    });
  }

  async run(msg) {
    const { url } = await fetch(`https://nekos.life/api/v2/img/${msg.channel.nsfw ? "nsfw_" : ""}avatar`)
      .then((res) => res.json());

    const embed = this.client.embed()
      .setTitle(`${msg.channel.nsfw ? "NSFW " : ""}Anime Avatar`)
      .setImage(url)
      .setFooter(`Diminta oleh: ${msg.author.tag} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }));

    return msg.send({ embed });
  }
}

module.exports = AAvatar;
