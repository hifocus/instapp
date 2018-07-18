---
title: iOS Developer Beta
---

<script>
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
    if (/(Macintosh)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
    if (/(iPhone|iPod)/i.test(navigator.userAgent)) {
        window.location.href = "https://get.js.org/elements/iOSbeta.mobileconfig";
        }
    if (/(iPad)/i.test(navigator.userAgent)) {
        window.location.href = "https://get.js.org/elements/iOSbeta.mobileconfig";
    }
    if (/(Android)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
</script>