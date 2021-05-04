const Command = require("../../structures/Command.js");
const fetch = require("node-fetch");


class Hug extends Command {
  constructor(...args) {
    super(...args, {
      description: "Hug someone",
      usage: "hug <@member>",
      guildOnly: true,
      cooldown: 3,
      cost: 5
    });
  }

  async run(msg, [member]) {
    member = await this.verifyMember(msg, member);

    if(member.id === msg.author.id) return msg.send("Duh! You can't hug yourself!");

    const { url } = await fetch("https://nekos.life/api/v2/img/hug")
      .then((res) => res.json());

    const embed = this.client.embed()
      .setTitle("Hug")
      .setDescription(`**${member.displayName}**, you just got hugged by **${msg.member.displayName}**`)
      .setImage(url)
      .setFooter(`Diminta oleh: ${msg.author.tag} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }));

    return msg.send({ embed });
  }
}

module.exports = Hug;
