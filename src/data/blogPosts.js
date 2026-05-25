// Central registry of all blog posts.
// To add a new blog post:
// 1. Add a new entry below following the same structure
// 2. Create the corresponding page file in src/pages/blog/
// 3. Add the route in App.jsx
// 4. Add the URL to public/sitemap.xml

export const blogPosts = [
  // NEW POST — D365FO Implementation Timeline
  {
    slug: "how-long-does-d365fo-implementation-take",
    title: "How Long Does a D365FO Implementation Take? A Realistic Timeline Guide for 2026",
    excerpt: "Microsoft Dynamics 365 Finance & Operations implementation timeline guide. Realistic durations for SMEs, mid-market, and global enterprises. Honest insights from a D365FO developer covering phase-by-phase breakdown, what speeds up projects, and what slows them down.",
    category: "D365 Implementation",
    datePublished: "2026-05-19",
    readTime: "12 min read",
  },

  // EXISTING POST — AX 2012 End of Support
  {
    slug: "ax-2012-end-of-support-2028-india",
    title: "AX 2012 End of Support in 2028 — What Every Indian Enterprise Needs to Know Now",
    excerpt: "Microsoft has announced end of support for Dynamics AX 2012 by January 2028. Here's the complete migration guide for Indian enterprises...",
    category: "AX 2012 Migration",
    datePublished: "2026-05-18",
    readTime: "8 min read",
  },
];

export const getBlogPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);