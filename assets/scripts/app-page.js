// app-page.js
// Config section
var app_name = "Visual Studio Code"
var app_website = "https://code.visualstudio.com"
var app_cdn = "Azure CDN"
var app_tos = "https://code.visualstudio.com/license"


var page_title = app_name + " - ADL"
var userLang = navigator.language || navigator.userLanguage;
var github_href = "<a class='tooltip' target='_blank' id='dont' href='https://github.com/hifocus/adl'>ADL</a>";
if (/zh|cn|tw|hk|TW|HK/i.test(userLang)) {
    // detect browser langauge, both simplified chinese and traditional chinese
    // place translations that are the same in both form of chinese
    document.getElementById("discover").innerHTML = "更多";
}
if (/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)) {
    // detect browser langauge, simplified chinese only
    document.title = "下载 " + page_title;
    document.getElementById("home").innerHTML = "首页";
    document.getElementById("footer").innerHTML = "<span class='smaller-fonts'>你的浏览器语言为 <code>" + userLang + "</code></span><br>版本: " + "<span class='grey'>" + version +"</span> | 感谢使用 " + github_href;
    document.getElementById("dont").setAttribute("data-tooltip", "不要忘记 ⭐ 我们的项目");
}
else if (/zh-TW|zh-HK|zh-tw|zh-hk|zh-Hant|zh-hant|tw|hk/i.test(userLang)) {
    // detect browser langauge, traditional chinese only
    document.title = "下載 " + page_title;
    document.getElementById("home").innerHTML = "首頁";
    document.getElementById("footer").innerHTML = "<span class='smaller-fonts'>你的瀏覽器語言為 <code>" + userLang + "</code></span><br>版本: " + "<span class='grey'>" + version +"</span> |  感謝使用 " + github_href;
    document.getElementById("dont").setAttribute("data-tooltip", "不要忘記 ⭐ 我們的項目");
}
else {
    // detect browser langauge, anything other than chinese will display english
    document.getElementById("footer").innerHTML = "<span class='smaller-fonts'>By downloading, you agreed to " + app_name + "'s <a href='" + app_tos + "' target='_blank'>ToS</a>.</span><br>Download Source: " + app_cdn  + " | " + github_href + "<span class='grey'> " + version +"</span>";
    document.getElementById("dont").setAttribute("data-tooltip", "Don't forget to ⭐ our project!");
}