# 🎨 @refinist/tw4-config

[![npm](https://img.shields.io/npm/v/@refinist/tw4-config.svg?labelColor=00bcff&color=000000)](https://npmjs.com/package/@refinist/tw4-config) [![downloads/month](https://img.shields.io/npm/dm/@refinist/tw4-config.svg?colorA=00bcff&colorB=000000)](https://npmjs.com/package/@refinist/tw4-config) [![size](https://img.badgesize.io/https://unpkg.com/@refinist/tw4-config?compression=gzip&labelColor=00bcff&color=000000)](https://unpkg.com/@refinist/tw4-config)

English Documentation | [中文文档](./README.zh-CN.md)

Tailwind CSS v4 utility preset for mobile and modern web development.

> [!TIP]
> Before using this library, please install [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) from the official website first.

## ✨ Features

### 🔄 1. Enhanced Flex-1 Class

Improves the implementation of the `flex-1` class, preventing oversized internal content width/height from stretching the container:

```css
.flex-1 {
  flex: 1;
  min-width: 0; /* Prevent horizontal content from stretching the container */
}

.flex-col > .flex-1 {
  min-width: auto;
  min-height: 0; /* Prevent vertical content from stretching the container */
}
```

### 📱 2. Mobile Safe Area Support

Provides a complete safe-area-inset-bottom solution, compatible with Android and iOS devices:

**🔧 Base Classes:**

- `saib-pb` - Bottom safe area padding
- `saib-mb` - Bottom safe area margin
- `saib-b` - Bottom safe area positioning distance

**⚡ Dynamic Classes (supports arbitrary values and bare values):**

- `saib-pb-*` - Bottom padding + safe area, e.g. `saib-pb-2` (`padding-bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-pb-[24px]`
- `saib-mb-*` - Bottom margin + safe area, e.g. `saib-mb-2` (`margin-bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-mb-[24px]`
- `saib-b-*` - Bottom positioning + safe area, e.g. `saib-b-2` (`bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-b-[24px]`

```html
<!-- Basic usage -->
<div class="saib-pb-2">Bottom padding 8px + safe area</div>
<div class="saib-mb-2">Bottom margin 8px + safe area</div>
<div class="fixed saib-b-2">Bottom positioning 8px + safe area</div>
```

### 💡 More ideas coming soon...

## 📦 Installation

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

For uni-app/taro WeChat Mini Program projects based on `weapp-tailwindcss`, install `weapp-tailwindcss` as well:

```bash
pnpm install weapp-tailwindcss
```

## 🚀 Usage

### Web / H5

Import Tailwind CSS first, then import this package:

```css
/* app.css */
@import 'tailwindcss';
@import '@refinist/tw4-config';
```

If you do not want to use Tailwind Preflight, use Tailwind's split entry and omit `preflight.css`:

```css
/* app.css */
@layer theme, base, components, utilities;
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/utilities.css' layer(utilities);
@import '@refinist/tw4-config';
```

### WeChat Mini Program (e.g. uni-app)

Import `weapp-tailwindcss` first (see https://tw.icebreaker.top for more `weapp-tailwindcss` usage), then import the dedicated `weapp-tailwindcss` entry:

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

## 🌍 Compatibility

- ✅ Safe area features are compatible with modern browsers supporting `constant()` and `env()`
- 🤖 Android devices without safe areas use a default value of 0.1px to ensure correct calculations
- 🔧 All features are based on modern CSS features and are recommended for browsers supporting CSS custom properties

## 📄 License

[MIT](./LICENSE)

Copyright (c) 2025-present, REFINIST
