let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jawab = `Sialan dia gay @${orang.replace(/@.+/, '')} ð`.trim()
    let mentionedJid = [orang]
    await conn.sendBut(m.chat, jawab, 'ð® Silahkan Klik Button dibawah ini', `Tobat Woyð­`, usedPrefix + command, m, { contextInfo: { mentionedJid } })
}
handler.help = ['gayy']
handler.tags = ['fun', 'kabul']
handler.command = /^gay|gayy$/i
handler.group = true

export default handler 
