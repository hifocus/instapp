---
displayTitle: Typecho Material Theme
---
<!-- Identify UA then redirect -->
<script>
        const repo = "https://api.github.com/repos/idawnlight/typecho-theme-material/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = "https://onedrive.idawnlight.com/Material/Material-" + (data.tag_name) + ".zip";
        })
</script>