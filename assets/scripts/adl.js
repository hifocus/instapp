var version = "1.0";  // define adl version
var version_type = "Stable";
var app_supported = "999"; // define number of apps supported

var userLang = navigator.language || navigator.userLanguage;
if (/zh|cn|tw|hk|TW|HK/i.test(userLang)) {
    // detect browser langauge, both simplified chinese and traditional chinese
    // place translations that are the same in both form of chinese
    document.getElementById("discover").innerHTML = "更多";
}
if (/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)) {
    // detect browser langauge, simplified chinese only
    document.write("<style>.lato { font-family: 'Segoe UI', -apple-system, system-ui, BlinkMacSystemFont, Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', sans-serif; }</style>");
    document.getElementById("index").innerHTML = "首页";
    document.getElementById("github").innerHTML = "GitHub";
    document.getElementById("blog").innerHTML = "惶心的博客";
}
else if (/zh-TW|zh-HK|zh-tw|zh-hk|zh-Hant|zh-hant|tw|hk/i.test(userLang)) {
    // detect browser langauge, traditional chinese only
    document.write("<style>.lato { font-family: 'Segoe UI', --apple-system, system-ui, BlinkMacSystemFont, Roboto, 'PingFang TC', 'Hiragino Sans CNS', 'Microsoft JhengHei', 'Helvetica Neue', sans-serif; }</style>");
    document.getElementById("index").innerHTML = "主頁";
    document.getElementById("github").innerHTML = "GitHub";
    document.getElementById("blog").innerHTML = "惶心的部落格";
}
else {
    // detect browser langauge, anything other than chinese will display english
    // font-family from https://docs.microsoft.com/en-gb/
    document.write("<style>.lato { font-family: 'Segoe UI', SegoeUI, 'Segoe WP', 'Helvetica Neue', Helvetica, Tahoma, Arial, sans-serif; }</style>");

}