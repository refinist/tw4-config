# 🎨 @refinist/tw4-config

[![npm](https://img.shields.io/npm/v/@refinist/tw4-config.svg?labelColor=00bcff&color=000000)](https://npmjs.com/package/@refinist/tw4-config) [![size](https://img.badgesize.io/https://unpkg.com/@refinist/tw4-config?compression=gzip&labelColor=00bcff&color=000000)](https://unpkg.com/@refinist/tw4-config)

Tailwind CSS v4 configuration, providing out-of-the-box mobile and modern web development solutions.

> English Documentation | [中文文档](./README.zh-CN.md)

## ✨ Features

### 🚫 1. Removed Tailwind CSS Preflight

By default, Tailwind's Preflight styles reset has been removed, only importing `theme.css` and `utilities.css` to avoid conflicts with existing project styles.

### 📱 2. Mobile Safe Area Support

Provides complete safe-area-inset-bottom solutions, compatible with both Android and iOS devices:

**🔧 Base Classes:**

- `saib-pb` - Bottom safe area padding
- `saib-mb` - Bottom safe area margin
- `saib-b` - Bottom safe area positioning distance

**⚡ Dynamic Classes (supports arbitrary values and preset values):**

- `saib-pb-*` - Bottom padding + safe area, e.g., `saib-pb-2` (`padding-bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-pb-[24px]`
- `saib-mb-*` - Bottom margin + safe area, e.g., `saib-mb-2` (`margin-bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-mb-[24px]`
- `saib-b-*` - Bottom positioning + safe area, e.g., `saib-b-2` (`bottom: calc(var(--saib-spacing) * 2) /* 0.5rem = 8px */`), `saib-b-[24px]`

```html
<!-- Basic usage -->
<div class="saib-pb-2">Bottom padding 2px + safe area</div>
<div class="saib-mb-2">Bottom margin 2px + safe area</div>
<div class="fixed saib-b-2">Bottom positioning 2px + safe area</div>
```

### 🔄 3. Enhanced Flex-1 Class

Improved the implementation of the `flex-1` class to solve the issue where internal content width/height being too wide would stretch the container:

```css
.flex-1 {
  flex: 1;
  min-width: 0; /* Prevents horizontal content overflow */
}

.flex-col > .flex-1 {
  min-width: auto;
  min-height: 0; /* Prevents vertical content overflow */
}
```

### ✂️ 4. Text Ellipsis Utility Class

Provides out-of-the-box single-line text ellipsis functionality:

```html
<div class="text-overflow-ellipsis">
  This is a very long text that will show ellipsis when it overflows...
</div>
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

## 🚀 Usage

```css
@import '@refinist/tw4-config';
```

Since many UI frameworks have their own `reset` styles, `Preflight` is not included by default. If you need to use `Preflight`, please import it yourself: 👇

```css
@import '@refinist/tw4-config';
@import 'tailwindcss/preflight.css' layer(base);
```

## 🌍 Compatibility

- ✅ Safe area features are compatible with modern browsers supporting `constant()` and `env()`
- 🤖 Android devices without safe area will use a default value of 0.1px to ensure correct calculations
- 🔧 All features are based on modern CSS features, recommended for use in browsers supporting CSS custom properties

## 📄 License

[MIT](./LICENSE)

Copyright (c) 2025-present, Zhifeng (Jeff) Wang
