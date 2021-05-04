const Event = require("../structures/Event.js");

class GuildCreate extends Event {
  async run(guild) {
    if (!guild.available) return;

    const channel = this.client.channels.cache.get("834262690209333280");

    if (!guild.owner && guild.ownerID) await guild.members.fetch(guild.ownerID);

    // If it exists in the settings then definitely an unavailable guild came back.
    const exists = this.client.settings.guilds.cache.has(guild.id);

    const embed = this.client.embed()
      .setTitle(exists ? "Guild yang tidak tersedia kembali" : "DUH joined a new server!")
      .setDescription(guild.name)
      .setThumbnail(guild.iconURL())
      .addField("Owner", guild.owner.user.tag)
      .addField("Member Count", guild.memberCount)
      .setFooter(guild.id);

    if (this.client.user.settings.guildBlacklist.includes(guild.id)) {
      embed.setFooter(guild.id + " | Blacklisted");
      await guild.leave();
    }
    
    if (channel) await channel.send({ embed }).catch(() => null);

    const join = guild.channels.cache.find((c) => c.type === "text" && c.postable);
    if (!join) return;

    return join.send([
      "Hey there, terima kasih telah mengundang saya ke server yang luar biasa ini",
      `Dimulai dengan mengetik \`${guild.prefix}help\` untuk melihat semua perintah`,
      `Jika Anda menemukan bug, laporkan menggunakan \`${guild.prefix}bug\``,
      `Jika Anda ingin mengganti prefix bot dapat menggunakan \`${guild.prefix}prefix\` <prefix yang diinginkan>`,
      "",
      `Note: pesan levelup diaktifkan secara default jika Anda menganggapnya mengganggu, jangan ragu untuk menonaktifkannya menggunakan \`${guild.prefix}levelup disable\``,
      "",
      `Jika Anda masih memiliki pertanyaan, tanyakan di server kami, gunakan \`${guild.prefix}support\` atau bisa dm ke Ilhamshf#8364`,
      "",
      "Have a great day!"
    ].join("\n")).catch(() => null);
  }
}

module.exports = GuildCreate;
