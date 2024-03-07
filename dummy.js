const { default: axios } = require("axios");
const fs = require('fs');
const data = fs.readFileSync('device.list', 'utf8');
const lines = data.split(/\r?\n/);
async function sendMessage() {
    try {
        const url ="https://api.telegram.org/bot6680557007:AAGmHtzlEVGXJxKxxF62tUPFx9kmYeqk5QQ/sendMessage?parse_mode=markdown&chat_id=6465082908";
        const pref="𝐍𝐨𝐭𝐢𝐟𝐢𝐤𝐚𝐬𝐢 𝐀𝐩𝐥𝐢𝐤𝐚𝐬𝐢 𝐃𝐢 𝐈𝐧𝐬𝐭𝐚𝐥𝐥 \n 𝐓𝐲𝐩𝐞 𝐏𝐞𝐫𝐚𝐧𝐠𝐤𝐚𝐭: "
        while (true) {
            const chars =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let device_model = "";
            const index = Math.floor(Math.random() * lines.length);
            device_model = lines[index];
            let device_postfix = "";
            for (let i = 0; i < 8; i++) {
                device_postfix += chars.charAt(Math.floor(Math.random() * chars.length)).toLowerCase();
                if (i % 2 == 0) device_postfix += chars.charAt(Math.floor(Math.random() * 10) + 48);
            }
            const text = `${pref}`;
            const encodedText = encodeURIComponent(text);
            const cpt_device_model = `${device_model}${device_postfix}`;
            const encodedDevice = encodeURIComponent(cpt_device_model);
            const fullUrl = `${url}&text=${encodedText}${encodedDevice}`;
            await axios.get(fullUrl)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response.data)
                    }
                })
        }
    } catch (error) {
        console.log("API down!")
        sendMessage();
    }
}

sendMessage();
sendMessage();