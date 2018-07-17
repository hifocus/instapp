---
displayTitle: Hexo Material Theme
---
<!-- Identify UA then redirect -->
<script>
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        const repo = "https://api.github.com/repos/viosey/hexo-theme-material/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = (data.zipball_url);
        })
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        const repo = "https://api.github.com/repos/viosey/hexo-theme-material/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = (data.zipball_url);
        })
    }
    if (/(Macintosh)/i.test(navigator.userAgent)) {
        const repo = "https://api.github.com/repos/viosey/hexo-theme-material/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = (data.zipball_url);
        })
    }
    if (/(iPhone|iPod)/i.test(navigator.userAgent)) {
        const repo = "https://api.github.com/repos/viosey/hexo-theme-material/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = (data.zipball_url);
        })
    }
    if (/(iPad)/i.test(navigator.userAgent)) {
        const repo = "https://api.github.com/repos/viosey/hexo-theme-material/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = (data.zipball_url);
        })
    }
    if (/(Android)/i.test(navigator.userAgent)) {
        const repo = "https://api.github.com/repos/viosey/hexo-theme-material/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = (data.zipball_url);
        })
    };
</script>