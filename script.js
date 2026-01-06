// Basic device info
document.getElementById("browser").innerText = navigator.userAgent;
document.getElementById("platform").innerText = navigator.platform;
document.getElementById("language").innerText = navigator.language;
document.getElementById("status").innerText = navigator.onLine ? "Online" : "Offline";

// Fetch public IP
fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("ip").innerText = data.ip;
  })
  .catch(() => {
    document.getElementById("ip").innerText = "Unavailable";
  });

window.addEventListener("online", () => status.innerText = "Online");
window.addEventListener("offline", () => status.innerText = "Offline");
