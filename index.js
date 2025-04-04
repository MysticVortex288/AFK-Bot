const mineflayer = require('mineflayer');

// Minecraft-Account-Daten
const bot = mineflayer.createBot({
  host: "MysticVortex786.aternos.me",  // Ersetze mit deiner Server-IP
  port: 25565,  // Standard-Port für Minecraft
  username: "minecraft-afk-bot",  // Dein Bot-Account (am besten ein Alt-Account)
  auth: "offline" // Setze auf "microsoft", falls du einen echten MC-Account nutzt
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

