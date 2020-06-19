(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{447:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx"),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#线程池"}},[s._v("线程池")]),a("ul",[a("li",[a("a",{attrs:{href:"#前言"}},[s._v("前言")])]),a("li",[a("a",{attrs:{href:"#初识executors"}},[s._v("初识Executors")])]),a("li",[a("a",{attrs:{href:"#步入-threadpoolexecutor"}},[s._v("步入ThreadPoolExecutor")])]),a("li",[a("a",{attrs:{href:"#线程池的工作顺序"}},[s._v("线程池的工作顺序")])]),a("li",[a("a",{attrs:{href:"#executors弊端"}},[s._v("Executors弊端")])]),a("li",[a("a",{attrs:{href:"#正确的使用线程池"}},[s._v("正确的使用线程池")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[s._v("#")]),s._v(" 线程池")]),s._v(" "),a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Java中创建线程池很简单，Java提供了 "),a("em",[a("strong",[s._v("Executors")])]),s._v(" 这个强大的线程池工具类，我们创造线程池只需调用某个方法即可，比如"),a("code",[s._v("Executors.newFixedThreadPool(int nThreads)")]),s._v("，但是便捷不仅隐藏了复杂性，也为我们埋下了潜在的隐患（"),a("strong",[s._v("OOM")]),s._v("，"),a("strong",[s._v("线程耗尽")]),s._v("）。")])]),s._v(" "),a("li",[a("p",[s._v("而强大的 "),a("em",[a("strong",[s._v("Executors")])]),s._v(" 在创建线程池时，也只是依赖"),a("code",[s._v("ThreadPoolExecutor")]),s._v("类，修改其中几个方法参数而已。")])]),s._v(" "),a("li",[a("p",[s._v("同时，在阿里规范中也明确【强制】指出 "),a("strong",[s._v("通过 ThreadPoolExecutor  创建线程池")]),s._v("。")]),s._v(" "),a("ol",[a("li",[s._v("【强制】创建线程或线程池时请指定有意义的线程名称，方便出错时回溯。\n正例：")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimerTaskThread")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimerTaskThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TimerTaskThread"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("【强制】线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。\n说明： 使用线程池的好处是减少在创建和销毁线程上所花的时间以及系统资源的开销，解决资\n源不足的问题。如果不使用线程池，有可能造成系统创建大量同类线程而导致消耗完内存或者\n“过度切换”的问题。")])]),s._v(" "),a("li",[a("p",[s._v("【强制】线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式，这样\n的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险。")])])])])]),s._v(" "),a("h3",{attrs:{id:"初识executors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初识executors"}},[s._v("#")]),s._v(" 初识Executors")]),s._v(" "),a("p",[a("strong",[s._v("1. Executors.newCachedThreadPool();")]),s._v("\n说明: 创建一个可缓存线程池，如果线程池长度超过处理需要，可灵活回收空闲线程，若无可回收，则新建线程.\n内部实现：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无界线程池")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("newCachedThreadPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronousQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("2. Executors.newFixedThreadPool(int);")]),s._v("\n说明: 创建一个定长线程池，可控制线程最大并发数，超出的线程会在队列中等待。\n内部实现：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 固定大小线程池")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" nThreads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nThreads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nThreads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("3. Executors.newSingleThreadExecutor();")]),s._v("\n说明:创建一个单线程化的线程池，它只会用唯一的工作线程来执行任务，保证所有任务按照顺序执行。\n内部实现：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单个后台线程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("newSingleThreadExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FinalizableDelegatedExecutorService")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("4. Executors.newScheduledThreadPool(int);")]),s._v("\n说明:创建一个定长线程池，支持定时及周期性任务执行。\n内部实现：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScheduledThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("corePoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"步入threadpoolexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步入threadpoolexecutor"}},[s._v("#")]),s._v(" 步入"),a("code",[s._v("ThreadPoolExecutor")])]),s._v(" "),a("ul",[a("li",[s._v("核心参数")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Java线程池的完整构造函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 线程池长期维持的线程数，即使线程处于Idle状态，也不会回收。")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 线程数的上限")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 超过corePoolSize的线程的idle时长，")]),s._v("\n                                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 时长的单位")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 任务的排队队列")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新线程的产生方式")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RejectedExecutionHandler")]),s._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拒绝策略")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("corePoolSize")]),s._v(" "),a("td",[s._v("核心线程数量，线程池维护线程的最少数量")])]),s._v(" "),a("tr",[a("td",[s._v("maximumPoolSize")]),s._v(" "),a("td",[s._v("线程池维护线程的最大数量")])]),s._v(" "),a("tr",[a("td",[s._v("keepAliveTime")]),s._v(" "),a("td",[s._v("线程池除核心线程外的其他线程的最长空闲时间，超过该时间的空闲线程会被销毁")])]),s._v(" "),a("tr",[a("td",[s._v("unit")]),s._v(" "),a("td",[s._v("keepAliveTime的单位，TimeUnit中的几个静态属性：NANOSECONDS、MICROSECONDS、MILLISECONDS、SECONDS")])]),s._v(" "),a("tr",[a("td",[s._v("workQueue")]),s._v(" "),a("td",[s._v("线程池所使用的任务缓冲队列")])]),s._v(" "),a("tr",[a("td",[s._v("threadFactory")]),s._v(" "),a("td",[s._v("线程工厂，用于创建线程，一般用默认的即可")])]),s._v(" "),a("tr",[a("td",[s._v("handler")]),s._v(" "),a("td",[s._v("线程池对拒绝任务的处理策略")])])])]),s._v(" "),a("h4",{attrs:{id:"handler拒绝策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler拒绝策略"}},[s._v("#")]),s._v(" handler拒绝策略")]),s._v(" "),a("p",[s._v("当线程池任务处理不过来的时候，可以通过handler指定的策略进行处理，ThreadPoolExecutor提供了四种策略：")]),s._v(" "),a("ol",[a("li",[s._v("ThreadPoolExecutor.AbortPolicy:丢弃任务并抛出RejectedExecutionException异常；也是默认的处理方式。")]),s._v(" "),a("li",[s._v("ThreadPoolExecutor.DiscardPolicy：丢弃任务，但是不抛出异常。")]),s._v(" "),a("li",[s._v("ThreadPoolExecutor.DiscardOldestPolicy：丢弃队列最前面的任务，然后重新尝试执行任务（重复此过程）。")]),s._v(" "),a("li",[s._v("ThreadPoolExecutor.CallerRunsPolicy：由调用线程处理该任务")])]),s._v(" "),a("p",[s._v("可以通过实现RejectedExecutionHandler接口自定义处理方式。")]),s._v(" "),a("h4",{attrs:{id:"workqueue任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workqueue任务队列"}},[s._v("#")]),s._v(" workQueue任务队列")]),s._v(" "),a("ol",[a("li",[s._v("ArrayBlockingQueue： 这是一个由数组实现的容量固定的有界阻塞队列。")]),s._v(" "),a("li",[s._v("SynchronousQueue： 没有容量，不能缓存数据；每个put必须等待一个take; offer()的时候如果没有另一个线程在poll()或者take()的话返回false。")]),s._v(" "),a("li",[s._v("LinkedBlockingQueue： 这是一个由单链表实现的默认×××的阻塞队列。LinkedBlockingQueue提供了一个可选有界的构造函数，而在未指明容量时，容量默认为Integer.MAX_VALUE。")])]),s._v(" "),a("h3",{attrs:{id:"线程池的工作顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的工作顺序"}},[s._v("#")]),s._v(" 线程池的工作顺序")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("corePoolSize ->  workQueue 任务队列 -> maximumPoolSize -> handler 拒绝策略")]),s._v(" "),a("p",[s._v("跟银行类似：有2个窗口（"),a("code",[s._v("corePoolSize")]),s._v("）办理业务，有人来了就先到候客区（"),a("code",[s._v("workQueue")]),s._v("）等着，候客区如果满了就再多开几个窗口（"),a("code",[s._v("maximumPoolSize")]),s._v("）办理业务，如果候客区和能开的窗口都满了，那保安就拒绝（"),a("code",[s._v("handler")]),s._v("）别人再进入银行。业务办理的差不多了，多开的窗口等待一定时间（"),a("code",[s._v("keepAliveTime")]),s._v(" ）还没有人办理业务，那就把它关了吧浪费。")])])]),s._v(" "),a("h3",{attrs:{id:"executors弊端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executors弊端"}},[s._v("#")]),s._v(" Executors弊端")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("FixedThreadPool 和 SingleThreadPool:")])]),s._v(" "),a("p",[s._v("允许的请求队列长度为 Integer.MAX_VALUE，可能会堆积大量的请求，从而导致 OOM。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("CachedThreadPool 和 ScheduledThreadPool:")])]),s._v(" "),a("p",[s._v("允许的创建线程数量为 Integer.MAX_VALUE， 可能会创建大量的线程，从而导致 OOM。")])])]),s._v(" "),a("h3",{attrs:{id:"正确的使用线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确的使用线程池"}},[s._v("#")]),s._v(" 正确的使用线程池")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回可用处理器的Java虚拟机的数量(获取本机cpu核心数)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" poolSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRuntime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("availableProcessors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用有界队列，避免OOM")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定拒绝策略")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RejectedExecutionHandler")]),s._v(" policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DiscardPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//自定义的线程池")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" executorService "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("poolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" poolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("policy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"线程超时时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程超时时间"}},[s._v("#")]),s._v(" 线程超时时间")]),s._v(" "),a("ul",[a("li",[s._v("单个任务的超时时间")])]),s._v(" "),a("p",[a("code",[s._v("V Future.get(long timeout, TimeUnit unit)")]),s._v("方法可以指定等待的超时时间，超时未完成会抛出"),a("code",[s._v("TimeoutException")]),s._v("。")]),s._v(" "),a("ul",[a("li",[s._v("多个任务的超时时间")])]),s._v(" "),a("p",[s._v("等待多个任务完成，并设置最大等待时间，可以通过"),a("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/CountDownLatch.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CountDownLatch"),a("OutboundLink")],1),s._v("完成：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("testLatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" executorService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      \n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CountDownLatch")]),s._v(" latch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CountDownLatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),s._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          executorService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("submit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                      r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                      latch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("countDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// countDown")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      latch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("await")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定超时时间")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);