const mineflayer = require('mineflayer');

// Minecraft-Account-Daten
const bot = mineflayer.createBot({
  host: "MysticVortex786.aternos.me:57979",
  port: 57979,  // Stelle sicher, dass dieser Port korrekt ist
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
    
    // Hier könntest du Befehle oder Reaktionen auf bestimmte Nachrichten hinzufügen
    if (message.includes("villager")) {
      // Beispiel: Der Bot könnte hier reagieren, wenn eine Nachricht das Wort "villager" enthält
      console.log('Bot reagiert auf das Villager-Plugin!');
    }
    if (message.includes("voice chat")) {
      // Beispiel: Der Bot könnte hier auf Voice-Chat-Nachrichten reagieren
      console.log('Bot reagiert auf Voice-Chat!');
    }
  }
});

// Event-Listener für Verbindungsabbrüche
bot.on('end', () => {
  console.log("❌ Bot wurde getrennt. Neustart...");
  setTimeout(() => process.exit(1), 5000); // Beendet den Prozess, Railway startet neu!
});

// Event-Listener für Fehler
bot.on('error', (err) => {
  console.error("Fehler:", err);
});
