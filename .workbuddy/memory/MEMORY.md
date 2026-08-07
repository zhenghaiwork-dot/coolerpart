# CoolerParts 项目长期记忆

## 项目定位
B2B 蒸发式冷风机配件询盘站（非电商）。客户多为懂行采购/维修人员，通过 Google SEO + 站内筛选找到兼容配件后提交询盘。
核心理念：**Interface-first matching** — 以接口/尺寸/电参为匹配依据，弱化 Model/Series 匹配。
设备范围：柜式/箱体式为主，离心机式边缘化，不做风管式/工业通风式。

## 技术栈
- Astro 7 (SSG static output) + Tailwind CSS v4 + TypeScript
- 基于 AstroWind 模板（vendor/integration）
- astro-icon (Tabler icons) · astro-seo · @astrojs/sitemap · astro-compress
- 询盘篮：纯前端 localStorage + CustomEvent
- 表单提交：自建 PHP 后端 `public/api/submit-inquiry.php`（存 data/inquiries.json + PHP mail() 发邮件）。**非 Formspree**——overview.md 旧描述过时。
- 部署：纯静态 + PHP，兼容 PHP/Apache 主机（.htaccess 已配 clean URL + Gzip + 缓存 + 安全头）

## 关键文件
- `src/config.yaml` — 站点全局配置（site=aircoolerparts.com 已配，GA id 仍为 null）
- `src/data/systems.ts` — 7 系统 × 29 子分类
- `src/data/products.ts` — 64 个产品 + 查询函数
- `src/layouts/InquiryLayout.astro` — 询盘站专用布局（Header/Footer 导航）
- `src/scripts/inquiry-basket.js` — 询盘篮核心逻辑（localStorage + CustomEvent）
- `src/components/CustomStyles.astro` — 全局样式 + 字体 + 滚动动画 + add-to-basket 全局事件代理
- `src/components/Favicons.astro` — favicon（mask-icon 颜色已改为 teal #0d9488）
- `public/.htaccess` — Apache/PHP 主机部署配置（clean URL + Gzip + 缓存 + 安全头）
- `public/robots.txt` — 含 sitemap 引用
- Content Map 文档 v3.4 — 完整内容规划蓝图

## 上线待办（2026-08-06 审计，详见 SITE_AUDIT.md）
- ✅ config.yaml site=aircoolerparts.com 已配（域名确认最终）
- ✅ robots.txt sitemap URL 已配
- ✅ favicon 已是自定义品牌图标（teal 齿轮+水滴，非 AstroWind 默认）
- ✅ Twitter handle 已改 @EVAPFit
- ✅ sitemap hreflang 已加（en/ar/es 语言通用码 + x-default 兜底）
- ✅ C1 data 目录已移出 web root（DATA_DIR → __DIR__/../../data）+ .htaccess 三层拦截
- ✅ C2 inquiries.json/ratelimit.json 已加 flock(LOCK_EX) 防竞态
- ✅ C3 email 已加 filter_var 校验 + header 值 strip \r\n 防注入
- ✅ C4 .htaccess force HTTPS 已取消注释（部署 SSL 后生效）
- ✅ H1 env.d.ts 已声明 Window.__cpLocale/__cpLink/__i18n（TS 错误 57→22，剩余为预存无关）
- ✅ H2 i18n/ui.ts 三键重复已删（ts(1117) 清零）
- ✅ H3 compatibility 路由冲突已修（getStaticPaths 跳过冲突路径）
- ✅ H4 i18n 25 个缺失翻译 key 已补
- ✅ M5 邮件引用不存在的 view-inquiries.php 已删
- 🟠 仅 3 张真实产品图（water-pump 1/2/3），64 产品其余全占位 icon
- ❌ M1 表单 placeholder 硬编码英文 / M2 GA 未配 / M3 无 Schema.org / M4 模板残留
- ❌ L1 假CAPTCHA / L2 ratelimit 无清理 / L3 Content Map 功能未实现 / L4 dist_old 残留

## 品牌设计系统
- Primary: Teal `rgb(13 148 136)` (teal-600) — 冷却/水/专业感
- Accent: Amber `rgb(245 158 11)` (amber-500) — 暖色对比/CTA
- 标题字体: Space Grotesk Variable (新)
- 正文字体: Inter Variable (保留)
- 全局工具类: glass, gradient-text, card-lift, shadow-card, shadow-card-hover, shimmer-bg
- 暗色模式 Primary 提亮为 teal-400 `rgb(45 212 191)`

## i18n 本地化架构（重要）
- **方式**: ui.ts 字典查找（非 MDX frontmatter 字段）
- `getProductName(product, locale)` → 查 `product.name.{slug}` in ui.ts
- `getProductDescription(product, locale)` → 查 `product.desc.{slug}` in ui.ts
- `getProductTypeName(typeSlug, locale)` → 查 `product.type.{typeSlug}` in ui.ts
- `getSystemName(slug, locale)` → 查 `sys.{slug}` in ui.ts
- `getAreaName(slug, locale)` → 查 `area.{slug}` in ui.ts
- 所有 64 产品名称+描述已翻译为 en/ar/es ✅
- 模板文字全部用 `__()` 翻译 ✅
- 仍为英文: spec.label、features title/desc、typeNameMap description、product.category（子分类名）
- MDX frontmatter 的 `nameAr`/`nameEs` 字段为 vestigial（getter 函数不读它们）

## 待实现功能（按 Content Map 文档）
- Faceted Search 筛选器（mounting_type / Voltage / Power / RPM / Lift Grade）
- 兼容性引擎（Evidence type + Confidence 标签）
- RFQ helper pages（how-to-identify / what-info-to-include）
- SEO landing pages（系统落地页 / 接口兼容落地页）
- 产品页增强：差异点说明模板、Schema.org 结构化数据
- 真实产品图片（当前全部为 placeholder icon）
- 规格标签(spec.label)多语言、子分类名(category)多语言、features 多语言
