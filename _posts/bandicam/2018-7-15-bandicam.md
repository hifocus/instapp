---
titile: Bandicam
---
<!-- Identify UA then redirect -->
<script>
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        window.location.href = "https://dl.bandicam.cn/bdcamsetup.exe";
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        window.location.href = "https://dl.bandicam.cn/bdcamsetup.exe";
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