# 🎨 @refinist/tw4-config

[![npm](https://img.shields.io/npm/v/@refinist/tw4-config.svg?labelColor=00bcff&color=000000)](https://npmjs.com/package/@refinist/tw4-config) [![size](https://img.badgesize.io/https://unpkg.com/@refinist/tw4-config?compression=gzip&labelColor=00bcff&color=000000)](https://unpkg.com/@refinist/tw4-config)

Tailwind CSS v4 配置，提供开箱即用的移动端和现代 Web 开发解决方案。

> [English Documentation](./README.md) | 中文文档

## ✨ 特性

### 🚫 1. 移除 Tailwind CSS Preflight

默认移除了 Tailwind 的 Preflight 样式重置，只引入了 `theme.css` 和 `utilities.css`，避免与现有项目样式冲突。

### 📱 2. 移动端安全区域支持

提供完整的 safe-area-inset-bottom 解决方案，兼容 Android 和 iOS 设备：

**🔧 基础类：**

- `saib-pb` - 底部安全区域内边距
- `saib-mb` - 底部安全区域外边距
- `saib-b` - 底部安全区域定位距离

**⚡ 动态类（支持任意值和裸值）：**

- `saib-pb-*` - 底部内边距 + 安全区域，如`saib-pb-2`(`padding-bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-pb-[24px]`
- `saib-mb-*` - 底部外边距 + 安全区域，如`saib-mb-2`(`margin-bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-mb-[24px]`
- `saib-b-*` - 底部定位 + 安全区域，如`saib-b-2`(`bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-b-[24px]`

```html
<!-- 基础使用 -->
<div class="saib-pb-2">底部内边距 8px + 安全区域</div>
<div class="saib-mb-2">底部外边距 8px + 安全区域</div>
<div class="fixed saib-b-2">底部定位 8px + 安全区域</div>
```

### 🔄 3. 增强的 flex-1 类

改进了 `flex-1` 类的实现，解决了内部内容宽度/高度过宽导致容器被撑开的问题：

```css
.flex-1 {
  flex: 1;
  min-width: 0; /* 防止水平方向内容撑开 */
}

.flex-col > .flex-1 {
  min-width: auto;
  min-height: 0; /* 防止垂直方向内容撑开 */
}
```

### ✂️ 4. 文本省略号工具类

提供开箱即用的单行文本省略功能：

```html
<div class="text-overflow-ellipsis">
  这是一段很长的文本，超出部分会显示省略号...
</div>
```

### 💡 更多想法，正在路上...

## 📦 安装

```bash
# npm
npm install @refinist/tw4-config

# pnpm
pnpm install @refinist/tw4-config

# yarn
yarn add @refinist/tw4-config

# bun
bun add @refinist/tw4-config
```

## 🚀 使用

### 在 CSS 文件中引入

```css
@import '@refinist/tw4-config';
```

### 在 TypeScript/JavaScript 文件中引入

```typescript
// main.ts
import '@refinist/tw4-config';

// 你的其他代码
```

## 🌍 兼容性说明

- ✅ 安全区域功能兼容支持 `constant()` 和 `env()` 的现代浏览器
- 🤖 Android 设备无安全区域时会使用 0.1px 的默认值确保计算正确
- 🔧 所有功能都基于现代 CSS 特性，建议在支持 CSS 自定义属性的浏览器中使用

## 📄 License

[MIT](./LICENSE)

Copyright (c) 2025-present, Zhifeng (Jeff) Wang
