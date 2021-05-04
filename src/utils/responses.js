// Note: These are taken from https://github.com/NotAWeebDev/Misaki
// The bot has died but I really liked those responses and my own creativity is trash.
// TODO: Currently it's directly pasted from Misaki, modify a few things and remove ones we don't need.
// - Removed a few responses we don't need but still have to add a few more responses to feel a bit unique.

// Member Join
exports.welcomeMessages = [
  "Duh tod **{{user}}** selamat datang",
  "Huft, **{{user}}** selamat datang, semoga betah.",
  "Eh ada warga baru **{{user}}** welkam.",
  "**{{user}}** telah bergabung dalam server **{{guild}}** OwO.",
  "**{{user}}**, welkam, baca rules ya jan lupa",
  "Hi **{{user}}**! Welcome to **{{guild}}**, I hope you enjoy your stay!",
  "Selamat datang **{{user}}** di **{{guild}}**, sekarang kita mempunyai **{{amount}}** anggota!",
  "**{{user}}**, welcome to **{{guild}}**!"
];

// Member Leave
exports.goodbyeMessages = [
  "Yah kita kehilangan **{{user}}** tapi gapapa si masi ada **{{amount}}** orang di **{{guild}}**"
];

// Level Up
exports.levelUpMessages = [
  "Duh **{{user}}** Selamat!! kamu naik ke level **{{level}}**"
];

// Commands
exports.pingMessages = [
  "Ping kamu **{{ms}}ms**, intinya kalo mau ping lancar jangan pake rumah merah xixi"
];

exports.dailySuccessMessages = [
  "Kamu mendapatkan **{{amount}}** hari ini"
];

exports.dailyFailureMessages = [
  "Kamu tidak dapat mengambil hadiah harian silahkan tunggu **{{time}}**"
];

exports.balanceMessages = [
  "Hei **{{user}}**, Uang kamu **{{user}}** gunakan baik baik ya"
];

exports.otherBalanceMessages = [
  "Why do you want to know **{{user}}**'s balance? Whatever, it's **{{amount}}** anyway."
];

exports.levelMessages = [
  "**{{user}}** kamu saat ini level **{{level}}**"
];

exports.otherLevelMessages = [
  "Look just ask **{{user}}** next time, but I will forgive you. Here, this is their level: **{{level}}**. (males translatenya wka)"
];

// System

// Reload
exports.reloadMissingArg = [
  "Only admin ya"
];

exports.reloadNotFound = [
  "Gagal"
];

exports.reloadErrUnload = [
  "Error **{{response}}**"
];

exports.reloadErrLoad = [
  "Error **{{command}}**."
];

exports.reloadSuccess = [
  "Berhasil"
];

// After the following line is the end of Misaki code and are made by myself.

// Errors

exports.notNSFWChannel = [
  "Nonton di biru aja si"
];

exports.guildOnlyCommand = [

];
