let handler = function (m) {
  // this.sendContact(m.chat, '601114230813', 'Nurutomo', 
  this.sendContact(m.chat, '601114230813', 'owner gak on', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
