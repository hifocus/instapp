---
title: Potplayer
---
<script>
    if (/(WOW64)/i.test(navigator.userAgent)) {
        window.location.href = ("https://t1.daumcdn.net/potplayer/PotPlayer/Version/Latest/PotPlayerSetup.exe");
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        window.location.href = ("https://t1.daumcdn.net/potplayer/PotPlayer/Version/Latest/PotPlayerSetup64.exe");
    }
    if (/(Macintosh)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
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