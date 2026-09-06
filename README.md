# Cloak

![logo](src-tauri/icons/128x128.png)

Cloak : a Client for clash-rs

---

## 简介

Cloak 是一个基于 [clash-rs](https://github.com/Dreamacro/clash) 的跨平台客户端，使用 [Tauri](https://tauri.app/)、[Vue 3](https://vuejs.org/)、[Vite](https://vitejs.dev/)、[PrimeVue](https://www.primefaces.org/primevue/) 构建，界面现代，性能优异。

## 技术栈

- Rust (Tauri 后端)
- Vue 3 (前端框架)
- Vite (前端构建工具)
- PrimeVue (UI 组件库)

## 安装依赖

```bash
# 安装前端依赖
npm install
# 或
yarn install

# 安装 Rust 依赖
cd src-tauri
cargo build
```

## 开发模式

```bash
# 启动前端开发服务器
npm run dev

# 启动 Tauri 开发模式
npm run tauri dev
```

## 构建发布版

```bash
npm run build
npm run tauri build
```

## 目录结构

```
Cloak/
├── src-tauri/      # Tauri Rust 后端
├── src/            # Vue 前端源码
├── public/         # 静态资源
├── package.json    # 前端依赖
├── tauri.conf.json # Tauri 配置
└── README.md
```

## 许可证

MIT

