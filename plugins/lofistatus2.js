import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let kabul = fs.readFileSync('./mp4/India1.mp4') 
conn.sendFile(m.chat, kabul, 'Nih lofistatus India', botdate, m, true)
}

handler.help = ['lofistatus2'] 
 handler.tags = ['vidiorandom'] 
 handler.command = /^(lofistatus2)$/i 

export default handler