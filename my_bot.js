const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Aktualnie pracujemy nad botem :)...")

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})

client.login("NjMwODE5OTgzMDU1NzgxOTI4.XZt27w.qCiO6pXU8JTYtABz5VnSN-pFlCY") // Replace XXXXX with your bot token