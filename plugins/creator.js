let handler = function (m) {
  // this.sendContact(m.chat, '601114230813', 'Nurutomo', 
  this.sendContact(m.chat, '601114230813', 'sumpah gpp kok nomor gw di banned gw tetap semangat kok', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
