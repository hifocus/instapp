---
displayTitle: Typecho Plugin Pio
---
<script>
        const repo = "https://api.github.com/repos/Dreamer-Paul/Pio/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = "https://github.com/Dreamer-Paul/Pio/archive/" + (data.tag_name) + ".zip";
        })
</script>