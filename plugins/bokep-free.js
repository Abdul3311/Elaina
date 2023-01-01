let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
https://dood.wf/f/jgmfu7u9tc
https://dood.wf/f/2klj3p6ijc
https://dood.wf/f/fbhjvjrf2w
https://dood.wf/f/yvzguwwjrl
https://dood.wf/f/qz1gbhb370
https://dood.wf/f/kj11sk7rmd
https://dood.wf/f/cydwfc0f89
https://dood.wf/f/m6kexcgn29
https://dood.wf/f/jfk2tiqvih
https://dood.wf/f/xqesyqv8w6
https://dood.wf/f/oo1imys7c3
https://dood.wf/f/ew57saq38x
https://dood.wf/f/0qq5mmxynv
https://dood.wf/f/6q623vmhtf
https://dood.wf/f/abzd0atyk2
https://dood.wf/f/zpvunsv6r8
https://dood.wf/f/adwwwehzim
https://dood.wf/f/1mz7zpwe6u
https://dood.wf/f/zxco691h5
https://dood.wf/f/4vx71i5wb4
https://dood.re/f/ksvyjjhfpc
https://dood.re/f/d0vo5ghzly
https://dood.re/f/d0vo5ghzly
https://dood.re/f/aaqd5tumxx
https://dood.re/f/7l4iruat79
https://dood.re/f/3763752vr3
https://dood.re/f/m6g8m7tny8
https://dood.re/f/5qz40i3p0o
https://dood.re/f/nkswkns063
https://dood.re/f/nwmsbwcswo
https://dood.re/f/famq3i9a2l
https://dood.re/f/5ltm8v3qvv
https://dood.re/f/45vb64xh82
https://dood.re/f/kfm8hrnwpy
https://dood.re/f/io5gzs1tgv
https://dood.re/f/8xosdrhby
https://dood.re/f/c5vv0ibbot
https://dood.re/f/2q796ahmay
https://dood.re/f/dfmeh4r9gh
https://dood.re/f/37ihyfpvh5
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '⚠️ *DONT FORGET TO UP PREMIUM BRO* ⚠️', 'status@broadcast')
}
handler.help = ['bokepfree']
handler.tags = ['nsfw']
handler.command = /^(bokepfree)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler