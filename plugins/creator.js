let handler = function (m) {
  // this.sendContact(m.chat, '601114231152', 'Nurutomo', m)
  this.sendContact(m.chat, '601114231152', 'Ahmad', m)
this.sendContact(m.chat, '601114231152', 'ahmad beban ', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
