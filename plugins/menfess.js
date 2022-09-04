case  'menfess':
    case 'pesanrahasia':
           if (args.length < 1) return setReply(`Penggunaan ${prefix}menfess 62xnxx|dari siapa|pesan rahasia`)
			if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
            var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
            var org = q.split("|")[1];
            var dari = q.split("|")[2];
            var pesan = `hai, kamu dapet pesan rahasia nihh\n\ndari: *${org}* \nIsi pesan: \n "${dari}"`
            let buttons = [
{"buttonId": `${prefix}startchat ${senderNumber} `,"buttonText": {"displayText": `ngobrol dengan dia secara anonymous`},"type": "RESPONSE"}]
            conn.sendMessage(nomor+'@s.whatsapp.net', {text: pesan, buttons})   
            setReply(`Sukses mengirim pesan rahasia:\n${pesan} ke nomer ${nomor}`)
            break
}
handler.help = ['menfess']
handler.tags = ['fun']
handler.command = /^(menfess|chat)$/i
handler.limit = false

export default handler
