var version = "Insider";  // define adl version
var app_supported = "999"; // define number of apps supported

var userLang = navigator.language || navigator.userLanguage;
if (/zh|cn|tw|hk|TW|HK/i.test(userLang)) {
    // detect browser langauge, both simplified chinese and traditional chinese
    // place translations that are the same in both form of chinese
    document.getElementById("discover").innerHTML = "更多";
    document.getElementById("howto").innerHTML = "如何使用";
}
if (/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)) {
    // detect browser langauge, simplified chinese only
    document.write("<style>.lato { font-family: 'Lato', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', sans-serif; }</style>");
    document.title = 'ADL - 下载应用 于瞬息之间';
    document.getElementById("docs").innerHTML = "浏览文档";
    document.getElementById("github").innerHTML = "GitHub 页面";
    document.getElementById("blog").innerHTML = "惶心的博客";
    document.getElementById("supported").innerHTML = "已支持的应用";
    document.getElementById("title").setAttribute("data-tooltip", "下载应用 于瞬息之间 ⚡");
    document.getElementById("howto").setAttribute("data-tooltip", "浏览文档");
    document.getElementById("supported").setAttribute("data-tooltip", "已支持 " + app_supported  + " 个应用");
    document.getElementById("footer").innerHTML = "<span class='smaller-fonts'>你的浏览器语言为 <code>" + userLang + "</code></span><br>版本: " + "<span class='grey'>" + version +"</span> | 开源于 <a class='tooltip' id='dont' href='https://github.com/hifocus/adl'>GitHub</a>";
    document.getElementById("dont").setAttribute("data-tooltip", "不要忘记 ⭐ 我们的项目");
}
else if (/zh-TW|zh-HK|zh-tw|zh-hk|zh-Hant|zh-hant|tw|hk/i.test(userLang)) {
    // detect browser langauge, traditional chinese only
    document.write("<style>.lato { font-family: 'Lato', --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang TC', 'Hiragino Sans CNS', 'Microsoft JhengHei', 'Helvetica Neue', sans-serif; }</style>");
    document.title = "ADL - 下載應用 就於轉眼間";
    document.getElementById("docs").innerHTML = "閱覽文檔";
    document.getElementById("github").innerHTML = "GitHub 專頁";
    document.getElementById("blog").innerHTML = "惶心的部落格";
    document.getElementById("title").setAttribute("data-tooltip", "下載應用 就於轉眼間 ⚡");
    document.getElementById("howto").setAttribute("data-tooltip", "閱覽文檔");
    document.getElementById("supported").innerHTML = "已支援的應用";
    document.getElementById("supported").setAttribute("data-tooltip", "已支援 " + app_supported  + " 款應用");
    document.getElementById("footer").innerHTML = "<span class='smaller-fonts'>你的瀏覽器語言為 <code>" + userLang + "</code></span><br>版本: " + "<span class='grey'>" + version +"</span> |  開源於 <a class='tooltip' id='dont' href='https://github.com/hifocus/adl'>GitHub</a>";
    document.getElementById("dont").setAttribute("data-tooltip", "不要忘記 ⭐ 我們的項目");
}
else {
    // detect browser langauge, anything other than chinese will display english
    document.write("<style>.lato { font-family: 'Lato', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; }</style>");
    document.getElementById("title").setAttribute("data-tooltip", "Download apps in seconds ⚡");
    document.getElementById("howto").setAttribute("data-tooltip", "Browse docs");
    document.getElementById("supported").setAttribute("data-tooltip", app_supported  + " apps are supported");
    document.getElementById("footer").innerHTML = "<span class='smaller-fonts'>Your browser language is <code>" + userLang + "</code></span><br>Version: " + "<span class='grey'>" + version +"</span> | Open Source Project on <a class='tooltip' id='dont' href='https://github.com/hifocus/adl'>GitHub</a>";
    document.getElementById("dont").setAttribute("data-tooltip", "Don't forget to ⭐ our project!");
}