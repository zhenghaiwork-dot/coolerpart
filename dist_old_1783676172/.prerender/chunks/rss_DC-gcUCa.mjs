import { _ as METADATA, d as getPermalink, h as APP_BLOG, v as SITE } from "./runtime_CQAp8_Zo.mjs";
import { a as fetchPosts } from "./blog_bzv07QmT.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
import { getRssString } from "@astrojs/rss";
//#region src/pages/rss.xml.ts
var rss_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async () => {
	if (!APP_BLOG.isEnabled) return new Response(null, {
		status: 404,
		statusText: "Not found"
	});
	const posts = await fetchPosts();
	const rss = await getRssString({
		title: `${SITE.name}’s Blog`,
		description: METADATA?.description || "",
		site: "https://coolerparts.example.com",
		items: posts.map((post) => ({
			link: getPermalink(post.permalink, "post"),
			title: post.title,
			description: post.excerpt,
			pubDate: post.publishDate
		})),
		trailingSlash: SITE.trailingSlash
	});
	return new Response(rss, { headers: { "Content-Type": "application/xml" } });
};
//#endregion
//#region \0virtual:astro:page:src/pages/rss.xml@_@ts
var page = () => rss_xml_exports;
//#endregion
export { page };
