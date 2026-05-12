# 🎨 @refinist/tw4-config

[![npm](https://img.shields.io/npm/v/@refinist/tw4-config.svg?labelColor=00bcff&color=000000)](https://npmjs.com/package/@refinist/tw4-config) [![downloads/month](https://img.shields.io/npm/dm/@refinist/tw4-config.svg?colorA=00bcff&colorB=000000)](https://npmjs.com/package/@refinist/tw4-config) [![size](https://img.badgesize.io/https://unpkg.com/@refinist/tw4-config?compression=gzip&labelColor=00bcff&color=000000)](https://unpkg.com/@refinist/tw4-config)

[English Documentation](./README.md) | 中文文档

Tailwind CSS v4 utility preset，用于移动端和现代 Web 开发。

> [!TIP]
> 使用这个库时，请先到官网安装 [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)

## ✨ 特性

### 🔄 1. 增强的 flex-1 类

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

如果是基于 `weapp-tailwindcss` 的 uni-app/taro 微信小程序项目，还需要安装 `weapp-tailwindcss`：

```bash
pnpm install weapp-tailwindcss
```

## 🚀 使用

### Web / H5

先引入 Tailwind CSS，再引入本包：

```css
/* app.css */
@import 'tailwindcss';
@import '@refinist/tw4-config';
```

如果不想使用 Tailwind Preflight，可以使用 Tailwind 的拆分入口，并省略 `preflight.css`：

```css
/* app.css */
@layer theme, base, components, utilities;
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/utilities.css' layer(utilities);
@import '@refinist/tw4-config';
```

### 微信小程序（如 uni-app）

先引入 weapp-tailwindcss（weapp-tailwindcss 更多用法请查阅 https://tw.icebreaker.top）再引入专门的 `weapp-tailwindcss` 入口：

```css
/* app.css */
@import 'weapp-tailwindcss/index.css';
@import '@refinist/tw4-config/weapp-tailwindcss';
```

```js
// vite.config.ts
import path from 'node:path';
import uni from '@dcloudio/vite-plugin-uni';
import tailwindcss from '@tailwindcss/postcss';
import { defineConfig } from 'vite';
import { WeappTailwindcss } from 'weapp-tailwindcss/vite';

export default defineConfig(() => {
  const isH5 = process.env.UNI_PLATFORM === 'h5';
  return {
    plugins: [
      uni(),
      WeappTailwindcss({
        disabled: isH5,
        rem2rpx: true,
        px2rpx: {
          rootValue: 1,
          minPixelValue: 2
        },
        cssPreflight: false,
        cssEntries: [path.resolve(import.meta.dirname, './src/app.css')]
      })
    ],
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    }
  };
});
```

## 🌍 兼容性说明

- ✅ 安全区域功能兼容支持 `constant()` 和 `env()` 的现代浏览器
- 🤖 Android 设备无安全区域时会使用 0.1px 的默认值确保计算正确
- 🔧 所有功能都基于现代 CSS 特性，建议在支持 CSS 自定义属性的浏览器中使用

## 📄 License

[MIT](./LICENSE)

Copyright (c) 2025-present, REFINIST
