const {default: axios} = require("axios")

const url = "https://api.telegram.org/bot6680557007:AAGmHtzlEVGXJxKxxF62tUPFx9kmYeqk5QQ/sendMessage?parse_mode=markdown&chat_id=6465082908"

async function sendMessage() {
    try {
        while (true) {
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let email = "";
            for (let i = 0; i < 10; i++) {
                email += chars.charAt(Math.floor(Math.random() * chars.length)).toUpperCase();
                if (i % 2 == 0) email += chars.charAt(Math.floor(Math.random() * 10) + 48);
            }
            email += "@gmail.com";
            let password = "";
            for (let i = 0; i < 8; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length)) + Math.floor(Math.random() * 10);
            }
            url += "&text=" + encodeURIComponent(`Email: ${email}\nPassword: ${password}`);
            await axios.get(url)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response)
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