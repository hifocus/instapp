---
title: Telegram
---

<script>
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        if (confirm("shadowsocks?")) (function () {
            var i = document.createElement('iframe');
            i.style.display = 'none';
            i.onload = function () { i.parentNode.removeChild(i); };
            i.src = 'https://telegram.org/dl/desktop/win';
            document.body.appendChild(i);
        })();
        else window.location.href = "https://tech.hxco.de/";
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        if (confirm("shadowsocks?")) (function () {
            var i = document.createElement('iframe');
            i.style.display = 'none';
            i.onload = function () { i.parentNode.removeChild(i); };
            i.src = 'https://telegram.org/dl/desktop/win';
            document.body.appendChild(i);
        })();
        else window.location.href = "https://tech.hxco.de/";
    }
    if (/(Macintosh)/i.test(navigator.userAgent)) {
        if (confirm("shadowsocks?")) (function () {
            var i = document.createElement('iframe');
            i.style.display = 'none';
            i.onload = function () { i.parentNode.removeChild(i); };
            i.src = 'https://telegram.org/dl/desktop/macos';
            document.body.appendChild(i);
        })();
        else window.location.href = "https://tech.hxco.de/";
    }
    if (/(iPhone|iPod)/i.test(navigator.userAgent)) {
        window.location.href = "https://itunes.apple.com/app/telegram-messenger/id686449807";
    }
    if (/(iPad)/i.test(navigator.userAgent)) {
        window.location.href = "https://itunes.apple.com/app/telegram-messenger/id686449807";
    }
    if (/(Android)/i.test(navigator.userAgent)) {
        if (confirm("shadowsocks?")) 
        (function () {
        window.location = "https://apkpure.com/telegram/org.telegram.messenger/download"
        })();
        else window.location.href = "https://tech.hxco.de/";
    }
</script>
