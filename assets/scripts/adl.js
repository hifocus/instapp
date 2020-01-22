var version = "1.0";  // define adl version
var version_type = "Alpha";
var app_supported = "999"; // define number of apps supported

var userLang = navigator.language || navigator.userLanguage;

var github_href = "<a class='tooltip' target='_blank' id='dont' href='https://github.com/hifocus/adl'>GitHub</a>";

function trans(vn, lc) { // vn = variable name, lc = localised content
    return document.getElementById(vn).innerHTML = (lc);
}

function ct(cont) { // ct = change title
    document.title = cont;
}

function st(vn, cont) { // st = set tooltip, cont = content
    return document.getElementById(vn).setAttribute("data-tooltip", cont);
}

function st2(vn, cont1, cont2) {
    return document.getElementById(vn).setAttribute("data-tooltip", cont1 + app_supported + cont2);
}

const footer_innerhtml = (...args) => {
    document.getElementById("footer").innerHTML = (args)
};


if (/zh|cn|tw|hk|TW|HK/i.test(userLang)) {
    document.getElementById("discover").innerHTML = "更多";
}
if (/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)) {
    // detect browser langauge, simplified chinese only
    document.write("<style>.body { font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', sans-serif; }</style>");
    document.getElementById("index").innerHTML = "首页";
    document.getElementById("github").innerHTML = "GitHub";
    document.getElementById("blog").innerHTML = "惶心的博客";
}
else if (/zh-TW|zh-HK|zh-tw|zh-hk|zh-Hant|zh-hant|tw|hk/i.test(userLang)) {
    // detect browser langauge, traditional chinese only
    document.write("<style>.body { font-family: --apple-system, system-ui, BlinkMacSystemFont, Roboto, 'PingFang TC', 'Hiragino Sans CNS', 'Microsoft JhengHei', 'Helvetica Neue', sans-serif; }</style>");
    document.getElementById("index").innerHTML = "主頁";
    document.getElementById("github").innerHTML = "GitHub";
    document.getElementById("blog").innerHTML = "惶心的部落格";
}

else if (/zh*/i.test(userLang)) {
    var userLang = "zh-CN"; // Default non-standard userlang to simplified chinese
}

else {
    // detect browser langauge, any langauges other than chinese will display english
    // font-family from https://docs.microsoft.com/en-gb/
    document.write("<style>.body { font-family: 'Segoe UI', SegoeUI, 'Segoe WP', 'Helvetica Neue', Helvetica, Tahoma, Arial, sans-serif; }</style>");
}