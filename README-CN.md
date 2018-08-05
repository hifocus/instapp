<p align="center">
<img src="https://i.imgur.com/0u6W2PD.png" alt="HXCO Get">
</p>

<h1 align="center"></h1>

<p align="center">
<a href="https://github.com/hxco/Get/releases"><img alt="Version" src="https://img.shields.io/github/release/hxco/get/all.svg?style=flat-square"/></a>
<a href="https://tech.hxco.de" target="_blank"><img alt="Author" src="https://img.shields.io/badge/author-Huangxin-red.svg?style=flat-square"/></a>
<a href="https://github.com/hxco/Get/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/hxco/get.svg?style=flat-square"/></a>
<a href="https://github.com/hxco/Get/stargazers"><img alt="Contributors" src="https://img.shields.io/github/stars/hxco/Get.svg?style=flat-square"/></a>
<a href="https://github.com/hxco/Get/fork"><img alt="Forks" src="https://img.shields.io/github/forks/hxco/get.svg?style=flat-square"/></a>
<a href="https://jekyllrb.com/"><img alt="Jekyll" src="https://img.shields.io/badge/powered_by-Jekyll-green.svg?style=flat-square"/></a>
<a href="https://github.com/hxco/Get/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/hxco/Get.svg?style=flat-square"/></a>
<a href="https://get.js.org"><img alt="Status" src="https://img.shields.io/website-up-down-green-red/https/get.js.org.svg?style=flat-square&label=Service%20Status"/></a>
<a href="https://github.com/hxco/Get/blob/master/README.md"><img alt="Author" src="https://img.shields.io/badge/English Docs-Here-red.svg?style=flat-square"/></a>
</p>

> 😎 万物皆可 HXCO Get！

## 介绍

HXCO Get 是一个可以帮助你用一条简单的链接下载应用和资源的在线服务。[查看博文](https://tech.hxco.de/announcement/to-meet-you-in-one-year.html)

目前的支持列表： [查看 https://get.js.org/apps](https://get.js.org/apps "查看 https://get.js.org/apps")

## 特性

- 漂亮且简短的链接， `https://get.js.org/{appname}`
- 可以使用“别名”，`https://get.js.org/tg` 和 `https://get.js.org/telegram`是一样的
- 全平台支持，包括 `Windows` `macOS` `安卓` `iOS`
- 永远下载应用的最新版本
- 经过优化的代码，可在全球范围内快速加载

## 如何使用

### 正常姿势

- 简单地在你的浏览器内输入 `https://get.js.org/{应用名称}`。

- 如果你看到了一个 `404` 错误，这说明你想要下载的应用还没有被支持。查看 [加入我们](https://github.com/hxco/Get#join-us) 页面。
目前的支持列表：[https://get.js.org/apps](https://get.js.org/apps "查看 https://get.js.org/apps")

- 如果你看到这样的警告：

  ![](https://upload.cc/i1/2018/07/20/MoXczF.png)

  确保你可以正常地访问国外网站。 这是一项特性，可以提醒中国大陆的用户在下载某些受限制的应用时使用代理。如果你不处于中国大陆，直接忽略这个警告并且选择 `确认`。

### 别名系统

- 对于英语用户来说，我们的别名系统十分简单：我们没有太多的（英语）别名可用。这是因为我是一个中国人而我不太能确定 `googlechrome` 可以缩写成 `gc`. 但是如果你有任何的想法，请在 [Issue](https://github.com/hxco/Get/issue) 里告诉我们.

- 对于中文用户来说，我们在三个方面创建别名。

  1. 中文拼音的全拼，例如 `wangyiyunyinyue`
  2. 拼音的首字母，例如 `wyyyy`
  3. 中文名称的英语翻译，例如 `cloudmusic` or `formatfactory`

  以上域名在所有的国产应用里可用。如果有任何错误，也请在 [Issue](https://github.com/hxco/Get/issue) 里告诉我们。

## 如何工作

目前我们支持了50多个应用，你可以在 [https://get.js.org/apps](https://get.js.org/apps "查看 https://get.js.org/apps") 里找到它们。

首先 HXCO Get 会识别你的操作系统

```
<script>
    if (/(x64|WOW64)/i.test(navigator.userAgent)) {
        window.location.href = "https://latest.app";
    }
    if (/(x86_64)/i.test(navigator.userAgent)) {
        window.location.href = "https://latest.app";
    }
    if (/(Macintosh)/i.test(navigator.userAgent)) {
        window.location.href = "https://latest.app";
    }
	// 如果这个应用在某个平台上不被支持
    if (/(iPhone|iPod)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
        }
    if (/(iPad)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
    if (/(Android)/i.test(navigator.userAgent)) {
        alert("This app does not work on your device.");
    }
</script>
```

作为准备，我们使用 Chrome 的 开发人员工具 以获取特定应用的下载链接。例如，Atom 的下载链接是这样的：

`https://atom.io/download/windows_x64`

这个链接会自动重定向到 Atom 的最新的稳定版本（这个是 Windows 64位 的），看起来是这样的：

`https://atom-installer.github.com/v1.28.2/AtomSetup-x64.exe`

所以我们能够提供（下载）应用的最新版本。我们也可以通过其他方法找到（应用的）永久链接，比如依赖第三方应用程序接口。

## 参与我们

如果有任何想法或需求，可以在 [Issue](https://github.com/hxco/Get/issues) 中告诉我们。


### 提交新的软件支持

1.  查看 [ https://get.js.org/apps](https://get.js.org/apps "https://get.js.org/apps") 以确认该应用未被支持。

1. HXCO Get 基于 Jekyll. 确认你有相关的开发环境。

1. [为这个仓库创建一个分支（Fork）](https://github.com/hxco/Get/fork "Fork this repo")。复制（Clone）到本地。

1.  在 `_posts\{appname}\{year}-{month}-{date}-{appname}.md` 中加入 [我们的格式化脚本](https://github.com/hxco/Get#how-does-it-work "我们的格式化脚本")和永久下载链接。

1. 提交一个合并请求（Pull Request）。


### 参与讨论

1.  [GitHub Issue](https://github.com/hxco/Get/issues)
1.  [QQ群组](https://tech.hxco.de/announcement/join-chat-group.html)

## 部署

1. 确认你有 Jekyll 开发环境。
2. 复制（Clone）到本地。
3. `cd path/to/repo/Get`
4. `jekyll s`

## 赞助 HXCO Get 的研发

老实说，这个项目并不复杂，可能不值得你捐赠给我们。 在这种情况下，[star](https://github.com/hxco/Get/stargazers "star") 可能是个不错的选择。

但如果您真的想捐赠我们，我们非常欢迎您这样做。

- [HXCO Pay](https://c1.hx.taifua.com/hx/) (仅限中国大陆)
- [Paypal](https://paypal.me/hxco)

## 作者

**HXCO Get** © [惶心](https://github.com/hifocus)， 在 [MIT](https://github.com/hxco/Get/blob/master/LICENSE) 许可下发布。<br>
由惶心在[贡献者](https://github.com/hxco/Get/contributors)的帮助下撰写和维护。

> 博客 [@Tech HXCO](https://tech.hxco.de) · GitHub [@hifocus](https://github.com/hifocus)

<hr>

> 说明：这个 `README.md` 借鉴了 [RSSHub](https://github.com/DIYgod/RSSHub)。