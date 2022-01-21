---
displayTitle: Epic Games Launcher
---
<script>
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        window.location.href = "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi";
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        window.location.href = "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi";
    }
    if (/(Macintosh)/i.test(navigator.userAgent)) {
        window.location.href = "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncher.dmg";
    }
    if (/(iPhone|iPod)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
        }
    if (/(iPad)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
    if (/(Android)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
</script>