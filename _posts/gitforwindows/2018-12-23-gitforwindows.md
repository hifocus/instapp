<script>
    const repo = "https://api.github.com/repos/git-for-windows/git/releases/latest";
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        $.getJSON(repo).done(function (data) {
            window.location = (data.assets[2].browser_download_url);
        })
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        $.getJSON(repo).done(function (data) {
            window.location = (data.assets[0].browser_download_url);
        })
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