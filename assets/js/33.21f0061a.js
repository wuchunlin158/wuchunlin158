(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{439:function(s,t,e){"use strict";e.r(t);var a=e(2),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("Boxx"),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#序言"}},[s._v("序言")])]),e("li",[e("a",{attrs:{href:"#本地环境搭建"}},[s._v("本地环境搭建")]),e("ul",[e("li",[e("a",{attrs:{href:"#搭建-blog-平台"}},[s._v("搭建 Blog 平台")])])])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"序言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#序言"}},[s._v("#")]),s._v(" 序言")]),s._v(" "),e("p",[s._v("如果你开始或已经使用  "),e("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),e("OutboundLink")],1),s._v(" 搭建了属于自己的个人博客的时候，那么恭喜你，你已经成为我们的一员了。\n那么我想以下一定是需要了解的：")]),s._v(" "),e("ul",[e("li",[s._v("vuepress官网："),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/zh/"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("vuepress自定义开发主题："),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/writing-a-theme.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/zh/theme/writing-a-theme.html"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("vuepress-theme-reco官网："),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress-theme-reco.recoluan.com/"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"本地环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地环境搭建"}},[s._v("#")]),s._v(" 本地环境搭建")]),s._v(" "),e("ul",[e("li",[e("h3",{attrs:{id:"搭建-blog-平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-blog-平台"}},[s._v("#")]),s._v(" 搭建 Blog 平台")]),s._v(" "),e("p",[s._v("官方提到了一些博客主题：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/blog-theme.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress - 博客主题"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#writing-a-blog-theme",target:"_blank",rel:"noopener noreferrer"}},[s._v("@vuepress/plugin-blog - Writing a blog theme"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("这些看起来都太简陋。")]),s._v(" "),e("p",[s._v("另有2个主题，之前在 VuePress 官方网页里出现过的，现在已经被移除。个人猜想其原因可能是，这两个主题没有完全在官方插件上做扩展，而是做了过多的底层定制和修改，在未来官方博客插件升级时，有可能不兼容。")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/z3by/vuepress-theme-modern-blog",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-modern-blog"),e("OutboundLink")],1),s._v("，"),e("a",{attrs:{href:"https://vp-modern.z3by.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("演示"),e("OutboundLink")],1),s._v(" 。此主题有点过于华丽。")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),e("OutboundLink")],1),s._v("，"),e("a",{attrs:{href:"https://www.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("演示 - 午后南杂"),e("OutboundLink")],1),s._v("。此主题简洁优雅。")])]),s._v(" "),e("p",[s._v("个人偏好，我选择了"),e("code",[s._v("vuepress-theme-reco")]),s._v("主题，下面是搭建步骤。")]),s._v(" "),e("p",[s._v("按官方文档的"),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("说明"),e("OutboundLink")],1),s._v("，使用 yarn 来安装：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install the theme.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @vuepress-reco/theme-cli\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Upgrade.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yarn global upgrade @vuepress-reco/theme-cli")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化（需要回答一些问题，最后一个选择： blog）")]),s._v("\ntheme-cli init my-blog\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-blog\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 【可选步骤】升级")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yarn upgrade")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("这将生成一个博客网站模板“my-blog”，其中“docs”文件夹里面是主要的源文件，包括配置和博客文章的 Markdown 文件。我们可以在此基础上，进行修改和定制。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开本地服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or: vuepress dev docs")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译生成静态网页")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("如果编译生成静态网页时，发生类似下面的错误：")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Module not found: Error: Can't resolve 'vue-class-component' in ...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这是因为某些依赖关系不满足所致，可参照错误提示，运行如下命令来添加相关依赖：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vue-class-component\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vue\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("再次尝试编译生成静态网页，或是打开本地服务。应该一切正常才可以进行下一步。")]),s._v(" "),e("p",[s._v("打开本地服务后，VuePress 的开发环境可通过浏览器访问 http://localhost:8080/。在"),e("code",[s._v("docs\\.vuepress\\config.js")]),s._v("中设定，编译生成的静态网页将位于“public”文件夹中。")]),s._v(" "),e("p",[s._v("在生成的模板上，我随即更新了 "),e("code",[s._v("package.json")]),s._v(" 中的依赖，使用最新的版本。最新的版本号可以在这里找到：")]),s._v(" "),e("ul",[e("li",[s._v("VuePress: "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("CHANGELOG.md"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("vuepress-theme-reco: "),e("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco/blob/develop/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("CHANGELOG.md"),e("OutboundLink")],1)])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.5.2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-theme-reco"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.2.2"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("项目文件夹下的 "),e("code",[s._v("package.json")]),s._v(" 文件内容大致如下，仅供参考：")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20200304_bobyuan_vuepress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog - software talks"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git+https://gitlab.com/bobyuan/20200304_bobyuan_vuepress.git"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.5.2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-theme-reco"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.2.2"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.6.11"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue-class-component"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^7.2.3"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[s._v("博客文章即 Markdown 文档。例如，其他类（other）的文章之一：《利用 VuePress 搭建博客网站》，放在 "),e("code",[s._v("docs\\views\\other\\guide\\")]),s._v("文件夹中。此文章的文件命名为 "),e("code",[s._v("README.md")]),s._v("，它将作为"),e("code",[s._v("http://localhost:8080/views/other/guide/")]),s._v("的首页。关于图片文件的引用，有一个小技巧。")]),s._v(" "),e("ol",[e("li",[s._v("在 "),e("code",[s._v("docs\\.vuepress\\public\\views\\")]),s._v(" 和 "),e("code",[s._v("docs\\views\\")]),s._v(" 中建立同样的目录结构。其中前者是 VuePress 要求存放图片文件的地方，后者是 Markdown 博客文章 Markdown 文件的存放地方。")]),s._v(" "),e("li",[s._v("为了让 Typora 编辑器打开 Markdown 文件时能够显示图片，同时又能让图片文件位于 VuePress 所要求的文件夹，我们需要在 Markdown 文件所在的文件夹中，建立一个目录连接（Directory Junction），让它指向 VuePress 要求的文件夹中（那里存放着图片文件）。")])]),s._v(" "),e("p",[s._v("举个例子， "),e("code",[s._v("docs\\.vuepress\\public\\views\\other\\guide\\asset\\")]),s._v(" 中，存放了几张图片文件。在 Markdown 文件"),e("code",[s._v("README.md")]),s._v(" 所处的文件夹 "),e("code",[s._v("docs\\views\\other\\guide\\")]),s._v("中，我们建立了一个 "),e("code",[s._v("asset")]),s._v(" 目录链接，它以相对路径的方式指向了"),e("code",[s._v("docs\\.vuepress\\public\\views\\other\\guide\\asset\\")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("REM We would like to create a directory junction "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"asset"')]),s._v(" from:\nREM docs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("views"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("other"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("guide"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nREM to: \nREM docs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".vuepress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("public"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("views"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("other"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("guide"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("asset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\nREM First, check "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" the relative path is correct:\nCD /D docs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("views"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("other"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("guide"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nDIR "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".vuepress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("public"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("views"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("other"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("guide"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("asset\n\nREM Then, run the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" to create the directory junction:\nMKLINK /J asset "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".vuepress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("public"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("views"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("other"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("guide"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("asset\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("另外，为了避免将目录链接里面的文件重复加入到 Git 的版本控制，我们需要在 "),e("code",[s._v(".gitignore")]),s._v(" 中，添加一条设置，忽略建立的目录链接。例如：")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# ignore directory junctions.\n/docs/views/other/guide/asset/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("打开本地服务，一边用 Typora 编辑 Markdown 文章，一边用浏览器（http://localhost:8080）看效果。每次保存 Markdown 文件，浏览器的结果会自动更新（不需要手动刷新），非常方便快捷。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开本地服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or: vuepress dev docs")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("本地开发满意后，在 GitHub （也可以是 GitLab等类似的版本控制托管服务）中建立一个代码库，将本地代码提交到代码库中。")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);