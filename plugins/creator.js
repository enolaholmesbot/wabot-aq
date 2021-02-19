let handler = function (m) {
  // this.sendContact(m.chat, '60195042951', 'Nurutomo', m)
  this.sendContact(m.chat, '60195042951', 'ahmad beban ', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
