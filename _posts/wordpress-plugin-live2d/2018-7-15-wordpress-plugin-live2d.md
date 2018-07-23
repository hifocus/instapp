---
displayTitle: Wordpress Plugin Live2d
---
<script>
        const repo = "https://api.github.com/repos/xb2016/poster-girl-l2d-2233/releases/latest";
        $.getJSON(repo).done(function (data) {
            window.location = "https://github.com/xb2016/poster-girl-l2d-2233/archive/" + (data.tag_name) + ".zip";
        })
</script>