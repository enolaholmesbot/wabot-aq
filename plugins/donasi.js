let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • [601127367973]
│ • [601114230813]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
