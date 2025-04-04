const mineflayer = require('mineflayer');

// Minecraft-Account-Daten
const bot = mineflayer.createBot({
    host: "MysticVortex786.aternos.me",
    port: 25565,
    username: "Lemonvide",  // Dein echtes Minecraft-Account-Username
    auth: "microsoft",  // Wenn du ein Microsoft-Konto verwendest
  });
// Event-Listener für den Login
bot.on('login', () => {
  console.log(`✅ Bot ist auf ${bot._client.socket.address().address} eingeloggt!`);
});

// Event-Listener für den Chat
bot.on('chat', (username, message) => {
  if (username !== bot.username) {
    console.log(`${username}: ${message}`);
  }
});

// Event-Listener für Verbindungsabbrüche
bot.on('end', () => {
  console.log("❌ Bot wurde getrennt. Neustart...");
  setTimeout(() => process.exit(1), 5000); // Beendet den Prozess, Railway startet neu!
});
