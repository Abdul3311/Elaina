/*let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/korea'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.korea', m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/korea'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(korea)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['korea']
handler.limit = false
export default handler

