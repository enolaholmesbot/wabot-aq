let handler = async m => m.reply(`
╭─「 gk usah donasi tekan aja link ini
https://taplink.cc/ahmadssaifullah730
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.command = /^dona(te|si)$/i

module.exports = handler
