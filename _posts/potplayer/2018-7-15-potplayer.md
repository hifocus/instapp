---
title: Potplayer
---
<script>
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        window.location.href = ("http://get.daum.net/PotPlayer64/Version/Latest/PotPlayerSetup64.exe");
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        window.location.href = ("http://get.daum.net/PotPlayer/Version/Latest/PotPlayerSetup.exe");
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