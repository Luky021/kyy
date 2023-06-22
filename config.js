const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6282184635341@s.whatsapp.net"]
global.nomerOwner = "6282184635341"
global.nomorOwner = ['6282184635341']
global.nameGEDE = "KYYJB"
global.namaDeveloper = "KYYJB"
global.namaBot = "KYYJ  WhatsApp"
global.packname = ""
global.author = "Sticker By KYYJB"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By 4KSANZZ
Base Ori By KirBotz
Ubah Nomor Owner?
Ganti Di File ./owner.json
Harap Jangan Jual Sc Ini
Karena Sc Ini Free Langsung Dari
Youtube : https://youtube.com/@kangbotwhatsapp

*/