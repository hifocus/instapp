---
displayTitle: Tencent Online Games Accelerator
---

<script src="https://pc1.gtimg.com/pc/jiasu/data/jiasuadtag.js"></script>
<script>
jiasuadtag.forEach((a,b)=>{
if (a.adtag == "main") {
    console.log(a.url);
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
    window.location.href = a.url;

}
    if (/(x86_64)/i.test(navigator.userAgent)) {
    window.location.href = a.url;

}
}
});

    if (/(Macintosh)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
    if (/(iPhone|iPod)/i.test(navigator.userAgent)) {
        window.location.href = "https://apps.apple.com/cn/app/id1474065680";
    }
    if (/(iPad)/i.test(navigator.userAgent)) {
        window.location.href = "https://apps.apple.com/cn/app/id1474065680";
    }
    if (/(Android)/i.test(navigator.userAgent)) {
        window.location.href = "https://jiasu.qq.com/mobile/downloadurl.html";
}
console.log("Thanks to 神林 and 蓝鸟")
</script>