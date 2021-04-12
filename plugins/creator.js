let handler = function (m) {
  // this.sendContact(m.chat, '6282292119677', 'Nurutomo', 
  this.sendContact(m.chat, '6282292119677', 'owner gak on', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
