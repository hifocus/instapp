var version = "Insider";

var userLang = navigator.language || navigator.userLanguage;
if (/zh|cn|tw|hk|TW|HK/i.test(userLang)) {
    document.getElementById("discover").innerHTML = "更多";
    document.getElementById("github").innerHTML = "GitHub 上的 ADL";
    document.getElementById("howto").innerHTML = "如何使用";
}
if (/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)) {
    document.title = 'ADL - 下载应用 于瞬息之间';
    document.getElementById("docs").innerHTML = "浏览文档";
    document.getElementById("blog").innerHTML = "惶心的博客";
    document.getElementById("supported").innerHTML = "已支持的应用";
    document.getElementById("title").setAttribute("data-tooltip", "下载应用 于瞬息之间 ⚡");
    document.getElementById("howto").setAttribute("data-tooltip", "浏览文档");
    document.getElementById("supported").setAttribute("data-tooltip", "已支持 ∞ 个应用");
    document.getElementById("footer").innerHTML = "版本: " + version + "<br><a class='tooltip'id='dont' href='https://github.com/hifocus/adl'>GitHub</a> 上的开源项目";
    document.getElementById("dont").setAttribute("data-tooltip", "不要忘记 ⭐ 我们的项目");
}
else if (/zh-TW|zh-HK|zh-tw|zh-hk|zh-Hant|zh-hant|tw|hk/i.test(userLang)) {
    document.title = 'ADL - 下載應用 於瞬息之間';
    document.getElementById("docs").innerHTML = "閱覽文檔";
    document.getElementById("blog").innerHTML = "惶心的部落格";
    document.getElementById("title").setAttribute("data-tooltip", "下載應用 於瞬息之間 ⚡");
    document.getElementById("howto").setAttribute("data-tooltip", "閱覽文檔");
    document.getElementById("supported").innerHTML = "已支援的應用";
    document.getElementById("supported").setAttribute("data-tooltip", "已支援 ∞ 款應用");
    document.getElementById("footer").innerHTML = "版本: " + version + "<br><a class='tooltip'id='dont' href='https://github.com/hifocus/adl'>GitHub</a> 上的開源項目";
    document.getElementById("dont").setAttribute("data-tooltip", "不要忘記 ⭐ 我們的項目");
}
else {
    document.getElementById("title").setAttribute("data-tooltip", "Download apps in seconds ⚡");
    document.getElementById("howto").setAttribute("data-tooltip", "Browse docs");
    document.getElementById("supported").setAttribute("data-tooltip", "∞ apps are supported");
    document.getElementById("footer").innerHTML = "Version: " + version + "<br>Open Source Project on<a class='tooltip'id='dont' href='https://github.com/hifocus/adl'> GitHub</a>";
    document.getElementById("dont").setAttribute("data-tooltip", "Don't forget to ⭐ our project!");
}

