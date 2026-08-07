# CoolerParts / EVAPFit 站点稳定性审计报告

> 审计时间：2026-08-06 · 范围：代码层、安全、SEO、客户体验、内容完整性
> 构建状态：737 页静态输出通过，但 `astro check` 报 57 个 TS 错误

---

## 修复状态总览（2026-08-07 更新）

| 编号 | 级别 | 问题 | 状态 |
|------|------|------|------|
| C1 | 🔴 | 询盘数据公网可访问 | ✅ 已修 — DATA_DIR 移出 webroot + .htaccess 三层拦截 |
| C2 | 🔴 | 竞态丢询盘 | ✅ 已修 — inquiries + ratelimit 均加 flock(LOCK_EX) |
| C3 | 🔴 | 邮件头注入 | ✅ 已修 — filter_var 校验 + header 值 strip \r\n |
| C4 | 🔴 | HTTPS 未强制 | ✅ 已修 — .htaccess 取消注释 force HTTPS |
| H1 | 🟠 | 57 个 TS 错误 | ✅ 已修 — env.d.ts 加 Window 全局声明 (57→22，剩余为预存无关错误) |
| H2 | 🟠 | i18n 三键重复 | ✅ 已修 — 删除 1812/1847/1892 重复 (ts(1117) 清零) |
| H3 | 🟠 | 路由优先级冲突 | ✅ 已修 (2026-08-06) |
| H4 | 🟠 | i18n 缺翻译 key | ✅ 已修 (2026-08-06) |
| H5 | 🟠 | 产品图片不足 | ❌ 待办 — 需实拍图，非代码任务 |
| M1-M5 | 🟡 | 表单/GA/Schema/残留/邮件断链 | M5 ✅ 已修 (删 view-inquiries 引用)，其余待办 |
| L1-L4 | 🟢 | 假CAPTCHA/无清理/未实现/旧构建 | ❌ 待办 |
| L5 | 🟢 | favicon | ✅ 非问题 |

---

## 🔴 CRITICAL — 上线前必修，否则数据/安全风险

### C1. 询盘数据公网可访问（数据外泄）
- **现象**：PHP 后端 `public/api/submit-inquiry.php` 把每条询盘（含客户姓名、邮箱、电话、公司、规格）存到 `public/data/inquiries.json`。`public/.htaccess` 未对 `/data` 目录做任何访问限制。
- **后果**：一旦有客户提交询盘，任何人可直接访问 `https://aircoolerparts.com/data/inquiries.json` 拉走全部客户库。`data/ratelimit.json` 同理（含所有提交者 IP）。
- **证据**：`submit-inquiry.php:18` `$DATA_DIR = __DIR__ . '/../data'` → 解析为 `public/data/`（web root 内）；`.htaccess` 全文无 `<Directory>`/`<Files>` 保护 data。
- **修复**：将 data 目录移出 web root（如 `__DIR__ . '/../../data'`，即 public 之外）；或在 `.htaccess` 加：
  ```apache
  <Directory "/data">
    Require all denied
  </Directory>
  ```
  并加 `Options -Indexes` 防 目录列表。

### C2. 询盘写入有竞态条件（丢询盘）
- **现象**：`inquiries.json` 和 `ratelimit.json` 都是 read-modify-write，中间无文件锁（`file_get_contents` → `file_put_contents` 之间无 `flock`）。
- **后果**：两个客户同时提交 → 后写覆盖先写，丢失一条询盘。B2B 询盘单条价值高，丢一条可能丢一个大单。
- **证据**：`submit-inquiry.php:124-129`（inquiries）、`:79-101`（ratelimit）。
- **修复**：用 `flock(LOCK_EX)` 包裹读写循环；或每条询盘写独立文件（`inquiries/inq_xxx.json`）再汇总。

### C3. 邮件头注入漏洞
- **现象**：`Reply-To:` 直接用 `$inquiry['email']` 原始值（`:136`），`mail()` 的 subject 拼了 `$inquiry['company']`（`:132`）。
- **后果**：恶意 email 含 `\r\n` 可注入伪造邮件头/发件人，被利用发垃圾邮件导致域名信誉受损。
- **修复**：`filter_var($email, FILTER_VALIDATE_EMAIL)` 强校验；对进 header 的所有值做 `str_replace(["\r","\n"], '', $val)`。

### C4. HTTPS 未强制
- **现象**：`.htaccess:7-10` 的 force HTTPS 被注释（"uncomment after SSL is active"）。
- **后果**：B2B 站收集邮箱/电话，明文 HTTP 提交可被中间人截获；且 Google 对 HTTP 站降权。
- **修复**：部署 SSL 证书后取消注释那 3 行 RewriteRule。

---

## 🟠 HIGH — 影响稳定/转化，尽快修

### H1. 57 个 TypeScript 错误（astro check）
构建不 fail（astro build 不严格跑 tsc），但反映代码质量问题，且 IDE 会全程报错：
- **主因（占绝大多数）**：`window.__cpLocale` / `window.__cpLink` / `window.__i18n` 在 `InquiryPage.astro`、`AllProductsPage.astro`、`ProductDetailPage.astro` 的客户端脚本中使用，但 `src/env.d.ts` 未声明 Window 全局类型 → `ts(2339) Property does not exist`。
- **修复**：`env.d.ts` 加：
  ```ts
  declare global {
    interface Window {
      __cpLocale?: string;
      __cpLink?: (p: string) => string;
      __i18n?: Record<string, string>;
    }
  }
  export {};
  ```

### H2. i18n 三个翻译键重复定义（静默覆盖）
- **现象**：`src/i18n/ui.ts` 中三个 key 各定义两次：
  - `inquiry.submit`：行 731 + 行 1812（值相同）
  - `inquiry.remove`：行 691 + 行 1847（值相同）
  - `inquiry.success_title`：行 736（`'Inquiry Submitted!'` 带感叹号）+ 行 1892（`'Inquiry Submitted'` 无感叹号）
- **后果**：JS 对象重复键后者覆盖前者，`success_title` 的带感叹号版本被无感叹号版本静默丢弃。`ts(1117)` 报错。
- **修复**：删掉 691/731/736 三处重复（保留 1812/1847/1892），或反之。

### H3. 路由优先级冲突（构建 6 条警告）
- **现象**：`/[system]/[area]` 动态路由与 `/compatibility/[method]` 冲突，导致 `/compatibility/cross-reference`、`/compatibility` 在 en/ar/es 三语都无法从 `[system]` 路由渲染。
- **后果**：可能部分 compatibility 页面未生成或靠更具体路由兜底；路由设计有歧义，后续加页面易踩坑。
- **修复**：检查 `src/pages/compatibility/` 路由结构，给 `[system]/[area]` 的 getStaticPaths 排除 compatibility 前缀，或调整路由层级。

### H4. i18n 缺翻译 key（构建大量警告）
- **现象**：404、blog 等页面在 ar/es 缺翻译 key，回退英文。
- **后果**：阿拉伯语/西语用户在这些页面看到英文片段，多语言体验割裂，削弱本地化信任感。
- **修复**：补齐 `ui.ts` 中 404/blog 等缺失 key 的 ar/es 翻译。

### H5. 真实产品图片严重不足
- **现象**：64 个产品仅 3 张真实图（`public/images/products/water-pump-1/2/3.webp`），其余全是占位 icon。
- **后果**：B2B 配件站买家靠图识别配件接口/尺寸，无图 = 转化杀手 + 停留时间短 + SEO 无图片搜索流量。
- **修复**：优先为高频部件（水泵、电机、冷却介质、阀）补实拍图，至少覆盖 Top 20 产品。

---

## 🟡 MEDIUM — 可提升，影响体验/SEO

### M1. 表单硬编码英文（多语言破洞）
- `InquiryPage.astro:158` `placeholder="Your company"`、`:186` `placeholder="+86 123 4567 8900"` 硬编码，ar/es 版本不翻译。且中国电话格式作 placeholder 不适合全球 B2B 客户。
- **修复**：改用 `__('inquiry.company_placeholder')` 等 i18n key。

### M2. Google Analytics 未配置
- `config.yaml:67` `googleAnalytics.id: null`。无法追踪询盘转化、流量来源、热门产品页。
- **修复**：配 GA4 ID，并在询盘成功页触发 `conversion` 事件。

### M3. 无 Schema.org 结构化数据
- 产品页无 `Product` / `Offer` JSON-LD，Google 不出富结果（rich results），损失 SERP 展示位。Content Map v3.4 列为待实现。
- **修复**：产品页注入 Product schema（name/brand/category/MPN 兼容列表）。

### M4. 模板残留死代码/文件
- `src/navigation.ts` 仍含 AstroWind demo 导航（Landing/Blog 子菜单指向已删除的 `/landing/*` 页）。InquiryLayout 用自己的 `headerLinks` 没引用它，但属死代码混淆源。
- `public/decapcms/`（Decap CMS 配置 + index.html）— 未使用的 CMS，bloat + 潜在攻击面。
- `public/_headers`（Netlify 专用 headers）— PHP/Apache 主机忽略，残留。
- `Layout.astro:43` `<link rel="preconnect" href="https://images.unsplash.com">` — 模板遗留，站点图片走 `cdn.aircoolerparts.com`，无用 preconnect。
- **修复**：删除上述残留；`navigation.ts` 清理或标注弃用。

### M5. 邮件引用不存在的端点
- `submit-inquiry.php:177` 邮件正文写 `View all: /api/view-inquiries.php`，但 `public/api/` 只有 `submit-inquiry.php`，该文件不存在 → 管理员收邮件点链接 404。
- **修复**：实现 view-inquiries.php（带鉴权）或删掉该行。

---

## 🟢 LOW — 打磨项

### L1. 数学验证是"假 CAPTCHA"
- challenge 答案由 JS 自动填（`InquiryPage.astro:508-512`），服务器只校验范围 4-18（`submit-inquiry.php:70-75`）。防不住跑 JS 的机器人，只挡无 JS 裸爬虫。对 B2B 够用但可加强（时间戳签名 / 服务端 challenge）。

### L2. rate limit 文件无清理
- `ratelimit.json` 按 IP 累积，从不删旧 IP 条目，长期膨胀。建议定期 prune 不活跃 IP。

### L3. Content Map 核心功能未实现
- Faceted Search 筛选器（mounting_type/Voltage/Power/RPM/Lift Grade）、兼容性引擎（Evidence+Confidence 标签）、RFQ helper 页、SEO landing 页均未实现。这些是站点差异化卖点，目前仅骨架。

### L4. 旧构建残留
- 仓库根 `dist_old_1783676172/`（49 文件）旧构建残留，应清理避免混淆部署。

### L5. favicon 澄清（已OK，非问题）
- `src/assets/favicons/favicon.svg` 已是自定义品牌图标（teal 圆角方块 + 白色齿轮 + 水滴），**不是** AstroWind 默认。overview.md / 工作记忆里的"替换 favicon"待办过时，可划掉。建议确认 `public/logo.svg` 与 dist 输出同步即可。

---

## 优先级建议

| 立即（上线前） | 本周 | 迭代 |
|---|---|---|
| C1 数据外泄、C2 竞态丢询盘、C3 邮件注入、C4 HTTPS | H1-H5 TS错误/i18n/路由/补图 | M1-M5、L1-L4 |

> **最小上线修复集**：C1+C3+C4（约 1-2 小时）即可堵住安全口子；C2 加 flock 约 30 分钟。这四项做完，站点可安全上线；其余按迭代推进。
