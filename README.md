<p align="center">
<img src="https://i.imgur.com/up45bpO.png" alt="HXCO Get" width="100">
</p>

<h1 align="center"><a href="https://get.js.org" target="_blank">HXCO Get</a></h1>

> 😎 Everything can be downloaded via HXCO Get!


<p align="center">
<a href="https://github.com/hxco/Get/releases"><img alt="Version" src="https://img.shields.io/github/release/hxco/get/all.svg?style=flat-square"/></a>
<a href="https://tech.hxco.de" target="_blank"><img alt="Author" src="https://img.shields.io/badge/author-Huangxin-red.svg?style=flat-square"/></a>
<a href="https://github.com/hxco/Get/blob/master/LICENSE"><img alt="Contributors" src="https://img.shields.io/github/contributors/hxco/get.svg?style=flat-square"/></a>
<a href="https://github.com/hxco/Get/stargazers"><img alt="Contributors" src="https://img.shields.io/github/stars/hxco/Get.svg?style=flat-square"/></a>
<a href="https://github.com/hxco/Get/fork"><img alt="Contributors" src="https://img.shields.io/github/forks/hxco/get.svg?style=flat-square"/></a>
<a href="https://jekyllrb.com/"><img alt="Jekyll" src="https://img.shields.io/badge/powered_by-Jekyll-green.svg?style=flat-square"/></a>
<a href="https://travis-ci.org/viosey/hexo-theme-material"><img alt="License" src="https://img.shields.io/github/license/hxco/Get.svg?style=flat-square"/></a>
<a href="https://get.js.org"><img alt="Status" src="https://img.shields.io/website-up-down-green-red/https/get.js.org.svg?style=flat-square&label=Service%20Status"/></a>
<a href="https://github.com/hxco/Get/blob/master/README-CN.md"><img alt="Author" src="https://img.shields.io/badge/中文文档-这里-red.svg?style=flat-square"/></a>
</p>


## Introduction

HXCO Get is an online service that helps you download applications and resources with a simple link. [Our Blog Posts](https://pages.qrcdn.com/translocation/hxco-get-posts)

Current Support List: [View https://get.js.org/apps](https://get.js.org/apps "View https://get.js.org/apps")

## Features

- Nice and short url, `https://get.js.org/chrome`
- Alais available, `https://get.js.org/googlechrome` is the same as `https://get.js.org/chrome`
- Full platform supported, included `Windows` `macOS` `Android` `iOS`
- Always download the latest version of the program
- Optimized code to load quickly across the globe

## How Does It Work

Currently we support more than 50 apps, you may find them in [ https://get.js.org/apps](https://get.js.org/apps "View https://get.js.org/apps").

First HXCO Get will identify your OS:

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
	// If this app does not support a platform
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

As preperation,  we use the developer tools in Chrome to get download links for specific apps significiant app. For example, the download link for Atom is as follows:

`https://atom.io/download/windows_x64`

This link will automattically redirect you to the the latest stable version of Atom (this one is for Windows 64 bit), which looks like this: 

`https://atom-installer.github.com/v1.28.2/AtomSetup-x64.exe`

Therefore we are able to serve you with the latest version of the app. We can also find permanent links in other ways, such as relying on third-party APIs.

## Join Us

If you have any ideas or requests，you may tell us in [issue](https://github.com/hxco/Get/issues) , at the same time we welcome all kinds of pull requests.


### Submit New App Support

1.  Check out [ https://get.js.org/apps](https://get.js.org/apps "https://get.js.org/apps") to make sure it is not currently supported

1. HXCO Get is based on Jekyll. Make sure you have the appropriate development environment.

1. [Fork this repo](https://github.com/hxco/Get/fork "Fork this repo"). Clone to local. 

1.  Add [our formatted scripts](https://github.com/hxco/Get#how-does-it-work "our formatted scripts") with the permanent download links in `_posts\{appname}\{year}-{month}-{date}-{appname}.md`

1. Submit a pull request.


### Join Our Discussion

1.  [GitHub Issue](https://github.com/hxco/Get/issues)
1.  [QQ Chat Group](https://tech.hxco.de/announcement/join-chat-group.html)

## Deployment

1. Make sure you have the Jekyll development environment.
2. Clone to local.
3. `cd path/to/repo/Get`
4. `jekyll s`

## Sponsored the Development of HXCO Get

Honestly, this project is not complicated and may not be worth your donation to us. In this case, [star](https://github.com/hxco/Get/stargazers "star") might be a good choice!

But if you really want to donate us, you are more than welcome to do so.

- [Paypal](https://paypal.me/hxco)
- [HXCO Pay](https://c1.hx.taifua.com/hx/) (China Mainland Only)


## Author

**HXCO Get** © [Huangxin](https://github.com/hifocus), Released under the [MIT](https://github.com/hxco/Get/blob/master/LICENSE) License.<br>
Authored and maintained by Huangxin with help from contributors ([list](https://github.com/hxco/Get/contributors)).

> Blog [@Tech HXCO](https://tech.hxco.de) · GitHub [@hifocus](https://github.com/hifocus)

<hr>

> Notice: This `README.md` draws on [RSSHub](https://github.com/DIYgod/RSSHub).