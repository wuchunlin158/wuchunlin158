(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{460:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx"),s._v(" "),a("p",[s._v("个人看完傲丙的redis系列最后做的总结，不得不说他redis系列写的确实不错。")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#redis基础"}},[s._v("Redis基础")]),a("ul",[a("li",[a("a",{attrs:{href:"#使用场景"}},[s._v("使用场景")])]),a("li",[a("a",{attrs:{href:"#优缺点"}},[s._v("优缺点")])]),a("li",[a("a",{attrs:{href:"#基本数据结构"}},[s._v("基本数据结构")])]),a("li",[a("a",{attrs:{href:"#持久化"}},[s._v("持久化")])])])]),a("li",[a("a",{attrs:{href:"#缓存击穿、雪崩、穿透"}},[s._v("缓存击穿、雪崩、穿透")]),a("ul",[a("li",[a("a",{attrs:{href:"#雪崩"}},[s._v("雪崩")])]),a("li",[a("a",{attrs:{href:"#击穿"}},[s._v("击穿")])]),a("li",[a("a",{attrs:{href:"#穿透"}},[s._v("穿透")])])])]),a("li",[a("a",{attrs:{href:"#redis集群"}},[s._v("redis集群")]),a("ul",[a("li",[a("a",{attrs:{href:"#哨兵"}},[s._v("哨兵")])]),a("li",[a("a",{attrs:{href:"#主从同步"}},[s._v("主从同步")])]),a("li",[a("a",{attrs:{href:"#redis主从、集群、哨兵搭建"}},[s._v("redis主从、集群、哨兵搭建")])])])]),a("li",[a("a",{attrs:{href:"#分布式锁（并发竞争、读写一致性）"}},[s._v("分布式锁（并发竞争、读写一致性）")])]),a("li",[a("a",{attrs:{href:"#内存淘汰机制"}},[s._v("内存淘汰机制")]),a("ul",[a("li",[a("a",{attrs:{href:"#redis过期策略"}},[s._v("redis过期策略")])]),a("li",[a("a",{attrs:{href:"#定期没删，我也没查询（惰性没删），那可咋整？"}},[s._v("定期没删，我也没查询（惰性没删），那可咋整？")])])])]),a("li",[a("a",{attrs:{href:"#redis解决"}},[s._v("redis解决")]),a("ul",[a("li",[a("a",{attrs:{href:"#事前"}},[s._v("事前")])]),a("li",[a("a",{attrs:{href:"#事中"}},[s._v("事中")])]),a("li",[a("a",{attrs:{href:"#事后"}},[s._v("事后")])])])]),a("li",[a("a",{attrs:{href:"#案例"}},[s._v("案例")]),a("ul",[a("li",[a("a",{attrs:{href:"#秒杀"}},[s._v("秒杀")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"redis基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis基础"}},[s._v("#")]),s._v(" Redis基础")]),s._v(" "),a("p",[s._v("看我之前的这篇 - "),a("RouterLink",{attrs:{to:"/views/java/redis01.html"}},[s._v("传送门")])],1),s._v(" "),a("h3",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("ul",[a("li",[s._v("缓存 替数据库分担压力\n微博那种不断下拉分页，点赞\n单点登陆\n分布式锁")])]),s._v(" "),a("h3",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[s._v("#")]),s._v(" 优缺点")]),s._v(" "),a("ol",[a("li",[s._v("基于内存的单线程非关系型数据库，由于在内存中完成操作，所以速度非常快，每秒十万+")]),s._v(" "),a("li",[s._v("支持持久化")]),s._v(" "),a("li",[s._v("高可用")])]),s._v(" "),a("h3",{attrs:{id:"基本数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据结构"}},[s._v("#")]),s._v(" 基本数据结构")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("String")]),s._v(" "),a("ul",[a("li",[s._v("缓存功能：String字符串是最常用的数据类型，不仅仅是Redis，各个语言都是最基本类型，因此，利用Redis作为缓存，配合其它数据库作为存储层，利用Redis支持高并发的特点，可以大大加快系统的读写速度、以及降低后端数据库的压力。")]),s._v(" "),a("li",[s._v("计数器：许多系统都会使用Redis作为系统的实时计数器，可以快速实现计数和查询的功能。而且最终的数据结果可以按照特定的时间落地到数据库或者其它存储介质当中进行永久保存")]),s._v(" "),a("li",[s._v("共享用户Session：用户重新刷新一次界面，可能需要访问一下数据进行重新登录，或者访问页面缓存Cookie，但是可以利用Redis将用户的Session集中管理，在这种模式只需要保证Redis的高可用，每次用户Session的更新和获取都可以快速完成。大大提高效率。")])])]),s._v(" "),a("li",[a("p",[s._v("Hash")]),s._v(" "),a("ul",[a("li",[s._v("这个是类似 Map 的一种结构，这个一般就是可以将结构化的数据，比如一个对象（前提是这个对象没嵌套其他的对象）给缓存在 Redis 里，然后每次读写缓存的时候，可以就操作 Hash 里的某个字段。（用的少）")])])]),s._v(" "),a("li",[a("p",[s._v("List")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("比如可以通过 List 存储一些列表型的数据结构，类似粉丝列表、文章的评论列表之类的东西。")]),s._v(" "),a("ul",[a("li",[s._v("lpush key v1 v2 v3\t在key中依次插入3个值,每次插入都放在最左边")]),s._v(" "),a("li",[s._v("lrange key start(起始下标) stop(结束下标)\t取出key中从下标start到stop(包含)的值")]),s._v(" "),a("li",[s._v("lrange list (当前页-1)rows pagerows-1\t分页")])])])])]),s._v(" "),a("li",[a("p",[s._v("Set")]),s._v(" "),a("ul",[a("li",[s._v("基于 Set 玩儿交集、并集、差集的操作，比如交集吧，我们可以把两个人的好友列表整一个交集，看看俩人的共同好友是谁？对吧。")])])]),s._v(" "),a("li",[a("p",[s._v("SortedSet")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("去重且排序")]),s._v(" "),a("ul",[a("li",[s._v("排行榜：有序集合经典使用场景。例如视频网站需要对用户上传的视频做排行榜，榜单维护可能是多方面：按照时间、按照播放量、按照获得的赞数等。")]),s._v(" "),a("li",[s._v("用Sorted Sets来做带权重的队列，比如普通消息的score为1，重要消息的score为2，然后工作线程可以选择按score的倒序来获取工作任务。让重要的任务优先执行。")])])])])])]),s._v(" "),a("h3",{attrs:{id:"持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[s._v("#")]),s._v(" 持久化")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("RDB做镜像全量持久化，AOF做增量持久化。")]),s._v(" 因为RDB会耗费较长时间，不够实时，在停机的时候会导致大量丢失数据，所以需要AOF来配合使用。在redis实例重启时，会使用RDB持久化文件重新构建内存，再使用AOF重放近期的操作指令来实现完整恢复重启之前的状态。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("RDB")]),s._v(" "),a("ul",[a("li",[s._v("fork和cow：fork是指redis通过创建子进程来进行RDB操作，采用二进制压缩存储。cow指的是copy on write，子进程创建后，父子进程共享数据段，父进程继续提供读写服务，写脏的页面数据会逐渐和子进程分离开来。")]),s._v(" "),a("li",[s._v("因为是子进程完成的，所以效率高一点，但是生成一次RDB快照文件需要花费的时间较长。")])])]),s._v(" "),a("li",[a("p",[s._v("AOF")]),s._v(" "),a("ul",[a("li",[s._v("效率稍慢，类似于我们用Java流写数据时往文件上不断追加redis操作命令，AOF的执行时间通过配置redis来实现，一般是1秒")]),s._v(" "),a("li",[s._v("效率稍慢，RDB五分钟一次生成快照，但是AOF是一秒一次去通过一个后台的线程fsync操作，那最多丢这一秒的数据。")])])])])]),s._v(" "),a("li",[a("p",[s._v("不过Redis本身的机制是 AOF持久化开启且存在AOF文件时，优先加载AOF文件；AOF关闭或者AOF文件不存在时，加载RDB文件；加载AOF/RDB文件城后，Redis启动成功；AOF/RDB文件存在错误时，Redis启动失败并打印错误信息。")])])]),s._v(" "),a("h2",{attrs:{id:"缓存击穿、雪崩、穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿、雪崩、穿透"}},[s._v("#")]),s._v(" 缓存击穿、雪崩、穿透")]),s._v(" "),a("h3",{attrs:{id:"雪崩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雪崩"}},[s._v("#")]),s._v(" 雪崩")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("原因")]),s._v(" "),a("ul",[a("li",[s._v("如果大量的key过期时间设置的过于集中，到过期的那个时间点，缓存失效，同时又有巨大访问量，没有缓存直接到DB肯定扛不住，这不就炸了吗，这就是缓存雪崩导致的\n【大面积的缓存失效，打崩了DB】")])])]),s._v(" "),a("li",[a("p",[s._v("场景")]),s._v(" "),a("ul",[a("li",[s._v("目前电商首页以及热点数据经常会使用定时任务刷新缓存，可能大量的数据失效时间都十分集中，如果失效时间一样，又刚好在失效的时间点大量用户涌入，就有可能造成缓存雪崩")])])]),s._v(" "),a("li",[a("p",[s._v("解决方法")]),s._v(" "),a("ul",[a("li",[a("ol",[a("li",[s._v("我们一般在过期时间上加一个随机值，使得过期时间分散一些（推荐）")])]),s._v(" "),a("ul",[a("li",[s._v("setRedis（Key，value，time + Math.random() * 10000）；")])])]),s._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[s._v("如果Redis是集群部署，将热点数据均匀分布在不同的Redis库中也能避免全部失效的问题，")])])]),s._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[s._v("或者设置热点数据永远不过期，有更新操作就更新缓存就好了（比如运维更新了首页商品，那你刷下缓存就完事了，不要设置过期时间），电商首页的数据也可以用这个操作，保险。")])])])])])]),s._v(" "),a("h3",{attrs:{id:"击穿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#击穿"}},[s._v("#")]),s._v(" 击穿")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("原因")]),s._v(" "),a("ul",[a("li",[s._v("和缓存雪崩有点像，但又不大一样，缓存雪崩是大面积缓存失效导致的，而缓存击穿就像是一个key失效，但同时又面临着巨大的访问量，直接打到DB也挂了。\n【并发量大的单个缓存失效，打崩DB】")])])]),s._v(" "),a("li",[a("p",[s._v("解决方法")]),s._v(" "),a("ul",[a("li",[s._v("设置热点数据永远不过期")])])])]),s._v(" "),a("h3",{attrs:{id:"穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#穿透"}},[s._v("#")]),s._v(" 穿透")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("原因")]),s._v(" "),a("ul",[a("li",[s._v("访问缓存和DB中都没有的数据，如id是 -1或者特别大的数据 的时候，攻击者并发高点就会使DB宕机的\n【绕过缓存，打崩DB】")])])]),s._v(" "),a("li",[a("p",[s._v("解决方法")]),s._v(" "),a("ul",[a("li",[s._v("从网管nignx开始配置，对同一ip每秒访问次数超过一定阈值的都拉黑")]),s._v(" "),a("li",[s._v("对访问参数做校验，规范key的命名，并且统一缓存查询和写入的入口。这样，在入口处，对key的规范进行检测。–这样保存恶意的key被拦截。")]),s._v(" "),a("li",[s._v("不管数据库中是否有数据，都在缓存中保存对应的key，值为空就行。–这样是为了避免数据库中没有这个数据，导致的平凡穿透缓存对数据库进行访问。")]),s._v(" "),a("li",[s._v("如果上面缓存的空值如果太多，也会导致内存耗尽。导致不必要的内存消耗。这样就要定期的清理空值的key。避免内存被恶意占满，导致正常的功能的使用。")])])])]),s._v(" "),a("h2",{attrs:{id:"redis集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis集群"}},[s._v("#")]),s._v(" redis集群")]),s._v(" "),a("p",[s._v("我们用到了集群的部署方式也就是Redis cluster，并且是主从同步读写分离，类似Mysql的主从同步，Redis cluster 支撑 N 个 Redis master node，每个master node都可以挂载多个 slave node。")]),s._v(" "),a("p",[s._v("主节点负责写，主从同步，从负责读")]),s._v(" "),a("p",[s._v("这样整个 Redis 就可以横向扩容了。如果你要支撑更大数据量的缓存，那就横向扩容更多的 master 节点，每个 master 节点就能存放更多的数据了。")]),s._v(" "),a("h3",{attrs:{id:"哨兵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵"}},[s._v("#")]),s._v(" 哨兵")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("功能")]),s._v(" "),a("ul",[a("li",[s._v("集群监控：负责监控 Redis master 和 slave 进程是否正常工作。")]),s._v(" "),a("li",[s._v("消息通知：如果某个 Redis 实例有故障，那么哨兵负责发送消息作为报警通知给管理员。")]),s._v(" "),a("li",[s._v("故障转移：如果 master node 挂掉了，会自动转移到 slave node 上。")]),s._v(" "),a("li",[s._v("配置中心：如果故障转移发生了，通知 client 客户端新的 master 地址。")])])]),s._v(" "),a("li",[a("p",[s._v("原理")]),s._v(" "),a("ul",[a("li",[s._v("一般最低是一主两从三哨兵，当主节点挂了时，哨兵投票选出一个（奇数个哨兵保证能选出一个）去执行故障转移")]),s._v(" "),a("li",[s._v("根据选主策略选出一个新的主节点，断开当前slave所有主从关系，启动时从从同步，升级为主节点，将剩余的从节点指向到新的主节点并通知客户端主节点已更换")])])]),s._v(" "),a("li",[a("p",[s._v("选主策略")]),s._v(" "),a("ul",[a("li",[s._v("slave 的 priority 设置的越低，优先级越高；")]),s._v(" "),a("li",[s._v("同等情况下，slave 复制的数据越多优先级越高；")]),s._v(" "),a("li",[s._v("相同的条件下 runid 越小越容易被选中。")])])])]),s._v(" "),a("h3",{attrs:{id:"主从同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从同步"}},[s._v("#")]),s._v(" 主从同步")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("redis同步机制")]),s._v(" "),a("ul",[a("li",[s._v("Redis可以使用主从同步，从从同步。")])])])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("启动一台slave 的时候，他会发送一个psync命令给master")])]),s._v(" "),a("li",[a("p",[s._v("第一次同步时，主节点做一次bgsave，并同时将后续修改操作记录到内存buffer，待完成后将RDB文件全量同步到复制节点，复制节点接受完成后将RDB镜像加载到内存。加载完成后，再通知主节点。")])]),s._v(" "),a("li",[a("p",[s._v("后续的buffer增量数据通过AOF日志同步即可，有点类似数据库的binlog")]),s._v(" "),a("ul",[a("li",[s._v("1.编辑 vim /etc/redis/6379.conf")])]),s._v(" "),a("p",[s._v("slaveof 172.25.254.101 6379     #redis-master 的ip")])]),s._v(" "),a("li",[a("p",[s._v("重启 /etc/init.d/redis_6379 restart")])])]),s._v(" "),a("h3",{attrs:{id:"redis主从、集群、哨兵搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis主从、集群、哨兵搭建"}},[s._v("#")]),s._v(" redis主从、集群、哨兵搭建")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/xuwc/p/8900717.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"分布式锁（并发竞争、读写一致性）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁（并发竞争、读写一致性）"}},[s._v("#")]),s._v(" 分布式锁（并发竞争、读写一致性）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("先拿setnx来争抢锁，抢到之后，再用expire给锁加一个过期时间防止锁忘记了释放。\nset指令有非常复杂的参数，一般是同时把setnx和expire合成一条指令来用的！")])]),s._v(" "),a("li",[a("p",[s._v("代码")])])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * redis分布式锁\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisLockUtil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" LOCK_SUCCESS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" SET_IF_NOT_EXIST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" SET_WITH_EXPIRE_TIME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 尝试获取分布式锁\n     * @param jedis Redis客户端\n     * @param lockKey 锁\n     * @param requestId 请求标识\n     * @param expireTime 超期时间\n     * @return 是否获取成功\n       @description \n        我们加锁就一行代码：jedis.set(String key, String value, String nxxx, String expx, int time)，这个set()方法一共有五个形参：\n            第一个为key，我们使用key来当锁，因为key是唯一的。\n            第二个为value，我们传的是requestId，很多童鞋可能不明白，有key作为锁不就够了吗，为什么还要用到value？原因就是我们在上面讲到可靠性时，分布式锁要满足第四个条件解铃还须系铃人，通过给value赋值为requestId，我们就知道这把锁是哪个请求加的了，在解锁的时候就可以有依据。requestId可以使用UUID.randomUUID().toString()方法生成。\n            第三个为nxxx，这个参数我们填的是NX，意思是SET IF NOT EXIST，即当key不存在时，我们进行set操作；若key已经存在，则不做任何操作；\n            第四个为expx，这个参数我们传的是PX，意思是我们要给这个key加一个过期的设置，具体时间由第五个参数决定。\n            第五个为time，与第四个参数相呼应，代表key的过期时间。\n        总的来说，执行set()方法就只会导致两种结果：1. 当前没有锁（key不存在），那么就进行加锁操作，并对锁设置个有效期，同时value表示加锁的客户端。2. 已有锁存在，不做任何操作。\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tryGetDistributedLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jedis")]),s._v(" jedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" lockKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" expireTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lockKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SET_IF_NOT_EXIST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SET_WITH_EXPIRE_TIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" expireTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LOCK_SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 释放分布式锁\n     * @param jedis Redis客户端\n     * @param lockKey 锁\n     * @param requestId 请求标识\n     * @return 是否释放成功\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" RELEASE_SUCCESS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("releaseDistributedLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jedis")]),s._v(" jedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" lockKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("singletonList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lockKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("singletonList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RELEASE_SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br")])]),a("h2",{attrs:{id:"内存淘汰机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰机制"}},[s._v("#")]),s._v(" 内存淘汰机制")]),s._v(" "),a("h3",{attrs:{id:"redis过期策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis过期策略"}},[s._v("#")]),s._v(" redis过期策略")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("定期删除")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("定期好理解，默认100s就随机抽一些设置了过期时间的key，去检查是否过期，过期了就删了。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("为啥不扫描全部设置了过期时间的key呢？")]),s._v(" "),a("p",[s._v("假如Redis里面所有的key都有过期时间，都扫描一遍？那太恐怖了，而且我们线上基本上也都是会设置一定的过期时间的。全扫描跟你去查数据库不带where条件不走索引全表扫描一样，100s一次，Redis累都累死了。")])])])])])]),s._v(" "),a("li",[a("p",[s._v("惰性删除")]),s._v(" "),a("ul",[a("li",[s._v("定期删除肯定删不干净。\n惰性删除，见名知意，惰性嘛，我不主动删，我懒，我等你来查询了我看看你过期没，过期就删了还不给你返回，没过期该怎么样就怎么样。")])])])]),s._v(" "),a("h3",{attrs:{id:"定期没删，我也没查询（惰性没删），那可咋整？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定期没删，我也没查询（惰性没删），那可咋整？"}},[s._v("#")]),s._v(" 定期没删，我也没查询（惰性没删），那可咋整？")]),s._v(" "),a("p",[s._v("内存淘汰机制")]),s._v(" "),a("ul",[a("li",[s._v("allkeys-lru: 尝试回收最少使用的键（LRU），使得新添加的数据有空间存放。")]),s._v(" "),a("li",[s._v("volatile-lru: 尝试回收最少使用的键（LRU），但仅限于在过期集合的键,使得新添加的数据有空间存放。")]),s._v(" "),a("li",[s._v("allkeys-random: 回收随机的键使得新添加的数据有空间存放。")]),s._v(" "),a("li",[s._v("volatile-random: 回收随机的键使得新添加的数据有空间存放，但仅限于在过期集合的键。")])]),s._v(" "),a("h2",{attrs:{id:"redis解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis解决"}},[s._v("#")]),s._v(" redis解决")]),s._v(" "),a("h3",{attrs:{id:"事前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事前"}},[s._v("#")]),s._v(" 事前")]),s._v(" "),a("ul",[a("li",[s._v("redis高可用，主从+哨兵，redis cluster，避免全盘崩溃")])]),s._v(" "),a("h3",{attrs:{id:"事中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事中"}},[s._v("#")]),s._v(" 事中")]),s._v(" "),a("ul",[a("li",[s._v("Hystrix限流+降级，避免数据库炸裂")])]),s._v(" "),a("h3",{attrs:{id:"事后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事后"}},[s._v("#")]),s._v(" 事后")]),s._v(" "),a("ul",[a("li",[s._v("redis持久化，一旦重启自动恢复数据")])]),s._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[s._v("#")]),s._v(" 案例")]),s._v(" "),a("h3",{attrs:{id:"秒杀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#秒杀"}},[s._v("#")]),s._v(" 秒杀")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzAwNDA2OTM1Ng==&mid=305657212&idx=3&sn=f6a1a6f39257b8749488d475d130f5be&chksm=0cf2d7ff3b855ee9c87e266cd193ef875eaf7ec8b6a9a39699bfe5b29adb729e50919d63b631&scene=18&xtrack=1&key=ebe57afce2f3a109e9797ed19e614ae0a4fae7ab92283105f2dab753cbe327ca1a41e1fd13a80058781edf1d44aae8b555259116a54400ac75761af7ca98f0315133e7f7b81d482d6ac49774f6eeb0e1&ascene=1&uin=MjA2MzU5OTU2Mw%3D%3D&devicetype=Windows+10&version=62070155&lang=zh_CN&pass_ticket=yMrUA%2FpkdEoj2uvU95vik7jUhd7bqgtcnVWYXE9vArgiCxFDX9Gwpt60%2FG1W3Epb",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"/znote/img/redis/redis02.png",alt:""}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);