let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • [082292119677]
│ • 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
