# Cloak

[English](README.md) · 简体中文

一款面向 Apple 平台（macOS / iOS / tvOS）的个人原生规则代理客户端，改编自 [TokenPLS/Hako-Client](https://github.com/TokenPLS/Hako-Client)（原名 “Clash for Apple Platforms”），并更名为 **Cloak**。

> **Fork 声明** · 本仓库是 [TokenPLS/Hako-Client](https://github.com/TokenPLS/Hako-Client) 的 **fork**，仅供个人使用。产品更名为 **Cloak**，并使用维护者自己的 Apple 开发者账号构建与签名。为兼容既有订阅与配置导入，配置格式与 URL scheme（`clash`、`clashmeta`、`flclash`、`hako`）保持与上游一致。本 fork 已移除上游的应用商店/官方网站等宣传内容。

## 组件

客户端运行于 [Hako 内核](https://github.com/TokenPLS/Hako)之上，桥接代码来自 [Hako-Adapter](https://github.com/TokenPLS/Hako-Adapter)。二者均为独立仓库，这里使用的源码提交固定在 [`Dependencies.lock.json`](Dependencies.lock.json) 中。

| 目录 | 内容 |
| --- | --- |
| `apple/HakoClient` | 各平台应用、扩展与 XcodeGen 工程配置 |
| `apple/HakoClientKit` | 共享配置与档案模型 |
| `apple/HakoClientUI` | 共享界面组件 |
| `apple/HakoMacClient` | macOS 组件 |

## 从源码构建（macOS）

### 环境要求

- macOS、Xcode 26.6，以及 iOS、macOS、tvOS SDK。
- 可在命令行使用的 XcodeGen 和 Git。
- 启用自动工具链选择的 Go，或安装固定内核绑定模块所选择的 Go 1.26.6 工具链。
- Python 3 和 PyYAML。

### 准备工程

```sh
git clone git@github.com:wflixu/Cloak.git
cd Cloak
python3 -m venv .build/python-env
source .build/python-env/bin/activate
python3 -m pip install PyYAML
python3 scripts/bootstrap.py
python3 scripts/configure.py
```

首次准备依赖时会获取固定提交的内核与 Adapter 源码，安装固定版本的 gomobile 工具，并构建五切片 SDK。此过程需要网络，可能耗时数分钟。配置脚本随后生成 Xcode 工程。（`.build/` 构建缓存不入 git，由 `bootstrap.py` 生成。）

打开 `apple/HakoClient/HakoClient.xcodeproj`，选择相应构建方案：

| 平台 | 构建方案 |
| --- | --- |
| Mac | `HakoMac` |
| iPhone / iPad | `HakoClient` |
| Apple TV | `HakoTV` |

不签名编译 iOS 模拟器版本：

```sh
xcodebuild -project apple/HakoClient/HakoClient.xcodeproj \
  -scheme HakoClient -configuration Release \
  -destination 'generic/platform=iOS Simulator' CODE_SIGNING_ALLOWED=NO build
```

### 签名自己的构建

本仓库已按维护者自己的 Bundle ID 前缀（`cn.wflixu.cloak`）与 Apple Developer Team 配置。若要以你自己的身份构建：

```sh
python3 scripts/configure.py --bundle-base org.yourname.cloak --team YOURTEAMID
```

随后在 Xcode 中为应用和扩展配置签名与所需能力（Network Extensions、App Groups，以及实际使用的 iCloud 能力）。仓库不包含证书或描述文件；无签名构建只验证编译。

## 上游与反馈

- 内核问题请提交到 [Hako](https://github.com/TokenPLS/Hako/issues)；数据包桥接与扩展生命周期问题请提交到 [Hako-Adapter](https://github.com/TokenPLS/Hako-Adapter/issues)。
- 本 fork 特有的应用问题：在本仓库提交 issue。

## 许可证

[GPL-3.0](LICENSE)，继承自上游。第三方资源的许可证随资源保留。
