let handler = function (m) {
  // this.sendContact(m.chat, '601114231152', 'Nurutomo', m)
  this.sendContact(m.chat, '601114231152', 'gpp sumpah gpp walau pun nomor gw di banned gw tetep berkayu kok🥰', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
