# EVAPFit 建站经验汇总

## 1. 架构决策

### Astro v7 + Tailwind v4 静态站
- `output: 'static'`，GitHub Push → Hostinger 自动部署
- Tailwind v4 用 `@tailwindcss/vite` 插件，不需要 PostCSS

### 内容管理：MDX 单源，不用双重数据
- 产品数据源 → `src/content/products/*.mdx`（66 个文件）
- `getCollection('products')` 自动加载，类型安全
- 不要同时维护 `products.ts` 数组 + MDX，容易不同步
- 新增产品：复制最近 MDX → 改 frontmatter → 保存即生效

### 目录结构统一
```
src/content/
├── products/    ← 产品 MDX
├── post/        ← 博客 MDX
└── guides/      ← 指南 MDX
```
三个内容集合平级，不要分散到 `src/data/`。

---

## 2. 路由设计

### 四层 URL 结构
```
/[system]/[area]/[type]/[product]/
```
三个 slug 分别关联：
- `systemSlug` → `systems.ts` 中 7 个系统
- `areaSlug` → 系统下的子区域
- `productTypeSlug` → `product-helpers.ts` 中 `typeNameMap`

### 路由冲突处理
- Blog 路由 `[...slug]` 会吃掉其他路由 → 先禁用 blog
- 重定向旧路由：`/products/[slug]/` → 301 → 新四层 URL

---

## 3. 表单系统

### Formspree → 自托管 PHP
- **不使用第三方表单服务**，用 PHP 端点自托管
- `public/api/submit-inquiry.php` 随静态文件一起部署
- Hostinger 支持 PHP `mail()`，无需额外配置

### 反垃圾 5 层
| 层 | 机制 | 端 |
|---|---|---|
| 1 | Honeypot 隐藏字段 | JS + PHP 双重 |
| 2 | 速度检测（< 3s 拦截） | JS + PHP 双重 |
| 3 | 链接检测（≥ 4 URL 拦截） | JS + PHP 双重 |
| 4 | 数学验证 | JS + PHP 双重 |
| 5 | 频率限制（5/小时，20/天） | JS + PHP 双重 |

### 询盘篮
- localStorage + CustomEvent `"inquiry-basket:update"`
- 全局生效，Header 徽章自动更新

---

## 4. CSS / 部署陷阱

### Tailwind v4 + astro-compress 冲突
- **`astro-compress` 的 CSS 压缩会删除 Tailwind v4 响应式媒体查询**
- 修复：`CSS: false`（关闭 CSS 压缩），Vite 自带的压缩足够

### 缓存问题
- 静态资源带 `immutable` 缓存头
- 强制刷新：在 `tailwind.css` 加注释改变文件 hash

### Hero Banner 响应式
- 深色背景 banner 用 `<img w-full h-auto>`，不加 CSS 约束
- **手机上隐藏 banner**，改用白底文字版（`hidden sm:block` / `xl:hidden` 分离）
- Banner 断点：`xl:`（1280px）保证图片高度够放文字
- 图片规格：1600×280px，深色底，左半区纯色给文字，右半区产品

---

## 5. SEO 必备项

| 项 | 状态 | 实现 |
|---|---|---|
| Canonical URLs | ✅ | `Metadata.astro` |
| Open Graph / Twitter Card | ✅ | `Metadata.astro` |
| Sitemap + robots.txt | ✅ | `@astrojs/sitemap` |
| JSON-LD (Organization/Product/Article/BreadcrumbList) | ✅ | `StructuredData.astro` |
| 图片优化 | ✅ | `Image.astro` + Sharp + CDN |
| Zod 校验 | ✅ | `content.config.ts` |
| robots.txt 域名 | ✅ | 部署后记得改 |

---

## 6. 导航设计

- Blog 放底部导航，不占顶部位置
- 桌面导航间距用 `px-2.5 xl:px-4` 节省空间
- "Inquiry List" 文字 `lg:inline`（1024px 以下只显示图标）
- 导航动态生成：`systemsData.map()` → 自动下拉菜单

---

## 7. 文件清单（关键文件）

```
src/
├── content.config.ts          ← Zod 校验 + 内容集合
├── data/
│   ├── systems.ts             ← 7 大系统 + heroImage
│   ├── inquiry-types.ts       ← TypeScript 接口
│   └── product-helpers.ts     ← 查询 + 过滤 + typeNameMap
├── components/
│   ├── common/StructuredData.astro  ← JSON-LD SEO
│   ├── common/Metadata.astro        ← SEO meta
│   └── inquiry/ProductCard.astro    ← 产品卡片
├── pages/
│   ├── [system]/index.astro   ← 系统页（全产品 + banner）
│   ├── [system]/[area]/index.astro
│   ├── [system]/[area]/[type]/index.astro
│   ├── [system]/[area]/[type]/[product]/index.astro
│   ├── inquiry/index.astro    ← RFQ 表单
│   └── compatibility/         ← 兼容性筛选
└── public/api/submit-inquiry.php  ← 自托管表单端点
```
