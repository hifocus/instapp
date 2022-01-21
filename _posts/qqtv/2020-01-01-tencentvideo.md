---
displayTitle: Tencent Video
---

<script>
match_pc = async () => {
    const res = await fetch('https://qqtv.now.sh');
    const text = await res.text();
window.location.href = (text.match(/https(.*)tencentvideo(.*).exe/gi))
};

match_mac = async () => {
    const res = await fetch('https://qqtv.now.sh');
    const text = await res.text();
window.location.href = (text.match(/https(.*)tencentvideo(.*).dmg/gi))
};
    if (/(WOW64)/i.test(navigator.userAgent)) {
        match_pc();
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        match_pc();
    }
    if (/(Macintosh)/i.test(navigator.userAgent)) {
        match_mac();
    }
    if (/(iPhone|iPod)/i.test(navigator.userAgent)) {
        window.location.href = "https://apps.apple.com/app/id458318329";
    }
    if (/(iPad)/i.test(navigator.userAgent)) {
        window.location.href = "https://apps.apple.com/app/id458318329";
    }
    if (/(Android)/i.test(navigator.userAgent)) {
        window.location.href = "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=848&platform=aphone";
}
</script>