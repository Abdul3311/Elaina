
let { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
let limit = 80
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	
	if (!args || !args[0]) return conn.reply(m.chat, `*Format salah! Contoh :*\n\n*${usedPrefix + command} haihhh*`, m)
	let text = args.join` `
	fetch('https://tessyyy-api.herokuapp.com/api/textmaker/metallic?text=' + encodeURIComponent(text) + '&theme=cube')
    	.then(res => res.json())
    	.then(json => {
    		
    		conn.reply(m.chat, `*Tunggu sebentar . . .*`, m)
			conn.sendFile(m.chat, json.result.url, 'g.jpg', 'hmmm', m,false, { thumbnail: Buffer.alloc(0) })	
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}
handler.help = ['cube'].map(v => v + '[text]')
handler.tags = ['logo', 'kabul']
handler.command = /^cube$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 15
export default handler 
