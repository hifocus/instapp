---
displayTitle: Typecho Theme Cactus
---

<script>
        const repo = "https://api.github.com/repos/ZoharWang/typecho-theme-Cactus/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = "https://github.com/ZoharWang/typecho-theme-Cactus/archive/" + (data.tag_name) + ".zip";
        })
</script>
