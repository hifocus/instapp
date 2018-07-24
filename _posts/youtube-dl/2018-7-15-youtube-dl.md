---
displayTitle: youtube-dl
---

<script>
        const repo = "https://api.github.com/repos/rg3/youtube-dl/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = "https://github.com/rg3/youtube-dl/releases/download/" + (data.tag_name) + "/youtube-dl.exe";
        })
</script>