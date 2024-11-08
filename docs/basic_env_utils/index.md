# 一些常用的环境工具 有助于快速安装所需开发开发环境

## 跨平台、可拓展的版本管理器 vfox

[vfox文档网址](https://vfox.lhan.me/zh-hans/guides/quick-start.html)

将指定的 SDK 版本安装到您的计算机并缓存以供将来使用。

```shell
vfox install <sdk-name>@<version>

vfox i <sdk-name>@<version>
```

## 全平台通用换源工具与框架 chsrc

[chsrc文档网址](https://gitee.com/RubyMetric/chsrc)

```
使用: chsrc <command> [options] [target] [mirror]

help                      # 打印此帮助，或 h, -h, --help
issue                     # 查看相关issue

list (或 ls, 或 l)        # 列出可用镜像源，和可换源目标
list mirror/target        # 列出可用镜像源，或可换源目标
list os/lang/ware         # 列出可换源的操作系统/编程语言/软件

measure <target>          # 对该目标所有源测速
cesu    <target>

list <target>             # 查看该目标可用源与支持功能
get  <target>             # 查看该目标当前源的使用情况

set  <target>             # 换源，自动测速后挑选最快源
set  <target>  first      # 换源，使用维护团队测速第一的源
set  <target> <mirror>    # 换源，指定使用某镜像站 (通过list命令查看)
set  <target> https://url # 换源，用户自定义源URL
reset <target>            # 重置，使用上游默认使用的源

选项:
-dry                      # Dry Run，模拟换源过程，命令仅打印并不运行
-local                    # 仅对某项目而非全局换源 (仅部分软件如bundler,pdm支持)
-ipv6                     # 使用IPv6测速
-en(glish)                # 使用英文输出
-no-color                 # 无颜色输出
```