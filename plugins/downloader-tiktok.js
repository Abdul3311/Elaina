import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, text }) => {
await m.reply(`*_Proses download Tiktok_*\n*_@${m.sender.split(`@`)[0]}_*`)
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://vt.tiktok.com/ZSJE2ffo4`)
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=cahyokun&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let cap = ` `
conn.sendFile(m.chat, x.link, 'tiktok.mp4', cap, m)
}
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)$/i
handler.limit = true

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}