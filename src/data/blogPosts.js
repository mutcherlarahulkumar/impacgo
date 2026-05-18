// Central registry of all blog posts.
// To add a new blog post:
// 1. Add a new entry below following the same structure
// 2. Create the corresponding page file in src/pages/blog/
// 3. Add the route in App.jsx
// 4. Add the URL to public/sitemap.xml

export const blogPosts = [
  {
    slug: "ax-2012-end-of-support-2028-india",
    title:
      "AX 2012 End of Support in 2028 — What Every Indian Enterprise Needs to Know Now",
    excerpt:
      "Microsoft AX 2012 R3 extended support ends in January 2028. Indian enterprises running on AX 2012 face hard deadlines for security, GST compliance, and operational continuity. Here's what every CTO, CFO, and IT head needs to plan for — and why starting the migration assessment in 2026 is critical.",
    coverImage: "/og-ax-blog.jpg", // fallback to /logo.png if missing
    category: "AX 2012 Migration",
    author: "Impacgo Solutions",
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
    readTime: "8 min read",
    tags: [
      "AX 2012",
      "D365 Finance and Operations",
      "ERP Migration",
      "Microsoft Dynamics",
      "India ERP",
    ],
    relatedServicePath: "/services/ax-migration",
    relatedServiceLabel: "AX 2012 to D365FO Migration Services",
  },
  // Add more posts here over time...
];

export const getBlogPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);