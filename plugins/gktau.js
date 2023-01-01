//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya Elaina Jangan Lupa Untuk Ibadah ', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['elaina-md']

handler.admin = false
handler.group = false

export default handler
