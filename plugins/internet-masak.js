import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(4001)
  let res = await fetch(global.API('zeks', '/api/resep-masak', { q : text }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.title) throw json
  await conn.sendFile(m.chat, json.thumb, '', `
${json.title}
${json.url}\n
*Tingkat:* ${json.tingkat}
*Durasi:* ${json.duration}
*Porsi:* ${json.banyak}
${readMore}\n\n
*Bahan:* ${json.bahan}
*Cara:* ${json.cara}
`.trim(), m)
}
handler.help = ['resep <makanan>', 'masak <makanan>']
handler.tags = ['internet', 'kabul']
handler.command = /^(resep|masak)$/i

export default handler 
