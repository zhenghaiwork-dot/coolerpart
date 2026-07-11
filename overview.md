# CoolerParts 部署检查报告

## 构建状态
- astro check: 0 errors / 0 warnings / 0 hints
- astro build: 262 pages, 12MB total, 1.1MB _astro/, 32s build time
- 模板遗留页已清理: homes/, landing/, pricing, services, products/[slug]/, [...blog]/

## PHP/HTML 部署兼容性 ✅

### 已修复
1. **`.htaccess` 已创建** — Apache/PHP 共享主机环境可直接使用
   - Clean URL 重写规则 (`/water-system` → `/water-system/index.html`)
   - Gzip 压缩 (mod_deflate)
   - 浏览器缓存 (mod_expires, _astro/ 资产 1 年 immutable)
   - 安全头 (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
   - 自定义 404 页面
2. **模板遗留页已删除** — 76 个 AstroWind demo 页面已移除
3. **Favicon mask-icon 颜色** — 从紫色 `#8D46E7` 改为品牌色 teal `#0d9488`
4. **config.yaml site_name** — 从 `AstroWind` 改为 `CoolerParts`
5. **robots.txt** — 已添加 sitemap 引用

### 部署步骤
1. 将 `dist/` 目录所有内容上传到 PHP 主机的 web root (public_html / www / htdocs)
2. 确保 `.htaccess` 已上传（FTP 客户端可能默认隐藏点文件，需开启"显示隐藏文件"）
3. Apache 需启用 `mod_rewrite`（大部分共享主机默认开启）
4. 更新 `src/config.yaml` 中的 `site` 为真实域名
5. 更新 `public/robots.txt` 中的 sitemap URL 为真实域名

### 无后端依赖
- 表单提交: Formspree (外部 SaaS，无需 PHP 后端)
- 询盘篮: localStorage (纯前端，无需数据库)
- 所有页面: 静态 HTML/CSS/JS (Astro SSG)

## 询盘提交功能 ✅

### 已修复
1. **Formspree `_next` 字段** — 提交后自动重定向回 `/inquiry?success=1` 显示成功页
   - JS 动态设置 `window.location.origin`，适配任何域名
2. **Formspree `_subject` 字段** — 邮件主题为 "New RFQ Inquiry — CoolerParts"
3. **表单注释** — 添加了配置说明注释

### ⚠️ 部署前必须操作
**替换 Formspree Form ID**:
- 文件: `src/pages/inquiry/index.astro`
- 当前: `action="https://formspree.io/f/YOUR_FORM_ID"`
- 操作: 在 https://formspree.io/forms 创建表单，获取 form ID，替换 `YOUR_FORM_ID`

### 询盘流程
1. 用户浏览产品 → 点击 "Add" → 产品存入 localStorage 询盘篮
2. Header 询盘篮 badge 实时更新计数（桌面+移动端）
3. 用户进入 /inquiry → 侧边栏显示已选产品列表
4. 询盘篮自动填充: product_name, category, specifications
5. 用户填写联系信息 → 提交表单
6. Formspree 接收邮件 → 重定向回 /inquiry?success=1 → 显示成功页

### 反垃圾保护
- Honeypot 隐藏字段（机器人会填写，人类不会）
- 速度检查（< 3 秒提交视为机器人）
- URL 计数（≥ 4 个链接拒绝提交）
- 频率限制（1 小时 5 次 / 1 天 20 次）
- Math challenge 隐藏验证

## 待配置项清单
- [ ] 替换 Formspree form ID (`src/pages/inquiry/index.astro`)
- [ ] 更新真实域名 (`src/config.yaml` → `site` 字段)
- [ ] 更新 robots.txt sitemap URL (`public/robots.txt`)
- [ ] 更新 favicon SVG 为 CoolerParts 品牌图标（当前是 AstroWind 默认）
- [ ] 配置 Google Analytics ID（可选，`src/config.yaml` → `analytics.vendors.googleAnalytics.id`）
