# CoolerParts 项目长期记忆

## 项目定位
B2B 蒸发式冷风机配件询盘站（非电商）。客户多为懂行采购/维修人员，通过 Google SEO + 站内筛选找到兼容配件后提交询盘。
核心理念：**Interface-first matching** — 以接口/尺寸/电参为匹配依据，弱化 Model/Series 匹配。
设备范围：柜式/箱体式为主，离心机式边缘化，不做风管式/工业通风式。

## 技术栈
- Astro 7 (SSG static output) + Tailwind CSS v4 + TypeScript
- 基于 AstroWind 模板（vendor/integration）
- astro-icon (Tabler icons) · astro-seo · @astrojs/sitemap · astro-compress
- 询盘篮：纯前端 localStorage + CustomEvent，无需后端
- 表单提交：Formspree（需配置真实 form ID）
- 部署：纯静态，兼容 PHP/Apache/HTML 主机（.htaccess 已创建）

## 关键文件
- `src/config.yaml` — 站点全局配置（site 域名 + site_name 需更新为真实值）
- `src/data/systems.ts` — 7 系统 × 29 子分类
- `src/data/products.ts` — 64 个产品 + 查询函数
- `src/layouts/InquiryLayout.astro` — 询盘站专用布局（Header/Footer 导航）
- `src/scripts/inquiry-basket.js` — 询盘篮核心逻辑（localStorage + CustomEvent）
- `src/components/CustomStyles.astro` — 全局样式 + 字体 + 滚动动画 + add-to-basket 全局事件代理
- `src/components/Favicons.astro` — favicon（mask-icon 颜色已改为 teal #0d9488）
- `public/.htaccess` — Apache/PHP 主机部署配置（clean URL + Gzip + 缓存 + 安全头）
- `public/robots.txt` — 含 sitemap 引用
- Content Map 文档 v3.4 — 完整内容规划蓝图

## 部署待办
- 替换 Formspree `YOUR_FORM_ID`（src/pages/inquiry/index.astro）
- 更新 config.yaml `site` 为真实域名
- 更新 robots.txt sitemap URL 为真实域名
- 替换 favicon SVG 为 CoolerParts 品牌图标（当前是 AstroWind 默认）

## 品牌设计系统
- Primary: Teal `rgb(13 148 136)` (teal-600) — 冷却/水/专业感
- Accent: Amber `rgb(245 158 11)` (amber-500) — 暖色对比/CTA
- 标题字体: Space Grotesk Variable (新)
- 正文字体: Inter Variable (保留)
- 全局工具类: glass, gradient-text, card-lift, shadow-card, shadow-card-hover, shimmer-bg
- 暗色模式 Primary 提亮为 teal-400 `rgb(45 212 191)`

## 待实现功能（按 Content Map 文档）
- Faceted Search 筛选器（mounting_type / Voltage / Power / RPM / Lift Grade）
- 兼容性引擎（Evidence type + Confidence 标签）
- RFQ helper pages（how-to-identify / what-info-to-include）
- SEO landing pages（系统落地页 / 接口兼容落地页）
- 产品页增强：差异点说明模板、Schema.org 结构化数据
- 真实产品图片（当前全部为 placeholder icon）
